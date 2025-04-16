// pages/team.js
import Image from 'next/image';
import Layout from '../components/Layout';

export default function Team() {
  const teamMembers = [
    { name: "Paul Maggio", image: "/images/paul-ai.jpg" },
    { name: "Isaiah McGeef", image: "/images/isaiah.jpg" },
    { name: "Michael Wish", image: "/images/mike-w.jpg" },
    { name: "Michael Martin", image: "/images/m2.jpg" },
    { name: "David Fernandez", image: "/images/david.jpg" },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12">Meet the StratBot Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full object-cover"
              />
              <p className="mt-4 font-semibold text-lg">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
