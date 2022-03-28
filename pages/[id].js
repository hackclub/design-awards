import Head from "next/head";
import { Spacer } from "@geist-ui/react";
import projects from "../sites.json";
import Meta from "@hackclub/meta";
import Browser from "../components/Browser";

export default function ShowPage({ project, prev, next }) {
  return (
    <>
      <Meta as={Head} title={project.website} />

      <Spacer y={1} />

      <Browser url={project.website} next={next} prev={prev} />
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
