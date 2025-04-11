import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="font-bricolage">
                <Hero />
                <About />
                <Experience />
                {/* <Projects /> */}
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
