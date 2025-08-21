'use client'
import { FormEvent, useState } from "react"
import SuccessNotification from "../components/ui/SuccessNotification";
import { AnimatePresence, motion } from "framer-motion";
import BlurText from "../components/animation/BlurText/BlurText";
import FadeContent from "../components/animation/FadeContent/FadeContent";
import SplitText from "../components/animation/SplitText/SplitText";
import TextType from "../components/animation/TextType/TextType";

export default function ContactPage() {
    const [showNotification, setShowNotification] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            setShowNotification(true)

            setTimeout(() => {
                setShowNotification(false)

            }, 3000);
        }
        catch (error) {
            console.error(error);
            setShowNotification(false);
        }

        const form = event.currentTarget;
        if (form.checkValidity()) {
            form.reset()
        }
    };


    return (
        <div className="max-w-[1400px] mx-auto w-full px-4 mb-24">
            <section className="mt-24 flex flex-col items-center justify-center">
                <div className="flex flex-col justify-center items-center">
                    <TextType
                        text='Design Your Future'
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={false}
                        cursorCharacter="|"
                        className="max-w-42 uppercase p-3 text-center bg-[#171717] rounded-lg"
                    />
                    <BlurText
                        text="Let's Build Together"
                        delay={300}
                        animateBy="words"
                        direction="bottom"
                        className="flex justify-center text-center text-6xl tracking-wider mt-6 max-[565px]:text-5xl"
                    />
                    <SplitText
                        text="With a focus on creativity, collaboration, and cutting-edge technology, we strive to exceed expectations and deliver solutions that resonate with your audience.
                            Let's work together to make your online presence shine."
                        className="max-w-[58.3%] text-xl text-center mt-6 tracking-wider max-[1381]:max-w-[70%] max-[1381]:text-center max-[565px]:text-md"
                        delay={30}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                    />
                </div>
                <div className="min-w-4xl mt-12 max-[930px]:min-w-0 max-[930px]:w-full">
                    <form className="flex flex-col" action="#" onSubmit={handleSubmit}>
                        <div className="flex flex-row gap-0.5 w-full bg-[#141414] border-[#262626cc] max-[765px]:flex-col mb-0.5">
                            <input className="p-3.5 w-2/4 max-[765px]:w-full" type="text" placeholder="Name" required />
                            <input className="p-3.5 w-2/4 max-[765px]:w-full" type="text" placeholder="Email" required />
                        </div>
                        <textarea className="p-3.5 resize-none bg-[#141414] border-[#262626cc] mb-0.5" placeholder="Your Message" rows={5} required />
                        <button className="p-3.5 uppercase bg-[#262626] border-[#262626cc] transition-all duration-700 ease-in-out focus:bg-green-500/80" type="submit">
                            submit
                        </button>
                    </form>
                    <FadeContent blur>
                        <div className="flex flex-row justify-between gap-3 mt-3 text-lg max-[555px]:flex-col">
                            <div className="flex flex-col items-center justify-center p-12 w-full bg-[#141414] border-[#262626cc]">
                                <a className="transition-all duration-300 ease-in-out hover:opacity-70" href="tel:+1-603-555-0123">+1-603-555-0123</a>
                                <a className="transition-all duration-300 ease-in-out hover:opacity-70" href="tel:+1-480-555-0103">+1-480-555-0103</a>
                            </div>
                            <div className="flex flex-col items-center justify-center p-12 w-full bg-[#141414] border-[#262626cc]">
                                <a className="transition-all duration-300 ease-in-out hover:opacity-70" href="mailto:contact@example.com">contact@example.com</a>
                                <a className="transition-all duration-300 ease-in-out hover:opacity-70" href="mailto:support@example.com">support@example.com</a>
                            </div>
                        </div>
                    </FadeContent>
                    <div className="fixed top-4 right-4 z-50">
                        <AnimatePresence>
                            {showNotification && (
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 40 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <SuccessNotification
                                        message="Success message!"
                                        subText="Everything seems great"
                                        onClose={() => setShowNotification(false)}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    )
}