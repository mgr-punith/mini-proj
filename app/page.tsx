"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/members", { scroll: false });
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto my-auto h-screen w-screen">
      <div className="mb-24">
        <p className="font-bold text-9xl">HEY THERE</p>
      </div>
      <div>
        <button
          onClick={handleNavigation}
          className="bg-slate-300 font-sans font-semibold text-lg text-black py-4 px-6 rounded-xl"
        >
          Crew ->
          {/* this redirect to another route */}
        </button>
      </div>
    </div>
  );
}
