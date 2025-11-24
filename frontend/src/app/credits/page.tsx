export default function CreditsPage() {
  const members = [
    { name: "Iesha Khabra", role: "Frontend & documentation" },
    { name: "Sukhdip Sandhu", role: "Frontend & UI design" },
    { name: "Dino Velagic", role: "Backend routes & DB" },
    { name: "Andy Wong", role: "Backend structure" },
    { name: "Andrew Jones", role: "Testing & QA" },
  ];

  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="page-title mb-3">Credits</h1>
      <p className="page-intro mb-10">
        Project Delta was developed collaboratively as part of CSC 131 – Software Engineering.
      </p>

      <ul className="credits-list">
        {members.map((m) => (
          <li key={m.name} className="credits-card">
            <p className="credits-name">{m.name}</p>
            <p className="credits-role">{m.role}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
