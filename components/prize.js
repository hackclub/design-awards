export default function Prize({ prize, image }) {
  return (
    <div className="flex flex-row -space-x-7 pb-6">
      <p className="text-white font-dm text-2xl z-50">{prize}</p>
      <img src={image} alt={prize} className="h-16 z-0" />
    </div>
  );
}
