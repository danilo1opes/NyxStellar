function PlanetCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center flex-1 min-w-[120px] md:min-w-[140px] lg:min-w-0">
      <p className="text-gray text-[10px] md:text-xs uppercase tracking-wider md:tracking-widest mb-1">
        {label}
      </p>
      <p className="text-snow text-xs md:text-sm lg:text-base font-light">
        {value}
      </p>
    </div>
  );
}

export default PlanetCard;
