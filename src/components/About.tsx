import Image from "next/image";
import { Layout, Server, Code, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import SlideUpAnimation from "./animations/SlideUp";

const skills = [
    {
        title: "Frontend Development",
        description:
            "Building responsive, accessible user interfaces with modern frameworks.",
        icon: <Layout className="w-10 h-10 text-primary" />,
        technologies: [
            "HTML",
            "CSS",
            "SASS",
            "BootStrap",
            "TailwindCSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Redux",
            "Zustand",
            "Framer Motion",
        ],
    },
    {
        title: "Backend Development",
        description:
            "Creating robust, scalable APIs and server-side applications.",
        icon: <Server className="w-10 h-10 text-primary" />,
        technologies: [
            "Node.js",
            "Express",
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Prisma",
            "Git",
            "REST",
            "Apollo - GraphQL",
            "Docker",
            "AWS",
        ],
    },
    {
        title: "Clean Code Practices",
        description: "Writing maintainable, tested, and well-architected code.",
        icon: <Code className="w-10 h-10 text-primary" />,
        technologies: ["Testing", "CI/CD", "Documentation", "Code Reviews"],
    },
    {
        title: "Team Collaboration",
        description:
            "Working effectively in agile environments with diverse teams.",
        icon: <Users className="w-10 h-10 text-primary" />,
        technologies: ["Agile", "Git", "Jira", "Communication"],
    },
];

export default function About() {
    return (
        <section id="about" className="relative bg-secondary/50">
            <div className="flex flex-row lg:flex-col items-center gap-20 lg:gap-10 container">
                <div className="text-center">
                    <h2 className="section-title gradient-text">About Me</h2>
                </div>
                <SlideUpAnimation duration={0.3}>
                    <div className="flex md:flex-row flex-col items-center gap-20 lg:gap-10 mb-10">
                        <div className="space-y-4 w-full lg:w-3/5">
                            <p>
                                I&apos;m a passionate self-taught Full-Stack
                                Developer with a deep love for building
                                intuitive, performant web applications. I&apos;m
                                constantly exploring new tools and techniques to
                                stay ahead in the ever-evolving world of web
                                development.
                            </p>
                            <p>
                                My journey started with a curiosity about how
                                technology shapes the world—and that spark
                                quickly turned into a full-blown obsession with
                                solving real-world problems through code.
                                Whether it&apos;s crafting seamless user
                                interfaces or architecting robust backend
                                systems, I love bringing ideas to life.
                            </p>
                            <p>
                                I specialize in the full web stack, working with
                                tools like React, Next.js, Node.js, Express, and
                                PostgreSQL to deliver scalable, efficient
                                solutions. Every project is a new opportunity to
                                grow, create, and make an impact.
                            </p>
                        </div>

                        <div className="flex justify-center items-center w-full md:w-2/3">
                            <Image
                                src="data:image/jpeg;base64,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"
                                alt="Profile Picture"
                                width={119}
                                height={119}
                                className="shadow-primary/40 hover:shadow-xl backdrop-blur-md rounded-full w-[250px] md:w-[419px] h-[250px] md:h-[419px] object-cover[20%_35%] transition-all hover:translate-y-1 duration-300 ease-in-out"
                            />
                        </div>
                    </div>
                </SlideUpAnimation>

                <div className="gap-6 lg:gap-8 grid grid-cols-1 md:grid-cols-2">
                    {skills.map((skill, index) => (
                        <SlideUpAnimation delay={index} key={index}>
                            <Card className="bg-card/50 hover:shadow-md backdrop-blur-sm border border-border/50 transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="flex flex-col gap-4 h-full">
                                        <span color="text-primary">
                                            {skill.icon}
                                        </span>
                                        <h3 className="font-bold text-accent text-xl">
                                            {skill.title}
                                        </h3>
                                        <p className="flex-grow text-foreground">
                                            {skill.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {skill.technologies.map(
                                                (tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-primary/10 mt-1.5 px-2.5 py-0.5 rounded-full font-medium text-primary text-xs"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </SlideUpAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
