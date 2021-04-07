export default function Team({ src, name, role, pronouns }) {
  return (
    <div className="flex flex-row space-x-3">
      <div>
        <img src={src} alt={name} className="rounded-full h-16 w-16" />
      </div>
      <div>
        <p className="uppercase text-xl text-white font-ibm">{name}</p>
        <p className="text-white text-lg font-dm">
          {role} <span className="text-blue-200">{pronouns}</span>
        </p>
      </div>
    </div>
  );
}
