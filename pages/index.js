import { useEffect } from "react";
import HeadObject from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Award from "../components/award";
import Team from "../components/team";
import Prize from "../components/prize";
import { FaSlack } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    console.log("Join Hack Club at https://hackclub.com/slack");
  });

  return (
    <div className="bg-navy">
      <HeadObject />
      <Nav />
      <img
        src="https://cloud-9d7jc22va-hack-club-bot.vercel.app/2doodle-7_2.png"
        alt="3D worm-like squiggly doodle"
        className="hidden md:absolute md:flex md:-top-10 md:h-96 md:left-48 z-0"
      />
      <main className="mx-12 pt-10 md:pt-0">
        <section id="home" className="relative z-50">
          <div className="font-ibm text-white font-bold text-7xl leading-tight lg:text-9xl">
            <h1>
              Hack
              <br />
              Club
              <br />
              Awards
            </h1>
          </div>
          <a href="https://forms.formium.io/f/61195e9be741b60001c70586">
            <button className="rounded-xl px-3 py-2 bg-red-500 mt-4 ransition duration-500 ease-in-out transform hover:scale-110">
              Submit a website &rarr;
            </button>
          </a>
        </section>
        <img
          src="https://cloud-9d7jc22va-hack-club-bot.vercel.app/3doodle-6_2.png"
          alt="3D pill doodle"
          className="absolute h-96 top-24 right-24 z-0"
        />
        <img
          src="https://cloud-9d7jc22va-hack-club-bot.vercel.app/1doodle-4_1.png"
          alt="3d coil doodle"
          className="absolute h-48 bottom-64"
        />
        <section id="awards" className="mt-24 relative z-50">
          <h2 className="font-ibm font-bold text-4xl text-white pb-12">
            Awards
          </h2>
          <div className="grid md:grid-flow-col md:grid-cols-3  gap-4">
            <Award award="Best Overall" />
            <Award award="Personal Website" />
            <Award award="Client Website" />
            <Award award="Web Project" />
          </div>
        </section>
        <section id="prizes" className="mt-24 relative z-50">
          <h2 className="font-ibm font-bold text-4xl text-white pb-12">
            Prizes
          </h2>
          <div>
            <Prize
              prize="$20 Gift Card"
              image="https://cloud-awro5n7df-hack-club-bot.vercel.app/0saly-28_1_.png"
            />
            <Prize
              prize="Figma Pin"
              image="https://cloud-awro5n7df-hack-club-bot.vercel.app/0saly-28_1_.png"
            />
            <Prize
              prize="Stickers for everyone!"
              image="https://cloud-lbhrtik23-hack-club-bot.vercel.app/0doodle-2_1.png"
            />
          </div>
        </section>
        {/* <img
          src="https://cloud-9d7jc22va-hack-club-bot.vercel.app/0saly-25.png"
          alt="3D model of a hand drawing"
          className="hidden md:absolute md:flex md:right-16 lg:right-72 md:-bottom-96 md:w-96 lg:w-min"
        />
        <img
          src="https://cloud-9d7jc22va-hack-club-bot.vercel.app/1doodle-4_1.png"
          alt="3d coil doodle"
          className="absolute transform rotate-90 h-48 left-6 -bottom-full"
        /> */}
        <section id="judges" className="mt-24 relative z-50">
          <h2 className="font-ibm font-bold text-4xl text-white pb-12">
            Judges
          </h2>
          <div className="grid md:grid-flow-col md:grid-cols-2 grid-cols-1 gap-14">
            <Team
              src="https://github.com/hackclub/dinosaurs/raw/master/smart_dinosaur_docs.png"
              name="Prophet Orpheus"
              role="Hack Club Dino."
              pronouns="she/her"
            />
          </div>
        </section>

        <section className="mt-8 flex justify-center">
          <Link href="https://hackclub.com/slack">
            <button className="flex items-center space-x-2 font-dm text-lg bg-red-500 rounded-full px-4 py-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <FaSlack size={25} />
              <a>Join the Slack</a>
            </button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
