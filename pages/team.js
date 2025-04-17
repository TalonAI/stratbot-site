import Image from "next/image";
import Layout from "../components/Layout";

export default function Team() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl font-extrabold mb-8">Meet the Founder</h1>

        <div className="flex flex-col items-center">
          <div className="w-40 h-40 relative mb-6">
            <Image
              src="/images/paul-ai.jpg"
              alt="Paul Maggio"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <h2 className="text-xl font-bold">Paul Maggio</h2>
          <p className="mt-4 text-gray-700 max-w-xl">
            Fractional COO. Strategic Operator. AI Systems Architect.
            <br />
            I help founders and CEOs scale clarity, not chaos—by building systems that make execution inevitable. StratBot is how I bring that edge to life: one custom GPT at a time.
          </p>
        </div>
      </div>
    </Layout>
  );
}
