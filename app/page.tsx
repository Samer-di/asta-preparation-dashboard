"use client";

import { useState } from "react";

type Task = {
  id: number;
  name: string;
  description: string;
  priority: "High" | "Medium";
  completed: boolean;
};

const initialTasks: Task[] = [
  {
    id: 1,
    name: "Sword control",
    description: "Practise precise anti-magic sword movements.",
    priority: "High",
    completed: false,
  },
  {
    id: 2,
    name: "Physical endurance",
    description: "Complete a focused strength and stamina session.",
    priority: "Medium",
    completed: false,
  },
  {
    id: 3,
    name: "Team coordination",
    description: "Review a preparation plan with the Black Bulls.",
    priority: "High",
    completed: false,
  },
];

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const totalTasks = tasks.length;
  const completedCount = tasks.filter((task) => task.completed).length;
  const percentage = Math.round((completedCount / totalTasks) * 100);

  function toggleTask(id: number) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  return (
    <main className="min-h-screen bg-[#eef3f8] px-4 py-8 text-[#172554]">
      <div className="mx-auto max-w-245">
        <header className="rounded-xl border border-[#dfe7f1] bg-[#fdfefe] px-5 py-4 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
          <h1 className="text-[clamp(1.85rem,2.6vw,2.8rem)] font-extrabold tracking-tight text-[#172554]">
            Asta&apos;s Preparation Dashboard
          </h1>
          <p className="mt-2 text-[15px] text-[#475569]">
            Asta is preparing for Lucifero by following a structured training
            plan.
          </p>
        </header>

        <section className="mt-5 rounded-xl border border-[#dfe7f1] bg-[#fdfefe] px-5 py-4 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-[#fee2e2] px-2.5 py-1 text-[11px] font-semibold text-[#b91c1c]">
              High Priority Confrontation
            </span>
            <span className="inline-flex items-center rounded-full bg-[#e2e8f0] px-2.5 py-1 text-[11px] font-semibold text-[#334155]">
              Threat Brief: Lucifero
            </span>
          </div>

          <p className="text-[15px] leading-6 text-[#3b4d67]">
            Lucifero is a powerful devil who uses gravity magic. Complete
            conditioning and anti-magic drills to ensure peak readiness.
          </p>
        </section>

        <section className="mt-5 rounded-xl border border-[#dfe7f1] bg-[#fdfefe] px-5 py-4 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-[1.35rem] font-bold tracking-tight text-[#172554]">
                Preparation Progress
              </h2>
              <p className="text-xs text-[#64748b]">
                Real-time completion tracking against a predefined regimen.
              </p>
            </div>

            <div className="flex items-baseline gap-2 whitespace-nowrap text-[#172554]">
              <span className="text-sm font-medium">
                {completedCount} / {totalTasks} Tasks Completed
              </span>
              <span className="text-[15px] font-bold">{percentage}%</span>
            </div>
          </div>

          <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#e2e8f0]">
            <div
              className="h-full rounded-full bg-[#2563eb] transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <p className="mt-3 text-sm text-[#475569]">
            Progress measures training plan completion, not the probability of
            defeating Lucifero.
          </p>
        </section>

        <section className="mt-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-[1.2rem] font-bold text-[#172554]">
              Assigned Training Tasks
            </h2>
            <span className="text-xs font-medium text-[#64748b]">
              {totalTasks} Assigned Regimens
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {tasks.map((task) => (
              <article
                key={task.id}
                className="rounded-xl border border-[#dfe7f1] bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.02)]"
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-[11px] font-semibold ${
                      task.priority === "High"
                        ? "bg-[#fee2e2] text-[#b91c1c]"
                        : "bg-[#fef3c7] text-[#b45309]"
                    }`}
                  >
                    {task.priority}
                  </span>

                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] font-medium ${
                      task.completed ? "text-[#10b981]" : "text-[#64748b]"
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        task.completed ? "bg-[#10b981]" : "bg-[#94a3b8]"
                      }`}
                    />
                    {task.completed ? "Completed" : "Not completed"}
                  </span>
                </div>

                <h3 className="mt-4 text-[1.15rem] font-bold text-[#172554]">
                  {task.name}
                </h3>

                <p className="mt-2 min-h-13.5 text-sm leading-6 text-[#475569]">
                  {task.description}
                </p>

                <button
                  type="button"
                  aria-pressed={task.completed}
                  onClick={() => toggleTask(task.id)}
                  className={`mt-5 w-full rounded-lg px-4 py-3 text-sm font-semibold text-white transition focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 ${
                    task.completed
                      ? "bg-[#2563eb] hover:bg-[#1d4ed8]"
                      : "bg-[#2563eb] hover:bg-[#1d4ed8]"
                  }`}
                >
                  {task.completed ? "Undo completion" : "Mark complete"}
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
