import Head from "next/head";
import { Spacer, Text, Row, Link, User } from "@geist-ui/react";
import projects from "../sites.json";
import Meta from "@hackclub/meta";
import Browser from "../components/Browser";

const colors = [
  "#ec3750",
  "#ff8c37",
  "#f1c40f",
  "#33d6a6",
  "#5bc0de",
  "#338eda",
  "#a633d6",
];

// function Pagination2({ prev, next }) {
//   return (
//     <Row>
//       {prev && (
//         <Link href={`/${prev}`}>
//           &larr;
//           <Spacer x={0.25} />
//           Prev
//         </Link>
//       )}
//       {prev && next && <Spacer x={0.75} />}
//       {next && (
//         <Link href={`/${next}`}>
//           &rarr;
//           <Spacer x={0.25} />
//           Next
//         </Link>
//       )}
//     </Row>
//   );
// }

export default function ShowPage({ project, prev, next }) {
  return (
    <>
      <Meta as={Head} title={project.website} />
      <style>
        {`
          body {
            background-color: ${
              colors[Math.floor(Math.random() * colors.length)]
            };
            min-height: 100vh;
          }
          .title {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            padding: 0.5rem;
          }
        `}
      </style>
      {/* <Pagination2 prev={prev} next={next} /> */}
      <Spacer y={1} />
      <div className="title">
        <User
          src={`https://github.com/${project.github}.png`}
          name={`@${project.github}`}
        />
        <Spacer y={6} />
      </div>
      <Browser url={project.website} />
    </>
  );
}

export const getStaticPaths = () => {
  const paths = projects.map((p) => p.id).map((id) => ({ params: { id } }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.id === params.id);
  const i = projects.indexOf(project);
  const prev = i > 0 ? projects[i - 1].id : null;
  const next = i < projects.length - 1 ? projects[i + 1].id : null;
  return { props: { project, prev, next } };
};

// {
//     "id": "6138a54fe741b60001c754fe",
//     "slackId": "U01BQBDFUGP",
//     "category": "Personal website",
//     "website": "https://jeffreyharmon.dev",
//     "at": "2021-09-08 11:58",
//     "github": "SquarePear"
//   },
