import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import Sections from "@/components/Sections";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <NavigationBar />
      <Sections />
      <Footer />
    </main>
  );
}
