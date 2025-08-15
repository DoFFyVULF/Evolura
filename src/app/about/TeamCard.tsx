'use client'
import TeamCardsData from "../data/TeamCards.data"
import { useState } from "react"

export default function TeamCard() {
    const [hoverId, setHoverId] = useState<number | null>(null)
    return (
        TeamCardsData.map((card) => (
            <div className="max-w-[300px] max-h-[350] min-h-[300px]  overflow-hidden relative" key={card.id}
                onMouseEnter={() => setHoverId(card.id)}
                onMouseLeave={() =>setHoverId(null)}>
                <img src={card.img} alt="" className={`object-cover w-full h-full transition-all duration-600 ${hoverId === card.id ? 'scale-110' : ''}`} />
                <div className="flex flex-col items-center justify-baseline gap-3 -mt-35 backdrop-blur-sm bg-gray/10 rounded relative p-2 m-2">
                    <span className="uppercase text-[24px]">{card.name}</span>
                    <span className="text-[18px]">{card.post}</span>
                    <ul className="flex flex-row justify-between gap-3">
                        <li>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256"
                                    style={{ fill: '#FFFFFF', mixBlendMode: 'normal' }}>
                                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                        <g transform="scale(5.12,5.12)"><path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 
                            -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path></g></g>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24"
                                    style={{ fill: '#FFFFFF' }}>
                                    <path d="M18.231,3.618c-2.312,1.736-4.785,5.107-5.948,7.244c-0.123,0.226-0.444,0.226-0.567,0	c-1.163-2.137-3.636-5.508-5.948-7.244C3.949,2.252,1,1.195,1,4.559c0,0.672,0.385,5.643,0.611,6.451	c0.606,2.169,2.454,3.089,4.437,3.195c0.19,0.01,0.222,0.261,0.043,0.324c-2.988,1.048-3.518,3.196-1.424,5.344	c3.826,3.894,5.814,0.647,6.733-1.514c0.224-0.525,0.977-0.525,1.2,0c0.92,2.161,2.907,5.408,6.733,1.514	c2.093-2.148,1.564-4.296-1.424-5.344c-0.179-0.063-0.146-0.313,0.043-0.324c1.983-0.106,3.83-1.026,4.437-3.195	C22.615,10.203,23,5.231,23,4.559C23,1.195,20.051,2.252,18.231,3.618z"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256"
                                    style={{ fill: '#FFFFFF', mixBlendMode: 'normal' }}>
                                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                        <g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        ))
    )
}