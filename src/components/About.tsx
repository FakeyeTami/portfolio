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
            <div className="flex flex-col items-center gap-20 lg:gap-10 container">
                <div className="text-center">
                    <h2 className="section-title gradient-text">About Me</h2>
                </div>
                <SlideUpAnimation duration={0.3}>
                    <div className="flex lg:flex-row-reverse flex-col items-center gap-20 lg:gap-10 mb-10">
                        {/* Text Content */}
                        <div className="space-y-4 order-2 md:order-2 w-full lg:w-3/5">
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

                        {/* Image */}
                        <div className="flex justify-center items-center order-1 md:order-1 w-full md:w-2/3">
                            <Image
                                src="/public/profile.jpg"
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
