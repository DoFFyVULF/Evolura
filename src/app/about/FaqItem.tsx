'use client'
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { FAQType } from "../data/FAQ.data"

export default function FaqItem({question = '', answer = ''}: FAQType) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="w-full p-4 bg-[#171717] rounded transition-all duration-300 ease-out" onClick={() => setIsOpen(!isOpen)}>
            <div className="">
                <span className="text-xl text-center ml-3 max-[666px]:ml-0">{question}</span>
            </div>
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                     
                    >
                        <div className="w-full p-6 bg-[#11111196]">
                            <p className="max-w-[900px] text-lg text-justify">{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}