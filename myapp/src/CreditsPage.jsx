import React, { useMemo, useState } from "react";


const FooterLinks = () => (
  <div className="mt-12 flex flex-wrap items-center justify-center gap-5 opacity-90">
    {/* Replace these hrefs with actual project accountss */}
    <a aria-label="LinkedIn" href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full p-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zm-9.846 18.462H6.153V9.23h3.001v9.232zM7.651 7.999a1.74 1.74 0 1 1 0-3.481 1.74 1.74 0 0 1 0 3.481zM20 18.462h-3.001v-4.491c0-1.071-.021-2.449-1.492-2.449-1.494 0-1.723 1.166-1.723 2.372v4.568h-3.001V9.23h2.879v1.257h.041c.401-.76 1.379-1.562 2.838-1.562 3.036 0 3.599 2.001 3.599 4.604v4.933z"/></svg>
    </a>
    <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full p-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path fillRule="evenodd" d="M12 .5a11.5 11.5 0 0 0-3.635 22.419c.575.105.786-.245.786-.55 0-.271-.01-.99-.015-1.943-3.197.695-3.872-1.542-3.872-1.542-.523-1.33-1.277-1.685-1.277-1.685-1.044-.714.079-.699.079-.699 1.155.081 1.763 1.186 1.763 1.186 1.027 1.76 2.694 1.252 3.35.957.104-.744.402-1.252.731-1.54-2.55-.29-5.234-1.276-5.234-5.678 0-1.255.448-2.28 1.185-3.083-.119-.29-.513-1.458.112-3.04 0 0 .965-.309 3.165 1.178a10.97 10.97 0 0 1 5.758 0c2.2-1.487 3.163-1.178 3.163-1.178.626 1.582.232 2.75.114 3.04.738.803 1.184 1.828 1.184 3.084 0 4.413-2.689 5.385-5.253 5.669.413.354.781 1.05.781 2.118 0 1.53-.014 2.762-.014 3.14 0 .308.208.662.793.549A11.501 11.501 0 0 0 12 .5Z" clipRule="evenodd"/></svg>
    </a>
    <a aria-label="Facebook" href="https://www.facebook.com" target="_blank" rel="noreferrer" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full p-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M22.676 0H1.326C.594 0 0 .593 0 1.325v21.351C0 23.407.594 24 1.326 24h11.495v-9.294H9.847v-3.62h2.974V8.41c0-2.943 1.796-4.547 4.418-4.547 1.257 0 2.337.093 2.652.135v3.074l-1.82.001c-1.427 0-1.703.679-1.703 1.675v2.196h3.406l-.444 3.62h-2.962V24h5.807C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.676 0z"/></svg>
    </a>
    <a aria-label="Twitter/X" href="https://twitter.com" target="_blank" rel="noreferrer" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full p-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M18.244 2H21.5l-7.66 8.74L22.5 22h-6.137l-4.804-5.62L5.976 22H2.718l8.178-9.336L1.5 2h6.277l4.39 5.1L18.244 2Zm-1.076 18h1.74L6.93 3.96H5.079L17.168 20Z"/></svg>
    </a>
    <a aria-label="Instagram" href="https://www.instagram.com" target="_blank" rel="noreferrer" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full p-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.975.975 1.252 2.242 1.314 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.314 3.608-.975.975-2.242 1.252-3.608 1.314-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.314-.975-.975-1.252-2.242-1.314-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.314-3.608.975-.975 2.242-1.252 3.608-1.314C8.416 2.175 8.796 2.163 12 2.163Zm0 1.622c-3.157 0-3.527.012-4.768.069-1.023.047-1.577.218-1.944.363-.49.19-.84.417-1.208.785-.368.368-.595.718-.785 1.208-.145.367-.316.921-.363 1.944-.057 1.241-.069 1.611-.069 4.768s.012 3.527.069 4.768c.047 1.023.218 1.577.363 1.944.19.49.417.84.785 1.208.368.368.718.595 1.208.785.367.145.921.316 1.944.363 1.241.057 1.611.069 4.768.069s3.527-.012 4.768-.069c1.023-.047 1.577-.218 1.944-.363.49-.19.84-.417 1.208-.785.368-.368.595-.718.785-1.208.145-.367.316-.921.363-1.944.057-1.241.069-1.611.069-4.768s-.012-3.527-.069-4.768c-.047-1.023-.218-1.577-.363-1.944-.19-.49-.417-.84-.785-1.208-.368-.368-.718-.595-1.208-.785-.367-.145-.921-.316-1.944-.363-1.241-.057-1.611-.069-4.768-.069Zm0 3.513a4.702 4.702 0 1 1 0 9.405 4.702 4.702 0 0 1 0-9.405Zm0 1.622a3.08 3.08 0 1 0 0 6.161 3.08 3.08 0 0 0 0-6.161Zm4.846-.993a1.097 1.097 0 1 1 0 2.194 1.097 1.097 0 0 1 0-2.194Z"/></svg>
    </a>
  </div>
);

