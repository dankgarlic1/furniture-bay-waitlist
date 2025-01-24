import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Signup from "@/components/Signup";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Signup />
      </main>
      <Footer />
      <Chat />
    </div>
  );
}
