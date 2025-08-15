import Image from "next/image"
import ServiceCards from "../components/ui/ServiceCards"
import TeamCard from "./TeamCard"
import FaqItem from "./FaqItem"
import FAQ from "../data/FAQ.data"
import StarBorder from "../components/animation/StarBorder/StarBorder"
import Link from "next/link"

export default function About() {
    return (
        <div className="max-w-[1400px] mx-auto w-full px-4">
            <section>
                <div className="flex flex-row justify-between max-[950px]:flex-col max-[950px]:gap-3">
                    <div className="justify-center max-[950]:flex">
                        <span className="uppercase p-3 bg-[#171717] rounded-lg  text-center">our story</span>
                    </div>
                    <div className="flex flex-col float-right max-[950px]:float-none max-[950px]:text-center">
                        <h1 className="text-4xl tracking-wider ">Designing Brands with Purpose</h1>
                        <p className="text-[1.1rem] max-w-[400px] text-justify tracking-wider mt-6 mb-6 max-[950px]:max-w-none max-[950px]:text-center">Welcome to our agency, where imagination thrives and boundaries fade. In the digital realm where creativity meets technology, we are the architects of innovation.</p>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <Image src='/Images/About/1.avif' alt="" width={1400} height={300} className="object-cover object-center" />
                    </div>
                    <div className="flex justify-around items-center-safe gap-6 relative -top-50  max-[950px]:flex-wrap  max-[950px]:top-6 max-[600px]:flex-none max-[600px]:flex-col">
                        <div className="flex flex-col items-center uppercase p-12 gap-2 justify-center backdrop-blur-xs bg-black/10 max-[950px]:border-[#808080] max-[950px]:border-1 max-[950px]:w-[250px]  max-[950px]:h-[150px] max-[600px]:w-full">
                            <span className="text-5xl">18</span>
                            <span>years of experience</span>
                        </div>
                        <div className="flex flex-col items-center uppercase p-12 gap-2  justify-center backdrop-blur-xs bg-black/10 max-[950px]:border-[#808080] max-[950px]:border-1 max-[950px]:w-[250px]  max-[950px]:h-[150px] max-[600px]:w-full">
                            <span className="text-5xl">125</span>
                            <span>projects completed</span>
                        </div>
                        <div className="flex flex-col items-center uppercase p-12 gap-2  justify-center backdrop-blur-xs bg-black/10 max-[950px]:border-[#808080] max-[950px]:border-1 max-[950px]:w-[250px]  max-[950px]:h-[150px] max-[600px]:w-full">
                            <span className="text-5xl">85</span>
                            <span>happy customers</span>
                        </div>
                        <div className="flex flex-col items-center uppercase p-12 gap-2  justify-center backdrop-blur-xs bg-black/10 max-[950px]:border-[#808080] max-[950px]:border-1 max-[950px]:w-[250px]  max-[950px]:h-[150px] max-[600px]:w-full">
                            <span className="text-5xl">24</span>
                            <span>awards earned</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-12">
                <div className="flex flex-row justify-between items-center max-[950px]:flex-col">
                    <span className="uppercase p-3 bg-[#171717] rounded-lg max-h-12">our story</span>
                    <p className="max-w-[400px] text-center text-xl mt-6 max-[950px]:max-w-[80%]">At Evolura, our journey began with a simple but powerful idea: to help businesses tell their unique stories through exceptional design, branding, and photography. What started as a passion for creativity has evolved into a dynamic agency dedicated to crafting bold, authentic identities.</p>
                </div>
            </section>
            <section className="mt-12">
                <div className="flex flex-col">
                    <div className="flex flex-col text-center items-center">
                        <span className="uppercase p-3 max-w-42 bg-[#171717] rounded-lg">Driven by Purpose</span>
                        <h2 className="text-5xl tracking-widest mt-6">Our Mission</h2>
                        <p className="max-w-[40%] text-xl text-center mt-6 max-[950px]:max-w-[80%]">At Evolura, our mission is to inspire, empower, and deliver exceptional experiences. Through innovation, care, and passion, we strive to create lasting value for our customers, employees, and communities.</p>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center gap-3 mt-6">
                        <div className="max-w-[360px] max-h-[270px] flex flex-col justify-around rounded bg-[#0D0D0D] p-6">
                            <span className="text-center uppercase text-2xl">Positive Impact</span>
                            <p className="bg-[#171717] p-3 mt-3 text-center rounded">We are committed to contributing to a better world. Whether through sustainable practices, community involvement, or ethical business practices, we strive to create a positive, lasting impact.</p>
                        </div>
                        <div className="max-w-[360px] max-h-[270px] flex flex-col justify-around rounded bg-[#0D0D0D] p-6">
                            <span className="text-center uppercase text-2xl">Innovation</span>
                            <p className="bg-[#171717] p-3 mt-3 text-center rounded">Innovation is at the heart of everything we do. We continually seek new ideas and solutions to drive progress, stay ahead of trends, and ensure our customers receive the best.</p>
                        </div>
                        <div className="max-w-[360px] max-h-[270px] flex flex-col justify-around rounded bg-[#0D0D0D] p-6">
                            <span className="text-center uppercase text-2xl">Simplicity</span>
                            <p className="bg-[#171717] p-3 mt-3 text-center rounded">We believe in making life easier for our customers. By simplifying processes, products, and services, we eliminate unnecessary complexity and focus on what truly matters.</p>
                        </div>
                        <div className="max-w-[360px] max-h-[270px] flex flex-col justify-around rounded bg-[#0D0D0D] p-6">
                            <span className="text-center uppercase text-2xl">Satisfaction</span>
                            <p className="bg-[#171717] p-3 mt-3 text-center rounded">We are dedicated to providing an unparalleled customer experience. Every product, service, and interaction is designed to exceed expectations and ensure complete satisfaction.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-24 text-center">
                <span className="uppercase p-3 text-center bg-[#171717] rounded-lg  ">what we do</span>
                <div className="flex flex-col justify-center items-center text-center mt-6 mb-6">
                    <h2 className="text-5xl tracking-widest">Our services</h2>
                    <p className="max-w-[40%] text-xl text-center mt-6 max-[950px]:max-w-[80%]">
                        At Evolura, we offer expert branding, design, and photography services to create unique, impactful visuals that engage and elevate your brand.
                    </p>
                </div>
                <ServiceCards />
            </section>
            <section className="mt-24">
                <div className=" flex flex-col items-center justify-baseline gap-12 max-w-full bg-[#17171796] rounded">
                    <div className="text-center max-w-2xs p-3 pl-7 pr-7 bg-[#171717] rounded">
                        <span className="uppercase">trusted by innovative teams</span>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-12 p-12 max-[550px]:flex-col">
                        <img src="/Images/logos/1.svg" alt="" className="max-w-23 " />
                        <img src="/Images/logos/2.svg" alt="" className="max-w-23 " />
                        <img src="/Images/logos/3.svg" alt="" className="max-w-23 " />
                        <img src="/Images/logos/4.svg" alt="" className="max-w-23 " />
                    </div>
                </div>
            </section>
            <section className="mt-24">
                <div className="flex flex-row justify-between max-[1381px]:flex-col max-[1381px]:items-center max-[1381px]:gap-12">
                    <div className="flex flex-col max-[1381px]:items-center">
                        <span className="max-w-42 uppercase p-3 text-center bg-[#171717] rounded-lg">meet our team</span>
                        <p className="max-w-[30%] text-xl text-left mt-6 tracking-wider max-[1381]:max-w-[70%] max-[1381]:text-center">
                            Meet the creative team on a mission to revolutionize design services for businesses.
                        </p>
                    </div>
                    <div className="flex flex-row gap-12 flex-wrap w-2/4 max-[1381]:w-full max-[1381]:justify-center">
                        <TeamCard />
                    </div>
                </div>
            </section>
            <section className="mt-24">
                <div className="flex flex-col items-center">
                    <div className="text-center max-w-2xs p-3 pl-7 pr-7 bg-[#171717] rounded">
                        <span className="uppercase">trusted by innovative teams</span>
                    </div>
                    <div className="flex flex-col items-center mt-6">
                        <h2 className="text-5xl text-center tracking-widest">Frequently Asked Questions</h2>
                        <p className="max-w-[40%] text-xl text-center mt-6 max-[950px]:max-w-[80%]">
                            We’ve compiled answers to some of the most common inquiries to help you understand how we work. If you need more details, feel free to reach out!
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 w-full mt-6">
                        {FAQ.map((card) => (
                            <FaqItem key={card.id} question={card.question} answer={card.answer} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="mt-24 w-full mb-24">
                <StarBorder
                    as="button"
                    className="w-full "
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