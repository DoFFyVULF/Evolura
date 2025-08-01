'use client'
import Image from "next/image";
import Link from "next/link";
import LinkToPage from "../components/Link";
import WorkCard from "../work/workCard"
import JournalCard from "../journal/journalCard";;
import ServiceCards from "../components/ui/ServiceCards";
import StarBorder from "../components/animation/StarBorder/StarBorder";
import Footer from "../components/ui/footer/Footer";


export default function Home() {
  return (
    <div className="">
      <section className="flex flex-col justify-center items-center mt-3">
        <h1 className="sm:text-9xl text-6xl uppercase">Evolura</h1>
        <div className="relative w-full max-w-[1800px] mx-auto mt-8 h-[700px] rounded-lg overflow-hidden">
          <Image
            src="/Images/1.avif"
            fill
            priority
            alt=""
            sizes="(max-width: 1800px) 100vw, 1800px"
            className="object-cover object-center"
          />
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto w-full px-4 ">
        <section className="flex flex-col justify-center items-center mt-24">
          <span className="uppercase p-3 bg-[#171717] rounded-lg ">about us</span>
          <div className="flex flex-col justify-center items-center text-center mt-8">
            <h2 className="text-5xl tracking-widest">Boundless innovation</h2>
            <p className="text-xl max-w-[80%] mt-4">
              From sleek designs to strategic branding, we blend artistry with technology to elevate your online presence. Join us in shaping the digital landscape.
            </p>
          </div>
          <div className="relative w-full max-w-[1200px] mx-auto mt-8 h-[500px] rounded-lg overflow-hidden">
            <img
              src="/Images/2.avif"
              sizes="min(100vw - 64px, 1200px)"
              alt="team"
              loading="lazy"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: 'inherit'
              }}
            />
            <Link
              href="/about"
              className="absolute bottom-6 left-6 bg-black/80 hover:bg-black text-white px-5 py-3 rounded flex items-center gap-2 transition-colors"
              style={{ borderRadius: '4px', boxShadow: '0 0 0 1px rgba(38, 38, 38, 0.35)' }}
            >
              <span
                className="w-4 h-4 bg-red-500 rounded-sm"
                style={{ background: 'rgb(255, 47, 53)' }}
              ></span>
              <span className="text-sm font-medium ">More About Us</span>
            </Link>
          </div>
        </section>

        <section className="mt-24 text-center">
          <span className="uppercase p-3 bg-[#171717] rounded-lg  ">what we do</span>
          <div className="flex flex-col justify-center items-center text-center mt-8 mb-10">
            <h2 className="text-5xl tracking-widest">Our services</h2>
            <p className="text-xl max-w-[80%] mt-4">
              At Evolura, we offer expert branding, design, and photography services to create unique, impactful visuals that engage and elevate your brand.
            </p>
          </div>
          <ServiceCards />
        </section>

        <section className="flex flex-col mt-24 relative max-[1028px]:flex-col-reverse">
          <WorkCard />
          <LinkToPage href="/work" selectedText="Selected Work" moreText="More Work" className="block mt-8 top-2/4 left-9/12 max-[1028px]:static max-[1028px]:mb-8 max-[1028px]:mt-0" />
        </section>


        <section className="flex flex-col mt-24 relative max-[1028px]:flex-col-reverse">
          <JournalCard />
          <LinkToPage href="/journal" selectedText="Lastet Posts" moreText="Mote Posts" className="block mt-8 top-2/4 left-9/12 max-[1028px]:static max-[1028px]:mb-8 max-[1028px]:mt-0" />
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

        <Footer/>
      </div>
    </div>
  );
}