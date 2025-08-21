import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative z-30 w-full bg-[#0a0a0a]">
            <div className="max-w-[1400px] mx-auto bg-black">
                <div className="grid grid-cols-3 gap-2 p-6 bg-[#0D0D0D] font-[100] max-[1028px]:flex max-[1028px]:flex-col max-[1028px]:items-center">
                    {/* Logo */}
                    <div className="flex flex-col w-fit max-w-full max-[1028px]:items-center">
                        <Link href='/'>
                            <Image src="/Images/logo.svg" width={30} height={30} alt="logo" />
                        </Link>
                        <p className="mt-5 max-w-80 max-[1028px]:max-w-none max-[1028px]:text-center">
                            Driven by creativity and innovation, we craft powerful brands that resonate and inspire.
                        </p>
                        <ul className="flex justify-between w-fit gap-3 mt-5">
                            <li>
                                <Link href="https://instagram.com">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256"
                                        style={{ fill: '#FFFFFF', mixBlendMode: 'normal' }}>
                                        <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                            <g transform="scale(5.12,5.12)"><path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 
                            -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path></g></g>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://bluesky.com">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24"
                                        style={{ fill: '#FFFFFF' }}>
                                        <path d="M18.231,3.618c-2.312,1.736-4.785,5.107-5.948,7.244c-0.123,0.226-0.444,0.226-0.567,0	c-1.163-2.137-3.636-5.508-5.948-7.244C3.949,2.252,1,1.195,1,4.559c0,0.672,0.385,5.643,0.611,6.451	c0.606,2.169,2.454,3.089,4.437,3.195c0.19,0.01,0.222,0.261,0.043,0.324c-2.988,1.048-3.518,3.196-1.424,5.344	c3.826,3.894,5.814,0.647,6.733-1.514c0.224-0.525,0.977-0.525,1.2,0c0.92,2.161,2.907,5.408,6.733,1.514	c2.093-2.148,1.564-4.296-1.424-5.344c-0.179-0.063-0.146-0.313,0.043-0.324c1.983-0.106,3.83-1.026,4.437-3.195	C22.615,10.203,23,5.231,23,4.559C23,1.195,20.051,2.252,18.231,3.618z"></path>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://linkedin.com">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256"
                                    style={{ fill: '#FFFFFF', mixBlendMode: 'normal' }}>
                                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                        <g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g>
                                </svg>
                                </Link>

                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-row gap-12 max-[1028px]:flex max-[1028px]:flex-col max-[1028px]:gap-3 max-[1028px]:justify-center">
                        <div className="flex flex-col">
                            <span className="uppercase max-[1028px]:text-center">sitemap</span>
                            <ul className="flex flex-col gap-1 mt-1 max-[1028px]:flex max-[1028px]:flex-row max-[1028px]:justify-between max-[1028px]:text-center">
                                <li><Link href="https://instagram.com">Home</Link></li>
                                <li><Link href="https://instagram.com">About</Link></li>
                                <li><Link href="https://instagram.com">Journal</Link></li>
                                <li><Link href="https://instagram.com">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="flex flex-col ">
                            <span className="uppercase max-[1028px]:text-center">legal</span>
                            <ul className="flex flex-col gap-1 mt-1 max-[1028px]:flex-row  max-[1028px]:justify-between max-[1028px]:text-center">
                                <li><Link className="uppercase" href="https://instagram.com">privacy policy</Link></li>
                                <li><Link className="uppercase" href="https://instagram.com">terms of service</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Subscribe */}
                    <div className="flex flex-col">
                        <span className="max-[1028px]:text-center">Subscribe to our newsletter</span>
                        <form className="flex flex-row gap-1.5 mt-1 max-[1028px]:flex-col max-[1028px]:min-w-screen max-[1028px]:p-3 ">
                            <input
                                type="text"
                                placeholder="jane@example.com"
                                className="px-2 py-1 text-black font-[100] border bg-white "
                            />
                            <button type="button" className="uppercase bg-red-500 px-5 py-3 py">
                                Subscribe
                            </button>
                        </form>
                        <span className="text-xs mt-1 max-w-70 max-[1028px]:text-center max-[1028px]:max-w-none">
                            By subscribing you agree to our terms of service and privacy policy
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}