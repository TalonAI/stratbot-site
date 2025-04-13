import Image from 'next/image';

export default function Team() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-12">Meet the StratBot Team</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        <div className="flex flex-col items-center text-center space-y-2">
          <Image src="/images/paul-ai.jpg" alt="Paul Maggio" width={160} height={160} className="rounded-full" />
          <h2 className="text-xl font-semibold">Paul Maggio</h2>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <Image src="/images/isaiah.jpg" alt="Isaiah McGeef" width={160} height={160} className="rounded-full" />
          <h2 className="text-xl font-semibold">Isaiah McGeef</h2>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <Image src="/images/mike-w.jpg" alt="Michael Wish" width={160} height={160} className="rounded-full" />
          <h2 className="text-xl font-semibold">Michael Wish</h2>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <Image src="/images/m2.jpg" alt="Michael Martin" width={160} height={160} className="rounded-full" />
          <h2 className="text-xl font-semibold">Michael Martin</h2>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <Image src="/images/david.jpg" alt="David Fernandez" width={160} height={160} className="rounded-full" />
          <h2 className="text-xl font-semibold">David Fernandez</h2>
        </div>
      </div>
    </main>
  );
}
