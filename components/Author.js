import { User } from "@geist-ui/react";

export default function Author({ github }) {
  return (
    <div>
      <User src={`https://github.com/${github}.png`} name={`@${github}`}></User>
    </div>
  );
}
