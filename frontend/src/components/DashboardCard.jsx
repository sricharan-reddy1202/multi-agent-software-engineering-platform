function DashboardCard({
  title,
  value,
}) {
  return (
    <div
      className="
      border
      rounded-lg
      p-6
      shadow-sm
      hover:shadow-md
      transition
      "
    >
      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="text-4xl font-bold mt-4">
        {value}
      </p>
    </div>
  );
}

export default DashboardCard;