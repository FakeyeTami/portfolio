"use client";

import FadeInAnimation from "./animations/FadeIn";
import { Button } from "./ui/button";

export default function Hero() {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    const scrollToContact = () => {
        const contacts = document.getElementById("contact");
        if (contacts) {
            contacts.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="relative flex flex-col justify-center pt-16 min-h-screen overflow-hidden"
        >
            <div className="flex flex-col items-start gap-4 max-w-4xl container">
                <FadeInAnimation delay={0}>
                    <p className="font-medium text-primary text-lg">
                        Hello, my name is
                    </p>
                </FadeInAnimation>

                <FadeInAnimation delay={0.1}>
                    <h1 className="font-bold text-accent text-4xl md:text-6xl lg:text-7xl">
                        Fakeye Tamilore
                    </h1>
                </FadeInAnimation>

                <FadeInAnimation delay={0.2}>
                    <h2 className="font-bold text-foreground text-3xl md:text-5xl lg:text-6xl">
                        I build things for the web.
                    </h2>
                </FadeInAnimation>

                <FadeInAnimation delay={0.3}>
                    <p className="max-w-2xl text-muted-foreground text-lg md:text-xl">
                        I&apos;m a Full-Stack Developer based in FCT Abuja,
                        Nigeria. I enjoy working on every aspect of web
                        development, from the user interface to the server
                        logic.
                    </p>
                </FadeInAnimation>

                <FadeInAnimation delay={0.4}>
                    <div className="flex gap-4 mt-8 md:mt-0">
                        <Button size="lg" onClick={scrollToAbout}>
                            Explore my work
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={scrollToContact}
                        >
                            Get In Touch
                        </Button>
                    </div>
                </FadeInAnimation>

                <div className="top-1/4 right-0 -z-10 absolute bg-primary/5 blur-3xl rounded-full w-96 h-96 filter"></div>
                <div className="bottom-1/4 left-0 -z-10 absolute bg-accent/5 blur-3xl rounded-full w-96 h-96 filter"></div>
            </div>
        </section>
    );
}
