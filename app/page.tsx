import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-between p-20 bg-[#202117] bg-[url('/assets/illustration.png')] bg-no-repeat bg-right bg-contain">
      <div className="max-w-md overflow-hidden text-left space-y-6 z-10">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src="/assets/sporty-space-light.svg"
            alt="Sporty Space Logo"
            width={150}
            height={50}
          />
        </div>
        {/* Heading */}
        <h1 className="text-5xl font-bold text-white">
          Reserve, <span className="text-green-500">Play,</span> Repeat!
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Secure your Sporty Space today and elevate your play!
        </p>
        {/* Call to Action */}
        <div className="flex gap-4 mt-6">
          <a href="/login" className="bg-[#AFEA0D] text-black font-semibold px-9 py-3 rounded-full">
            Get Started
          </a>
          <button className="border border-white text-white px-6 py-3 rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}