import Link from "next/link";
import { useEffect } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Awards", href: "/" },
  { label: "Prizes", href: "/" },
  { label: "Team", href: "/" },
  { label: "Website", href: "/" },
];

export default function Nav() {
  useEffect(() => {
    console.log("Ella was here...");
  });
  return (
    <nav className="text-white">
      <ul className="md:flex flex-wrap items-start p-8 mt-6 sm:mt-0 hidden">
        <ul className={`mx-auto sm:mx-0 flex flex-row space-x-5`}>
          {links.map(({ href, label }) => (
            <li className="self-center" key={`${href}${label}`}>
              <Link href={href}>
                <a
                  className={`font-inter px-4 py-2 rounded hover:bg-black hover:bg-opacity-10`}
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
