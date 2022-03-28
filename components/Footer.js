import { Text } from "@geist-ui/react";
import Link from "next/link";
import Icon from "supercons";

export default function Footer() {
  return (
    <div>
      <Text p>Hack Club Yeah!</Text>
      <Icon glyph="github" size={32} />
      <Text p>
        A 2021 summer event by Hack Club. This website is{" "}
        <Link href="https://github.com/hackclub/design-awards">
          open source
        </Link>
        .
      </Text>
    </div>
  );
}
