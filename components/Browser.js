import { Image, Spacer, Row } from "@geist-ui/react";
import Link from "next/link";

function Pagination({ prev, next }) {
  return (
    <Row>
      {prev && (
        <Link href={`/${prev}`}>
          &larr;
          <Spacer x={0.25} />
          Prev
        </Link>
      )}
      {prev && next && <Spacer x={0.75} />}
      {next && (
        <Link href={`/${next}`}>
          &rarr;
          <Spacer x={0.25} />
          Next
        </Link>
      )}
    </Row>
  );
}

export default function Browser({ url, prev, next }) {
  return (
    <div>
      <Pagination prev={prev} next={next} />
      <Image.Browser url={url} anchorProps={{ rel: "nofollow" }}>
        <iframe
          src={url}
          style={{ width: "80vw", height: "75vh" }}
          frameBorder={0}
          loading="lazy"
        />
      </Image.Browser>
    </div>
  );
}
