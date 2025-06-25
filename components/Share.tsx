import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaTimes,
    FaTwitter,
    FaFacebook,
    FaWhatsapp,
    FaLink,
    FaShare
} from 'react-icons/fa';
import { Button } from './ui/button';
import { LucideShare2 } from 'lucide-react';

type ShareModalProps = {
    url: string;
    title?: string;
};

export default function ShareModal({ url, title = "Check this out!" }: ShareModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    // Handle native sharing (mobile)
    const handleNativeShare = async () => {
        try {
            await navigator.share({ title, text: title, url });
            setIsOpen(false);
        } catch (err) {
            // Fallback to copy link
            handleCopyLink();
        }
    };

    // Copy link to clipboard
    const handleCopyLink = () => {
        navigator.clipboard.writeText(url);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    // Social sharing functions
    const shareOn = (platform: string) => {
        const shares = {
            twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`
        };
        window.open(shares[platform as keyof typeof shares], '_blank');
        setIsOpen(false);
    };

    return (
        <>
            {/* Trigger Button */}
            <Button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded"
            >
                <LucideShare2 /> Share
            </Button>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                        onClick={() => setIsOpen(false)}
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-white rounded-lg w-full max-w-md p-6"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold">Share</h3>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            {/* Mobile: Use Web Share API if available */}
                            {navigator.share && (
                                <Button
                                    onClick={handleNativeShare}
                                    className="w-full flex items-center justify-center gap-2 bg-blue-400 hover:bg-blue-500 text-white py-3 rounded mb-4"
                                >
                                    <LucideShare2 /> Share via...
                                </Button>
                            )}

                            {/* Desktop: Social Sharing Options */}
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => shareOn('twitter')}
                                    className="flex items-center gap-2 justify-center p-3 bg-blue-400 text-white rounded"
                                >
                                    <FaTwitter /> Twitter
                                </button>
                                <button
                                    onClick={() => shareOn('facebook')}
                                    className="flex items-center gap-2 justify-center p-3 bg-blue-600 text-white rounded"
                                >
                                    <FaFacebook /> Facebook
                                </button>
                                <button
                                    onClick={() => shareOn('whatsapp')}
                                    className="flex items-center gap-2 justify-center p-3 bg-green-500 text-white rounded"
                                >
                                    <FaWhatsapp /> WhatsApp
                                </button>
                                <button
                                    onClick={handleCopyLink}
                                    className="flex items-center gap-2 justify-center p-3 bg-gray-500 text-white rounded"
                                >
                                    <FaLink /> {isCopied ? "Copied!" : "Copy Link"}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}