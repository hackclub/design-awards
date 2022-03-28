import { Image, Spacer, Row, Link } from "@geist-ui/react";

export default function Browser({ url }) {
  return (
    <div>
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
