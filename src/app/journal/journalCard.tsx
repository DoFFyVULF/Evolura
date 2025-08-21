'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion"
import JournalCardData from "../data/JournalCards.data"
import useWindowWidth from "../components/hooks/useWindowWidth";
import Link from "next/link";


interface JournalCardProps {
    className?: string;
    cardCount?: number;
    excludeLink?: number;
}


export default function JournalCard({ cardCount = null, className = null, excludeLink = null }: { cardCount?: number | null; className?: string | null; excludeLink?: number | null }) {
    const width = useWindowWidth();
    const isMobile = width !== null ? width <= 1315 : false;

    const [hoverId, setHoverId] = useState<number | null>(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

    let JournalCardFiltered = JournalCardData.filter(card => (card.id !== excludeLink));

    if (cardCount !== null && cardCount > 0) {
        JournalCardFiltered = JournalCardData.slice(0, cardCount)
    }

    useEffect(() => {
        const followCursor = () => {
            setCursorPosition(prev => ({
                x: prev.x + (mousePosition.x - prev.x) * 0.1,
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
                {(width != null && width > 1024) && (hoverId !== null) && (
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
            <div className={className ? className : 'flex justify-center gap-4 max-[1028px]:flex-wrap'}>
                {JournalCardFiltered.map((card) => (
                    <Link href={`/journal/${card.slug}`} key={card.id}>
                        <div
                            className="max-w-[360px] w-full h-[460px]  relative overflow-hidden rounded-lg cursor-none"
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
                                className="w-full h-full object-cover"
                            />
                            <div className="flex flex-col items-start backdrop-blur-sm bg-black/30 absolute bottom-0 left-0 right-0 p-4">
                                <span className="text-white text-lg">{card.title}</span>
                                <span className="text-[16px] bg-black/40 px-3 py-1 rounded-full mt-2">{card.tag}</span>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    )
}


