"use client";

import { useState } from "react";

const tasks = [
  { id: 1, name: "Sword control" },
  { id: 2, name: "Physical endurance" },
  { id: 3, name: "Team coordination" },
];

export default function Home() {
  const [completed, setCompleted] = useState<boolean[]>([false, false, false]);

  const completedCount = completed.filter(Boolean).length;
  const totalTasks = tasks.length;
  const percentage = Math.round((completedCount / totalTasks) * 100);

  function toggleTask(index: number) {
    setCompleted((previous) =>
      previous.map((value, i) => (i === index ? !value : value)),
    );
  }

  return (
    <main className="min-h-screen bg-white p-8 text-slate-900">
      <h1 className="text-2xl font-bold">Astas Training POC</h1>

      <div className="my-6">
        <p>
          Completed: {completedCount} / {totalTasks}
        </p>
        <p>Progress: {percentage}%</p>
      </div>

      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div key={task.id} className="rounded border p-4">
            <h2 className="font-semibold">{task.name}</h2>

            <p className="my-2">
              {completed[index] ? "Completed" : "Not completed"}
            </p>

            <button
              type="button"
              onClick={() => toggleTask(index)}
              className="rounded bg-blue-600 px-4 py-2 text-white"
            >
              {completed[index] ? "Undo completion" : "Mark complete"}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
