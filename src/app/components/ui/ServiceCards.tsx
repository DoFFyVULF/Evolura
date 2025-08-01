'use client'
import ServiceDataCards from "@/app/data/ServiceCards.data"
import Image from "next/image"
import { useEffect, useState, useReducer } from "react"
import { motion, AnimatePresence } from 'framer-motion'

type Action = { type: 'toggle', id: number }
type State = number | null

const cardReducer = (state: State, action: Action): State => {
  if (action.type === 'toggle') {
    return state === action.id ? null : action.id
  }
  return state
}

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

export default function ServiceCards() {
  const [activeId, dispatch] = useReducer(cardReducer, null)
  const width = useWindowWidth()
  const isMobile = width !== null ? width <= 1315 : false;
  const [hoverId, setHoverId] = useState<number | null>(null)

  useEffect(() => {
    if (width !== null && isMobile && activeId !== null) {
      dispatch({ type: 'toggle', id: activeId })
    }
  }, [isMobile, activeId, width])

  return (
    <div className="flex justify-center gap-5 max-[1315px]:flex-wrap">
      {ServiceDataCards.map(card => (
        <div
          key={card.id}
          className={`
          relative rounded-lg overflow-hidden mt-3 transition-all duration-300
          min-h-[340px] h-auto
          ${isMobile ? 'w-full max-w-[540px]' : activeId === card.id ? 'w-[540px]' : 'w-[340px]'}
          max-[489px]:h-auto
          cursor-pointer
        `}

          onClick={() => {
            if (!isMobile) {
              dispatch({ type: 'toggle', id: card.id })
            }
          }}
          onMouseEnter={() => !isMobile && setHoverId(card.id)}
          onMouseLeave={() => setHoverId(null)}


        >
          <Image
            src={card.img}
            fill
            alt={card.title}
            className="object-cover opacity-88"
          />
          <span className="absolute top-2 left-3 text-3xl uppercase text-white max-[489px]:relative max-[489px]:text-center max-[489px]:top-3 max-[489px]:left-0">{card.title}</span>

          <AnimatePresence>
            {!isMobile && hoverId === card.id && (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 11 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0 pointer-events-none"
              >
                {activeId !== card.id && (
                  <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl p-2 rounded uppercase pointer-events-auto">
                    Details
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {(isMobile || activeId === card.id) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10, }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute top-2 right-3 w-60 p-2 bg-black/60 text-white text-sm rounded-bl-lg pointer-events-auto 
              max-[489px]:relative max-[489px]:top-16 max-[489px]:right-auto max-[489px]:w-full
            max-[489px]:bg-black/80 max-[489px]:text-center 
              max-[489px]:p-4 max-[489px]:text-[12px] max-[489px]:rounded-3xl">
                <motion.p
                  key={card.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                  {card.text}
                </motion.p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm p-3 flex items-center gap-3 pointer-events-auto">
                <div className="text-white font-bold text-5xl tracking-[0.3rem] p-5 bg-black/25 max-[489px]:text-3xl">
                  {card.id}
                </div>
                <ul className="flex flex-wrap gap-2 text-sm bg-black/25 p-3">
                  {card.tags.map((tag, index) => (
                    <motion.li
                      key={tag}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: index * 0.08,
                      }}
                      className="bg-black/50 px-2 py-1 rounded whitespace-nowrap max-[489px]:text-sm"
                    >
                      {tag}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}