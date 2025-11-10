function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-center">
        <p className="text-gray text-xs uppercase tracking-widest mb-1">
          {label}
        </p>
        <p className="text-snow text-sm font-light">{value}</p>
      </div>
    </div>
  );
}

export default InfoCard;
