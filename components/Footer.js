import { Text, Link } from "@geist-ui/react";

export default function Footer() {
  return (
    <div>
      <Text p>
        A 2021 summer online event by Hack Club. This website is{" "}
        <Link href="https://github.com/hackclub/design-awards">
          open source
        </Link>
        .
      </Text>
    </div>
  );
}
