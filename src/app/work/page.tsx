import WorkCard from "./workCard";
import StarBorder from "../components/animation/StarBorder/StarBorder";
import Link from "next/link";
import BlurText from "../components/animation/BlurText/BlurText";
import FadeContent from "../components/animation/FadeContent/FadeContent";
export default function Work() {
    return (
        <div className="max-w-[1400px] mx-auto w-full h-full px-2.5">
            <div className="flex flex-col mt-24">
                <div className="flex flex-col items-center">
                       <BlurText
                    text="Work"
                    delay={300}
                    animateBy="words"
                    direction="bottom"
                    className="sm:text-9xl text-6xl uppercase tracking-[1rem] text-center"
                />

                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} >
                    <p className="text-lg text-center max-w-2xl  mt-4 mb-12">Explore our work, where creative branding and powerful marketing strategies come together to craft memorable experiences that resonate with audiences.</p>
                </FadeContent>
                </div>

           
                  <WorkCard/>
            

                <StarBorder
                    as="button"
                    className="w-full mt-26 mb-26"
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
            </div>
        </div>

    )
}