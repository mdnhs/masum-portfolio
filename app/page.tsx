import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className=" space-y-20">
      <Hero />
      <Skills />
      <Footer />
    </div>
  );
}
