export default function Prize({ prize, image }) {
  return (
    <div className="flex flex-row -space-x-7 md:-space-x-10 pb-6">
      <p className="text-white font-dm text-2xl z-50 md:text-3xl">{prize}</p>
      <img src={image} alt={prize} className="h-16 md:h-24 z-0" />
    </div>
  );
}
