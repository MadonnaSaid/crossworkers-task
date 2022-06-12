import TypeCard from "./TypeCard";
function Location() {
  const defaultList = [
    { id: "k1", name: "Added", icon: "add square", color: "text-blue-500" },
    { id: "k2", name: "Updated", icon: "edit", color: "text-yellow-400" },
    {
      id: "k3",
      name: "Deleted",
      icon: "delete calendar",
      color: "text-red-500",
    },
  ];

  return (
    <div className="m-6 rounded-xl shadow-md border-2">
      <h1 className="text-3xl font-bold p-10"> Location Controls</h1>
      {defaultList.map((it) => (
        <TypeCard key={it.id} Name={it.name} Icon={it.icon} Color={it.color} />
      ))}
    </div>
  );
}

export default Location;
