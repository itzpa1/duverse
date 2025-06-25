"use client";
import { useEffect, useState } from "react";
import { db, auth } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

type FormData = {
    subject: string;
    course: string;
    year?: string;
    subjectViews?: string;
    isNep?: boolean;
    isSolved?: boolean;
    isPlaylist?: boolean;
    ytUrl?: string;
};

export default function UploadAdmin() {

    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [file, setFile] = useState<File | null>(null);
    const [collectionName, setCollectionName] = useState<'pyq' | 'notes' | 'syllabus' | 'ytVdo'>('pyq');

    const [form, setForm] = useState<FormData>({
        subject: '',
        course: '',
        year: '',
        subjectViews: '',
        isNep: false,
        isSolved: false,
        isPlaylist: false,
        ytUrl: '',
    });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (!user) {
                router.push('/author');
            }
            else setLoading(false);
        });
        return unsubscribe;
    }, [router, auth]);

    if (loading) return <div>Loading...</div>;



    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        let data: any = {
            subject: form.subject,
            course: form.course,
        };

        if (collectionName === 'ytVdo') {
            data.isPlaylist = form.isPlaylist;
            data.ytUrl = form.ytUrl;
        } else {
            data.subjectViews = Number(form.subjectViews);
            data.year = Number(form.year);

            if (collectionName === 'pyq') {
                data.isNep = form.isNep;
                data.isSolved = form.isSolved;
            }

            if (file && file.size > 10 * 1024 * 1024) { // 10MB
                alert("File size must be less than 10MB");
                return;
            }

            if (file) {
                const formData = new FormData();
                formData.append('file', file);
                const uploadPresets: Record<string, string> = {
                    pyq: 'duverse_pyq',
                    notes: 'duverse_notes',
                    syllabus: 'duverse_syllabus',
                };

                formData.append('upload_preset', uploadPresets[collectionName]);
                formData.append("resource_type", "raw");

                try {
                    const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/raw/upload`, {
                        method: 'POST',
                        body: formData,
                    });

                    if (!res.ok) throw new Error('Upload failed');

                    const cloudRes = await res.json();
                    if (!cloudRes.secure_url) throw new Error('No URL returned');

                    data.url = cloudRes.secure_url;
                } catch (error) {
                    console.error('Upload error:', error);
                    alert('File upload failed');
                    return;
                }
            } else {
                return alert("Please upload a PDF file.");
            }
        }

        await addDoc(collection(db, collectionName), data);
        alert("Data added to Firebase successfully.");
    }

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Admin Upload</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <select
                    value={collectionName}
                    onChange={(e) => setCollectionName(e.target.value as any)}
                    className="border p-2"
                >
                    <option value="pyq">PYQ</option>
                    <option value="notes">Notes</option>
                    <option value="syllabus">Syllabus</option>
                    <option value="ytVdo">YouTube Video</option>
                </select>

                <input
                    type="text"
                    placeholder="Subject"
                    className="border p-2 w-full"
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Course"
                    className="border p-2 w-full"
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                />

                {collectionName !== 'ytVdo' && (
                    <>
                        <input
                            type="number"
                            placeholder="Year"
                            className="border p-2 w-full"
                            onChange={(e) => setForm({ ...form, year: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder="Subject Views"
                            className="border p-2 w-full"
                            onChange={(e) => setForm({ ...form, subjectViews: e.target.value })}
                        />
                    </>
                )}

                {collectionName === 'pyq' && (
                    <>
                        <label><input type="checkbox" onChange={(e) => setForm({ ...form, isNep: e.target.checked })} /> NEP?</label>
                        <label><input type="checkbox" onChange={(e) => setForm({ ...form, isSolved: e.target.checked })} /> Solved?</label>
                    </>
                )}

                {collectionName === 'ytVdo' ? (
                    <>
                        <label><input type="checkbox" onChange={(e) => setForm({ ...form, isPlaylist: e.target.checked })} /> Playlist?</label>
                        <input
                            type="text"
                            placeholder="YouTube URL"
                            className="border p-2 w-full"
                            onChange={(e) => setForm({ ...form, ytUrl: e.target.value })}
                        />
                    </>
                ) : (
                    <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                )}

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Upload</button>
            </form>
        </div>
    );
}
