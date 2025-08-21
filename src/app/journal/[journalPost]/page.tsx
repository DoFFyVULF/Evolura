import JournalCardData from "@/app/data/JournalCards.data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import StarBorder from "@/app/components/animation/StarBorder/StarBorder";
import RenderContent from "@/app/components/hooks/RenderContent";
import JournalCard from "../journalCard";
import BlurText from "@/app/components/animation/BlurText/BlurText";
import SplitText from "@/app/components/animation/SplitText/SplitText";
import FadeContent from "@/app/components/animation/FadeContent/FadeContent";

const journalPost = JournalCardData;

export async function generateMetadata({ params }: { params: Promise<{ journalPost: string }> }) {
    const { journalPost: journalPostParam } = await params;
    const post = journalPost.find((post) => post.slug === journalPostParam);

    if (!post) {
        return { title: 'Project Not Found' };
    }

    return {
        title: 'Evolura | ' + post.title,
        description: post.desc // лучше desc, чем tag
    };
}

type JournalPostPageProps = {
    params: Promise<{ journalPost: string }>
};

export default async function JournalPostPage({ params }: JournalPostPageProps) {
    const { journalPost: journalPostParam } = await params;
    const post = journalPost.find((post) => post.slug === journalPostParam);


    if (!post) {
        return notFound();
    }

    return (
        <div className="max-w-[1400px] mx-auto w-full px-4">
            <section>
                <div className="flex flex-row justify-between gap-12 max-[1030px]:flex-col max-[1030px]:items-center">
                <FadeContent blur>
                        <div className="px-7 flex py-6  bg-[#0D0D0D] flex-col gap-3 
                 sticky top-15 h-fit max-h-full
                 max-[1030px]:relative max-[1030px]:top-auto max-[1030px]:max-h-none">
                        <Image
                            src={post.img}
                            width={650}
                            height={400}
                            alt={post.title}
                            className="object-cover max-w-full max-h-full"
                        />
                    </div>
                </FadeContent>
                    <div className="relative w-2/4 h-full p-12 max-[1030px]:w-full">
                        <span className="uppercase p-3 bg-[#171717] text-gray-300 text-sm rounded-lg">
                            {post.tag}
                        </span>
                        <BlurText
                            text={post.title}
                            delay={300}
                            animateBy="words"
                            direction="bottom"
                            className="text-6xl tracking-wide font-bold mt-6 text-white max-[430px]:text-3xl"
                        />
                        <SplitText
                            text={post.desc}
                            className="text-xl mt-6 text-justify"
                            delay={30}
                            duration={0.6}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}

                        />
                        <div className="mt-8 ">
                            <FadeContent blur>
                                <RenderContent content={post.content} />
                            </FadeContent>
                        </div>
                    </div>
                </div>
                <div className="mt-26">
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
                </div>
            </section>
            <section>
                <div className="mb-36">
                    <h2 className="uppercase text-4xl text-center mb-14">more articles</h2>
                    <div className="flex-nowrap justify-center">
                        <JournalCard excludeLink={post.id} />
                    </div>
                </div>
            </section>
        </div>
    )
}