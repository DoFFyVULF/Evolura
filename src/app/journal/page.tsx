import StarBorder from "../components/animation/StarBorder/StarBorder"
import Link from "next/link"
import JournalCard from "./journalCard"
import BlurText from "../components/animation/BlurText/BlurText"
import SplitText from "../components/animation/SplitText/SplitText"
import FadeContent from "../components/animation/FadeContent/FadeContent"
import TextType from "../components/animation/TextType/TextType"

export default function Journal() {
    return (
        <div className="max-w-[1400px] mx-auto w-full px-4">
            <section className="mt-24 flex flex-col items-center">
                <BlurText
                    text="journal"
                    delay={300}
                    animateBy="words"
                    direction="bottom"
                    className="sm:text-9xl text-6xl uppercase text-center tracking-widest"
                />
                <div className="flex flex-row justify-baseline gap-4 mt-6 max-[1381px]:flex-col max-[1381px]:items-center max-[1381px]:gap-12">
                    <div className="flex flex-col max-[1381px]:items-center">
                        <TextType
                            text='latest posts'
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={false}
                            cursorCharacter="|"
                            className="max-w-42 uppercase p-3 text-center bg-[#171717] rounded-lg"
                        />
                        <SplitText
                            text="Meet the creative team on a mission to revolutionize design services for businesses."
                            className="max-w-[30%] text-xl text-left mt-6 tracking-wider max-[1381]:max-w-[70%] max-[1381]:text-center"
                            delay={30}
                            duration={0.6}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                        />
                    </div>
                    <FadeContent>
                        <div className="">
                            <JournalCard className="grid grid-cols-2 grid-rows-2 w-full gap-6 max-[425px]:flex max-[430px]:flex-col" />
                        </div>
                    </FadeContent>
                </div>
            </section>
            <section className="mt-24 w-full mb-24">
                <StarBorder
                    as="button"
                    className="w-full"
                    color="gray"
                    speed="3s"
                >
                    <Link href="/contact" className="w-full bg-[#0a0a0a] flex justify-between items-center p-12 max-[580px]:flex-wrap max-[580px]:justify-center max-[580px]:gap-3">
                        <div className="uppercase text-4xl w-4/12 max-[580px]:w-full">
                            let's get started
                        </div>
                        <div className="uppercase text-3xl">
                            contact us
                        </div>
                    </Link>
                </StarBorder>
            </section>
        </div>
    )
}