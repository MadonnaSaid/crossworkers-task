import TypeCard from "./TypeCard";
import React, { useState } from "react";
function Installations() {
  const defaultList = [
    { id: "k1", name: "Added", icon: "add square", color: "text-blue-500" },
    { id: "k2", name: "Updated", icon: "edit", color: "text-yellow-400" },
    {
      id: "k3",
      name: "Deleted",
      icon: "delete calendar",
      color: "text-red-500",
    },
    {
      id: "k4",
      name: "Water filter changes",
      icon: "filter",
      color: "text-green-400",
    },
    {
      id: "k5",
      name: "Upcoming water filter changes",
      icon: "long arrow alternate right",
      color: "text-emerald-200",
    },
  ];

  return (
    <div className="m-6 rounded-xl shadow-md border-2">
      <h1 className="text-3xl font-bold p-10"> Installation Controls</h1>
      {defaultList.map((it) => (
        <TypeCard key={it.id} Name={it.name} Icon={it.icon} Color={it.color} />
      ))}
    </div>
  );
}

export default Installations;
