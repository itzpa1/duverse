'use client';

import SectionHeader from '@/components/SectionHeader';
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
// import emailjs from "emailjs-com"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { useState } from "react"
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    subject: z.string().min(1, "Subject cannot be empty"),
    message: z.string().min(1, "Message cannot be empty"),
})

type FormData = z.infer<typeof formSchema>

const ContactForm = () => {
    // const [success, setSuccess] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = async (data: FormData) => {
        try {
            // Temporarily disabled EmailJS
            // const res = await emailjs.send(
            //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            //   {
            //     from_name: data.name,
            //     from_email: data.email,
            //     message: data.message,
            //   },
            //   process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            // )

            // if (res.status === 200) {
            //   setSuccess(true)
            // }
            console.log("Form submitted:", data)
            reset()
            toast.success("Message sent successfully!", {
                style: {
                    backgroundColor: "#60a5fa",
                    color: "white",
                    border: "none"
                },
            })
        } catch (err) {
            console.error("Error sending message:", err)
        }
    }


    return (
        <div className='w-full sm:px-4 px-14 py-4 md:py-6 mt-10 flex flex-col items-center justify-center'>
            <SectionHeader title='Contact Us ☎️' subtitle='Have questions or feedback? We&apos;d love to hear from you.' pt={4} />
            <div className=" px-4 flex mt-4 justify-center">
                <div className="bg-white rounded-2xl shadow-xl w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">

                    {/* Left: Contact Form */}
                    <div className="w-full md:w-1/2 p-8 space-y-6 bg-blue-50 from-white to-blue-50 group">
                        <div className='w-full flex gap-4'>
                            <div className='flex flex-col w-full justify-between'>
                                <h1 className="text-2xl font-bold text-black">Get In Touch ❔</h1>
                                <p>Please provide the following details, and we&apos;ll be in touch as soon as possible.</p>
                            </div>
                            <Image src={assets.contact}
                                className='w-16 object-contain' alt='contact' />

                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" {...register("name")} placeholder='Enter Your Name' />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" {...register("email")} placeholder='Enter Your Mail' />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="email">Subject</Label>
                                <Input id="subject" type="text" {...register("subject")} placeholder='Write the subject' />
                                {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" rows={4} {...register("message")} placeholder='write your messages...' />
                                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                            </div>

                            <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-400 hover:bg-blue-500">
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </form>

                        {success && <p className="text-green-600 font-medium flex items-center">
                            <CheckCircle size={40} />
                            Message sent successfully!</p>}
                    </div>


                    {/* Right: Map + Info */}
                    <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-end gap-4 relative ">
                        {/* <div className="flex flex-col">
                            <Link
                                className='flex items-center gap-2 font-medium'
                                href={'mailto:duverse@gmail.com'}>
                                <Mail size={20} color='#60a5fa' />
                                duverse@gmail.com
                            </Link>
                        </div> */}
                        <Image 
                        src={assets.contact_form} 
                        className='absolute z-10 w-full '
                        alt='contact_form' />
                        <div className=" rounded-xl shadow-md overflow-hidden w-full h-64 border z-20">
                            <iframe
                                className="w-full h-full z-10 grayscale contrast-100 brightness-90 hover:brightness-100 hover:contrast-100 hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] "
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.278223714112!2d77.16464607516632!3d28.59142907568731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d3cf842aa09%3A0x7c2d506edd36b06f!2sAtma%20Ram%20Sanatan%20Dharma%20College!5e0!3m2!1sen!2sin!4v1749195697248!5m2!1sen!2sin"
                                loading="lazy"
                                allowFullScreen
                            // referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;