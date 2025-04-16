import Image from "next/image";

const team = [
  { name: "Paul Maggio", image: "/images/paul-ai.jpg" },
  { name: "Isaiah McGeef", image: "/images/isaiah.jpg" },
  { name: "Michael Wish", image: "/images/mike-w.jpg" },
  { name: "Michael Martin", image: "/images/m2.jpg" },
  { name: "David Fernandez", image: "/images/david.jpg" },
];

export default function Team() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-10">
  <h1 className="text-3xl font-extrabold text-center">Meet the StratBot Team</h1>

  {/* Top row: 3 members */}
  <div className="grid grid-cols-3 gap-10">
    {teamMembers.slice(0, 3).map((member, idx) => (
      <div key={idx} className="flex flex-col items-center">
        <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full object-cover" />
        <p className="mt-4 text-lg font-semibold">{member.name}</p>
      </div>
    ))}
  </div>

  {/* Bottom row: center 2 members */}
  <div className="grid grid-cols-2 gap-10">
    {teamMembers.slice(3).map((member, idx) => (
      <div key={idx} className="flex flex-col items-center">
        <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full object-cover" />
        <p className="mt-4 text-lg font-semibold">{member.name}</p>
      </div>
    ))}
  </div>
</div>

  );
}
