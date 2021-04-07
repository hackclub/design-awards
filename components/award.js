import { BiTrophy } from "react-icons/bi";

export default function Award({ award }) {
  return (
    <div className="text-white flex flex-row space-x-4 font-dm text-2xl">
      <BiTrophy size={30} color="white" />
      <p className="w-28">{award}</p>
    </div>
  );
}
