import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className=" space-y-20 pb-20 overflow-hidden bg-white dark:bg-slate-800">
      <Hero />
      <Skills />
    </div>
  );
}
