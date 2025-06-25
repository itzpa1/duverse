'use client';
import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import SectionHeader from '@/components/SectionHeader';

const PDFMerger = () => {
    const [mergedPdf, setMergedPdf] = useState<Uint8Array | null>(null);

    const handleMerge = async (files: File[]) => {
        const mergedPdf = await PDFDocument.create();
        for (const file of files) {
            const arrayBuffer = await file.arrayBuffer();
            const pdfDoc = await PDFDocument.load(arrayBuffer);
            const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
            pages.forEach(page => mergedPdf.addPage(page));
        }
        const mergedPdfBytes = await mergedPdf.save();
        setMergedPdf(mergedPdfBytes);
    };

    return (
        <div className='w-full sm:px-4 px-14 py-4 md:py-6 mt-10 flex flex-col items-center justify-center'>
            <SectionHeader title='Edit PDF online For Free' subtitle='' />
                <div className="p-4 border rounded-lg">
                <input
                    type="file"
                    accept=".pdf"
                    multiple
                    onChange={(e) => handleMerge(Array.from(e.target.files || []))}
                    className="mb-4"
                />
                {mergedPdf && (
                    <a
                        href={URL.createObjectURL(new Blob([mergedPdf], { type: 'application/pdf' }))}
                        download="merged.pdf"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Download Merged PDF
                    </a>
                )}
        </div>
        </div >
    );
}

export default PDFMerger;