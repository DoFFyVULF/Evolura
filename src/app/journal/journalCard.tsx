import Image from "next/image"
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion"
import JournalCardData from "../data/JournalCards.data"

export default function JournalCard() {

    const [hoverId, setHoverId] = useState<number | null>(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })


    useEffect(() => {
        const followCursor = () => {
            setCursorPosition(prev => ({
                x: prev.x + (mousePosition.x - prev.x) * 0.1, // 0.1 = скорость следования (меньше = медленнее)
                y: prev.y + (mousePosition.y - prev.y) * 0.1
            }))
            requestAnimationFrame(followCursor)
        }

        const animationFrame = requestAnimationFrame(followCursor)
        return () => cancelAnimationFrame(animationFrame)
    }, [mousePosition])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])
    return (
        <div
            className="relative"
        >
            <AnimatePresence mode="wait">
                {hoverId !== null && (
                    <motion.div
                        key="cursor"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="fixed pointer-events-none z-50 text-white text-lg text-center items-center justify-center backdrop-blur-sm bg-black/20 px-4 py-2 rounded-lg uppercase"
                        style={{
                            left: cursorPosition.x + 10,
                            top: cursorPosition.y - 10,


                        }}
                    >
                        read post
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="flex justify-center gap-4 max-[1028px]:flex-wrap">
                {JournalCardData.slice(0, 3).map((card) => (
                    <div
                        key={card.id}
                        className="max-w-[360px] max-h-[460px] min-h-[400px] relative overflow-hidden rounded-lg cursor-none"
                        onMouseEnter={(e) => {
                            setHoverId(card.id)
                            setCursorPosition({ x: e.clientX, y: e.clientY })
                        }}
                        onMouseLeave={() => setHoverId(null)}
                    >
                        <Image
                            src={card.img}
                            width={360}
                            height={460}
                            alt={card.title}
                            className="object-cover w-full h-full transition-all duration-500"
                        />
                        <div className="flex flex-col items-start backdrop-blur-sm bg-black/30 absolute bottom-0 left-0 right-0 p-4">
                            <span className="text-white text-lg">{card.title}</span>
                            <span className="text-[16px] bg-black/40 px-3 py-1 rounded-full mt-2">{card.tag}</span>
                        </div>
                    </div>
                ))}
              
            </div>
        </div>
    )
}