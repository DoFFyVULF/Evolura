import Link from "next/link"
import { motion } from 'framer-motion'
import { useState } from "react";

interface LinkToPageProps {
    href: string;
    selectedText?: string;
    moreText?: string;
    className? :string
}


export default function LinkToPage({ href, selectedText, moreText, className}: LinkToPageProps) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Link href={href} className={className}>
            <motion.div
                className="w-full max-w-2xl mx-auto rounded-lg border border-gray-700 p-6 flex items-center justify-center gap-3 relative overflow-hidden"
                style={{
                    backgroundColor: isHovered ? 'rgb(10, 10, 10)' : 'rgb(13, 13, 13)',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
                <div
                    className="w-3 h-3 rounded-sm flex-shrink-0"
                    style={{
                        backgroundColor: 'rgb(255, 47, 53)',
                    }}
                />

                <div className="relative mt-1.5 h-8 overflow-hidden">
                    <motion.p
                        className="text-white text-xl font-medium whitespace-nowrap"
                        initial={{ y: 0 }}
                        animate={{
                            y: isHovered ? -32 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {selectedText}
                    </motion.p>

                    <motion.p
                        className="text-white text-xl font-medium whitespace-nowrap absolute top-0 left-0"
                        initial={{ y: 32 }}
                        animate={{
                            y: isHovered ? 0 : 32,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {moreText}
                    </motion.p>
                </div>
            </motion.div>
        </Link>
    )
}