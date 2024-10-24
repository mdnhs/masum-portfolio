import Hero from "@/components/site-header";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className=" space-y-20 pb-20 overflow-hidden bg-white dark:bg-slate-800">
      <Hero />
      <Skills />
    </div>
  );
}
