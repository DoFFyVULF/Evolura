'use client'
import WorkCardsData from "@/app/data/WorkCards.data"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useCallback } from "react"

function useWindowWidth() {
    const [width, setWidth] = useState<number | null>(null);

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
}


export default function WorkCard({ 
    cardWidth = 480, 
    excludeLink = null, 
    cardCount = null
}: { 
    cardWidth?: number;
    excludeLink?: string | null;
    cardCount?: number | null
}) {
    const width = useWindowWidth();
    const isMobile = width !== null ? width <= 1315 : false;
    const [hoverId, setHoverId] = useState<number | null>(null);

    const handleMouseEnter = useCallback((id: number) => {
        setHoverId(id);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoverId(null);
    }, []);

    let filteredCards = WorkCardsData.filter(card => (card.link !== excludeLink));

    if(cardCount !== null && cardCount > 0){
        filteredCards = filteredCards.slice(0, cardCount)
    }

    return (
        <div className="flex justify-center gap-4 flex-wrap">
            {filteredCards.map((card) => (
                <Link
                    href={`/work/${card.link}`}
                    key={card.id}
                    style={{ width: cardWidth }}
                    className="relative block"
                >
                    <div
                        style={{ maxWidth: cardWidth, height: cardWidth * 0.9 }}
                        className="min-w-[300px] max-h-[450px] min-h-[340px] h-auto overflow-hidden relative cursor-pointer"
                        onMouseEnter={() => handleMouseEnter(card.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Image
                            src={card.previewImg}
                            fill
                            alt={card.title}
                            sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 50vw, ${cardWidth}px`}
                            className={`object-cover transition-all duration-500 ${
                                hoverId === card.id ? 'scale-110' : ''
                            }`}
                        />

                        <AnimatePresence mode="wait">
                            {(isMobile || hoverId === card.id) && (
                                <motion.div
                                    key={`text-${card.id}`}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 11 }}
                                    exit={{ opacity: 0, y: 40 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    className="absolute inset-0 pointer-events-none"
                                >
                                    <div className="absolute top-3/4 left-8 transform -translate-y-1/2 flex flex-col items-center gap-2">
                                        <span className="uppercase text-4xl text-white text-center">{card.title}</span>
                                        <span className="uppercase text-xl bg-black/45 p-3 rounded-2xl text-center text-white">
                                            {card.tag}
                                        </span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </Link>
            ))}
        </div>
    );
}

