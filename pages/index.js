import { useEffect } from "react";
import HeadObject from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Award from "../components/award";
import Team from "../components/team";
import Prize from "../components/prize";

export default function Home() {
  useEffect(() => {
    console.log("Ella was here.");
  });

  return (
    <div className="bg-navy">
      <HeadObject />
      <Nav />
      <main className="mx-12">
        <section id="home" className="landing">
          <div className="font-ibm text-white font-bold text-7xl leading-tight">
            <h1>
              Hack
              <br />
              Club
              <br />
              Awards
            </h1>
          </div>
        </section>
        <section id="awards" className="mt-24">
          <h2 className="font-ibm font-bold text-4xl text-white pb-12">
            Awards
          </h2>
          <div className="grid md:grid-flow-col md:grid-cols-3 md:grid-rows-2 grid-rows-3 grid-cols-2 gap-4">
            <Award award="Best Overall" />
            <Award award="Best Animation" />
            <Award award="Best Portfolio" />
            <Award award="Best 404 Page" />
            <Award award="Best Hackathon Website" />
            <Award award="Best Nonprofit Website" />
          </div>
        </section>
        <section id="prizes" className="mt-24">
          <h2 className="font-ibm font-bold text-4xl text-white pb-12">
            Prizes
          </h2>
          <div>
            <Prize
              prize="Sketch License"
              image="https://cloud-awro5n7df-hack-club-bot.vercel.app/0saly-28_1_.png"
            />
            <Prize
              prize="Private Emoji"
              image="https://cloud-lbhrtik23-hack-club-bot.vercel.app/0doodle-2_1.png"
            />
            <Prize
              prize="Stickers"
              image="https://cloud-awro5n7df-hack-club-bot.vercel.app/0saly-28_1_.png"
            />
            <Prize
              prize="$20 Gift Card"
              image="https://cloud-awro5n7df-hack-club-bot.vercel.app/0saly-28_1_.png"
            />
          </div>
        </section>
        <section id="judges" className="mt-24">
          <h2 className="font-ibm font-bold text-4xl text-white pb-12">
            Judges
          </h2>
          <div className="grid md:grid-flow-col md:grid-cols-2 md:grid-rows-3 grid-rows-6 grid-cols-1 gap-4">
            <Team
              src="https://source.unsplash.com/random/200x200"
              name="Zach Latta"
              role="Founder of Hack Club."
              pronouns="he/him"
            />
            <Team
              src="https://source.unsplash.com/random/200x200"
              name="Zach Latta"
              role="Founder of Hack Club."
              pronouns="he/him"
            />
            <Team
              src="https://source.unsplash.com/random/200x200"
              name="Zach Latta"
              role="Founder of Hack Club."
              pronouns="he/him"
            />
            <Team
              src="https://source.unsplash.com/random/200x200"
              name="Zach Latta"
              role="Founder of Hack Club."
              pronouns="he/him"
            />
            <Team
              src="https://source.unsplash.com/random/200x200"
              name="Zach Latta"
              role="Founder of Hack Club."
              pronouns="he/him"
            />
            <Team
              src="https://source.unsplash.com/random/200x200"
              name="Zach Latta"
              role="Founder of Hack Club."
              pronouns="he/him"
            />
          </div>
        </section>
        <section id="team" className="mt-24">
          <h2 className="font-ibm font-bold text-4xl text-white pb-12">Team</h2>
          <div className="grid md:grid-flow-col md:grid-cols-2 md:grid-rows-3 grid-rows-6 grid-cols-1 gap-4">
            <Team
              src="https://source.unsplash.com/random/200x200"
              name="Prophet Orpheus"
              role="Hack Club Dino."
              pronouns="she/her"
            />
            <Team
              src="https://source.unsplash.com/random/200x200"
              name="Prophet Orpheus"
              role="Hack Club Dino."
              pronouns="she/her"
            />
            <Team
              src="https://source.unsplash.com/random/200x200"
              name="Prophet Orpheus"
              role="Hack Club Dino."
              pronouns="she/her"
            />
            <Team
              src="https://source.unsplash.com/random/200x200"
              name="Prophet Orpheus"
              role="Hack Club Dino."
              pronouns="she/her"
            />
            <Team
              src="https://source.unsplash.com/random/200x200"
              name="Prophet Orpheus"
              role="Hack Club Dino."
              pronouns="she/her"
            />
            <Team
              src="https://source.unsplash.com/random/200x200"
              name="Prophet Orpheus"
              role="Hack Club Dino."
              pronouns="she/her"
            />
          </div>
        </section>
        <section className="mt-8">
          {/**join the hack club slack button */}
        </section>
      </main>
      <Footer />
    </div>
  );
}
