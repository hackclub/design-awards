export default function Team({ src, name, role, pronouns }) {
  return (
    <div className="flex flex-row space-x-3 items-center">
      <div>
        <img
          src={src}
          alt={name}
          className="rounded-full h-16 w-16 md:w-24 md:h-24"
        />
      </div>
      <div>
        <p className="uppercase text-xl text-white font-ibm lg:text-2xl">
          {name}
        </p>
        <p className="text-white text-lg font-dm lg:text-xl">
          {role} <span className="text-blue-200">{pronouns}</span>
        </p>
      </div>
    </div>
  );
}
