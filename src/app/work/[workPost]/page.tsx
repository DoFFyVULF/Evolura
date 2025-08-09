import SplitText from "@/app/components/animation/SplitText/SplitText";
import TextType from "@/app/components/animation/TextType/TextType";
import BlurText from "@/app/components/animation/BlurText/BlurText";
import WorkCardsData from "@/app/data/WorkCards.data";
import WorkCard from "../workCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import StarBorder from "@/app/components/animation/StarBorder/StarBorder";
import FadeContent from "@/app/components/animation/FadeContent/FadeContent";
import ImageGalleryItem from "@/app/components/animation/ImageGalleryFade/ImageGalleryItem";

const workPost = WorkCardsData;

export async function generateMetadata({ params }: { params: Promise<{ workPost: string }> }) {
    const { workPost: workPostParam } = await params;
    const post = WorkCardsData.find((post) => post.link === workPostParam);

    if (!post) {
        return { title: 'Project Not Found' };
    }

    return {
        title: 'Evolura | ' + post.title,
        description: post.tag
    };
}

type WorkPostPageProps = {
    params: Promise<{ workPost: string }>
};

export default async function WorkPostPage({ params }: WorkPostPageProps) {
    const {workPost : workPostParam} = await params;
    const post = workPost.find((post) => post.link === workPostParam);

    if (!post) {
        return notFound();
    }

    return (
        <>

            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0} className="fixed top-0 left-0 w-full h-screen">
                <img
                    src={post.previewImg}
                    alt=""
                    className="fixed top-0 left-0 w-full h-screen object-cover z-0"
                />
            </FadeContent>
            <div className="h-full relative z-10 pt-[80px] bg-[#0a0a0a] mt-[900px] p-2.5">
                <div className="max-w-[1400px] mx-auto w-full h-full">
                    <div className="flex flex-col justify-center items-center">
                        <BlurText
                            text={post.title}
                            delay={150}
                            animateBy="words"
                            direction="bottom"
                            className="uppercase text-7xl mb-4  max-[999px]:text-4xl"
                        />
                        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                            <p className="text-lg text-center max-w-[400px]">{post.desc}</p>
                        </FadeContent>
                        <div className="w-full mt-14">
                            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                                <img className="w-full max-h-[800px] object-cover" src={post.images[0]} alt="" />
                            </FadeContent>

                        </div>
                    </div>
                    <div className="flex gap-3.5 flex-row mt-10 max-[999px]:flex-col">
                        <div className="flex gap-3.5 w-full max-[999px]:flex-col">
                            <div className="w-full max-w-[490px] max-[999px]:max-w-none">
                                <div
                                    className="px-7 py-6 bg-[#0D0D0D] flex flex-col gap-3 
                                    sticky top-10 h-fit max-h-[180px]"
                                >
                                    <div className="flex flex-row justify-between">
                                        <span className="uppercase text-[#a3a3a3]">client:</span>
                                        <TextType
                                            text={post.client}
                                            typingSpeed={75}
                                            initialDelay={0}
                                            pauseDuration={1500}
                                            showCursor={false}
                                            className="uppercase"
                                            startOnVisible={true}
                                        />
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <span className="uppercase text-[#a3a3a3]">service:</span>
                                        <TextType
                                            text={post.tag}
                                            typingSpeed={75}
                                            initialDelay={300}
                                            pauseDuration={1500}
                                            showCursor={false}
                                            className="uppercase"
                                            startOnVisible={true}
                                        />
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <span className="uppercase text-[#a3a3a3]">year:</span>
                                        <TextType
                                            text={post.year.toString()}
                                            typingSpeed={75}
                                            initialDelay={600}
                                            pauseDuration={1500}
                                            showCursor={false}
                                            className="uppercase"
                                            startOnVisible={true}
                                        />
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <span className="uppercase text-[#a3a3a3]">website</span>
                                        <TextType
                                            text={post.webiste}
                                            typingSpeed={75}
                                            initialDelay={900}
                                            pauseDuration={1500}
                                            showCursor={false}
                                            className="uppercase"
                                            startOnVisible={true}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex flex-col gap-3">
                                {post.images.slice(1).map((image) => (
                                    <ImageGalleryItem key={image} image={image} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-24 mb-24">
                        <Link href='/work'>
                            <StarBorder
                                className=""
                                color="gray"
                                speed="2.5s"
                            >
                                <div className=" px-17 py-4 text-center rounded">Go Back</div>
                            </StarBorder>
                        </Link>

                    </div>
                    <div className="mb-36">
                        <h2 className="uppercase text-4xl text-center mb-14">more work</h2>
                        <div className="flex-nowrap justify-center">
                            <WorkCard cardWidth={300} excludeLink={post.link} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}