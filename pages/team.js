import Image from "next/image";

export default function Team() {
  const team = [
    { name: "Paul Maggio", image: "/images/paul-ai.jpg" },
    { name: "Isaiah McGeef", image: "/images/isaiah.jpg" },
    { name: "Michael Wish", image: "/images/mike-w.jpg" },
    { name: "Michael Martin", image: "/images/m2.jpg" },
    { name: "David Fernandez", image: "/images/david.jpg" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-extrabold mb-12">Meet the StratBot Team</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 justify-items-center">
        {team.map((member, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-32 h-32 relative mb-4">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <p className="text-lg font-semibold">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