const TEAM = [
  { name: "Sukhdip Sandhu", avatar: "/avatars/sukhdip.jpg", roles: ["Project Manager", "Designer"], tasks: ["Timeline & standups", "Documentation shepherding", "Accessibility review"] },
  { name: "Dino Velagic", avatar: "/avatars/dino.jpg", roles: ["Programmer"], tasks: ["Search module integration", "Membership enrollment UI"] },
  { name: "Iesha Khabra", avatar: "/avatars/iesha.jpg", roles: ["Programmer"], tasks: ["Loan service API", "Reservation workflow implementation"] },
  { name: "Andrew Jones", avatar: "/avatars/andrew.jpg", roles: ["Designer"], tasks: ["Visual system & layout patterns", "Class & Use-Case diagram drafts"] },
  { name: "David Stelzer", avatar: "/avatars/david.jpg", roles: ["Quality Control"], tasks: ["Unit & system tests", "Automated CI checks"] },
  { name: "Gabriel Batarseh", avatar: "/avatars/gabriel.jpg", roles: ["Analyst"], tasks: ["Requirements workshops & traceability", "Tool/IDE matrix", "Initial data model mapping"] },
  { name: "Andy Wong", avatar: "/avatars/andy.jpg", roles: ["Programmer"], tasks: ["Admin dashboard", "Overdue fees logic"] },
];

function classNames(...xs) { return xs.filter(Boolean).join(" "); }

const RolePill = ({ label }) => (
  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2 py-0.5 text-xs font-medium text-neutral-700 bg-white/70 dark:bg-neutral-900/50">{label}</span>
);

const MemberCard = ({ member, index }) => (
  <article
    tabIndex={0}
    aria-label={`${member.name} – roles ${member.roles.join(", ")}`}
    className="group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col"
  >
    <div className="flex items-center gap-4">
      <img
        src={member.avatar}
        alt={`${member.name} headshot`}
        className="h-16 w-16 rounded-xl object-cover ring-1 ring-neutral-200/70 dark:ring-neutral-700"
        onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/128?text=Headshot"; }}
      />
      <div className="min-w-0">
        <h3 className="text-lg font-semibold leading-tight text-neutral-900 dark:text-neutral-100">
          <span className="mr-1 text-neutral-400">{String(index + 1).padStart(2, "0")}.</span>{" "}
          {member.name}
        </h3>
        <div className="mt-1 flex flex-wrap gap-1.5" aria-label="Roles">
          {member.roles.map((r) => (<RolePill key={r} label={r} />))}
        </div>
      </div>
    </div>

    <ul className="mt-4 list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300 space-y-1" aria-label="Tasks completed">
      {member.tasks.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  </article>
);

export default function CreditsPage() {
  const [q, setQ] = useState("");
  const [role, setRole] = useState("All");

  const roles = useMemo(() => {
    const s = new Set();
    TEAM.forEach(m => m.roles.forEach(r => s.add(r)));
    return ["All", ...Array.from(s)];
  }, []);

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return TEAM.filter(m => {
      const matchesQ = !qq ||
        m.name.toLowerCase().includes(qq) ||
        m.roles.some(r => r.toLowerCase().includes(qq)) ||
        m.tasks.some(t => t.toLowerCase().includes(qq));
      const matchesRole = role === "All" || m.roles.includes(role);
      return matchesQ && matchesRole;
    });
  }, [q, role]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:bg-indigo-600 focus:text-white focus:px-3 focus:py-2 focus:rounded-md">Skip to content</a>

      <header className="mx-auto max-w-6xl px-6 pt-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Credits</h1>
        <p className="mt-2 max-w-3xl text-neutral-700 dark:text-neutral-300">
          Project: <span className="font-semibold">Library Management System</span> — Team <span className="font-semibold">Delta</span> (CSC-131-05, Fall 2025). Below are the team members with their roles and completed tasks, per requirement <span className="font-mono">3(c)</span>.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          <label className="flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 px-3 py-2">
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Search</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Filter by name, role, or task…"
              className="w-full bg-transparent outline-none text-sm py-1"
              aria-label="Search team members"
            />
          </label>

          <label className="flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 px-3 py-2">
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Role</span>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full bg-transparent outline-none text-sm py-1" aria-label="Filter by role">
              {roles.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </label>

          <button
            onClick={() => window.print()}
            className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 px-3 py-2 text-sm hover:bg-white/95 hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            aria-label="Print or save this Credits page as PDF"
          >
            Print / Save PDF
          </button>
        </div>
      </header>

      <section id="content" className="mx-auto max-w-6xl px-6 pb-16 pt-8">
        <div className={classNames(
          "grid gap-5",
          "sm:grid-cols-2 lg:grid-cols-3"
        )}>
          {filtered.map((m, i) => (
            <MemberCard key={m.name} member={m} index={i} />
          ))}
        </div>

        <FooterLinks />

        <p className="mt-8 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Project Delta — CSC-131-05. All rights reserved.
        </p>
      </section>

      <style>{`
        @media print {
          header .grid, header button { display: none !important; }
          main { background: #fff !important; }
          article { break-inside: avoid; }
        }
      `}</style>
    </main>
  );
}
