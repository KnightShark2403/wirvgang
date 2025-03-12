import { Button } from "@/components/ui/button";
import { FancyButton } from "@/components/ui/fancyButton";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <FancyButton>
        <Link href="/cards">
          WIRV team
        </Link>
      </FancyButton>
      <main className="flex flex-col items-center justify-center px-6 text-center bg-black/30 backdrop-blur-sm rounded-xl p-8">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold tracking-tight animate-fade-in">
            We were bored at a workshop, <br /> so we made this! 🎉
          </h1>
          <p className="mt-3 text-lg opacity-80 animate-slide-up">
            Creativity strikes when you least expect it.
          </p>
        </div>
      </main>
    </div>
  );
}
