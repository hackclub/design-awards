import Link from "next/link";
import { useEffect } from "react";

const links = [
  { label: "Home", href: "#" },
  { label: "Awards", href: "#awards" },
  { label: "Prizes", href: "#prizes" },
  { label: "Judges", href: "#judges" },
  { label: "Team", href: "#team" },
];

export default function Nav() {
  useEffect(() => {
    console.log("Join the Hack Club Slack https://hackclub.com/slack");
  });
  return (
    <nav className="text-white relative z-50">
      <ul className="md:flex flex-wrap items-start p-8 mt-6 sm:mt-0 hidden">
        <ul className={`mx-auto sm:mx-0 flex flex-row space-x-5`}>
          {links.map(({ href, label }) => (
            <li className="self-center" key={`${href}${label}`}>
              <Link href={href}>
                <a
                  className={`font-inter text-xl px-4 py-2 rounded hover:text-gray-400`}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
