import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const WasiCard = () => {
  return (
    <Card className="overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
      <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-400 relative overflow-hidden">
        {/* You can add an actual image here */}
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/80">
          {/* <Image src="/app/assets/pikapika.jpg" alt="lol" width={45} height={45}/> */}
        </div>
      </div>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-white">Rishit Butola</CardTitle>
        <CardDescription className="text-blue-300">MERN Dev</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-white/80">My Life, My Rules!  </p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs">React</span>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs">Next.js</span>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs">Tailwind</span>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs">TypeScript</span>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs">Express</span>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs">Python</span>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs">Django</span>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs">Flask</span>
        </div>
      </CardContent>
      <CardFooter className="border-t border-white/10 flex justify-between">
        <div className="flex gap-4 text-white mt-5">
          <a href="https://github.com/Wasii25" className="hover:text-blue-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://x.com/wasiullah_rs" className="hover:text-blue-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="www.linkedin.com/in/wasiullah-rafeeq-s" className="hover:text-blue-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
        </div>
        <button className="px-3 py-1 text-sm rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors mt-5">Contact</button>
      </CardFooter>
    </Card>
  );
};

export default WasiCard;