import { Text, Link } from "@geist-ui/react";

export default function Footer() {
  return (
    <div>
      <Text p>
        A 2021 summer online event organized by the Hack Club community. This
        website is{" "}
        <Link href="https://github.com/hackclub/design-awards">
          open source
        </Link>
        .
      </Text>
    </div>
  );
}
