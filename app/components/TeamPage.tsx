import { Suspense } from "react";
import { ThemeProvider, ThemedHeading } from "./ThemeProvider";
import UserCard from "./UserCard";

type Member = {
  name: string;
  email: string;
  department: string;
};

async function fetchTeam(): Promise<Member[]> {
  return [
    { name: "Alice", email: "alice@test.com", department: "Engineering" },
    { name: "Bob", email: "bob@test.com", department: "Engineering" },
    { name: "Charlie", email: "charlie@test.com", department: "Research" },
  ];
}

function DepartmentSection({
  department,
  children,
}: {
  department: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-1">
      <p className="text-sm font-medium">{department}</p>
      <div>{children}</div>
    </section>
  );
}

async function TeamList() {
  const members = await fetchTeam();
  const departments = [...new Set(members.map((m) => m.department))];

  return (
    <div className="space-y-3">
      {departments.map((dept) => (
        <DepartmentSection key={dept} department={dept}>
          {members
            .filter((m) => m.department === dept)
            .map((member) => (
              <UserCard
                key={member.email}
                userPromise={Promise.resolve({
                  name: member.name,
                  email: member.email,
                })}
              />
            ))}
        </DepartmentSection>
      ))}
    </div>
  );
}

export default async function TeamPage() {
  return (
    <ThemeProvider theme="dark">
      <div className="space-y-3">
        <ThemedHeading text="Team Members" />
        <Suspense fallback={<p className="text-sm text-zinc-500">Loading team...</p>}>
          <TeamList />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}
