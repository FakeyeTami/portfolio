"use client";
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Briefcase, Calendar, ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";
import SlideUpAnimation from "./animations/SlideUp";

const JobExperience = [
    {
        title: "Freelancer",
        company: "Upwork",
        location: "Remote",
        period: "Nov 2024 - Present",
        description:
            "Designed and developed scalable web applications tailored to client needs using modern frontend and backend technologies.",
        responsibilities: [
            "Developed full-stack applications using React, Next.js, Tailwind CSS, Node.js, and Express.",
            "Collaborated with clients to refine project scope and improve delivery timelines.",
            "Optimized app performance, reducing load times by up to 40% through code refactoring.",
            "Maintained, debugged, and updated client applications for optimal functionality.",
            "Provided strategic technical consulting to help clients meet business goals.",
        ],
        technologies: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "JavaScript",
        ],
        expanded: true,
    },
    {
        title: "Frontend Developer",
        company: "Sinotec",
        location: "Lagos, Nigeria",
        period: "Sep 2024 - Nov 2024",
        description:
            "Built and maintained modern frontend applications to improve user experience and drive engagement.",
        responsibilities: [
            "Developed responsive UI with React and modern frontend tooling.",
            "Collaborated with cross-functional teams to deliver user-centric features.",
            "Built reusable UI components to streamline feature development.",
            "Enhanced accessibility and cross-browser compatibility.",
            "Conducted code reviews and implemented user-driven UI/UX updates.",
        ],
        technologies: [
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Framer Motion",
            "Redux",
        ],
        expanded: false,
    },
    {
        title: "Software Engineer, Intern / Teaching Assistant",
        company: "Aptech Computer Education",
        location: "Wuse 2, FCT, Nigeria",
        period: "Oct 2023 - Sep 2024",
        description:
            "Taught and assisted in the development of web and software applications, helping students strengthen coding fundamentals.",
        responsibilities: [
            "Taught Python and web development to over 10 students through projects and assessments.",
            "Assisted in internal application development to improve workflow.",
            "Led weekly code reviews to enforce best practices.",
            "Collaborated with teams to track student progress and troubleshoot challenges.",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Python", "React"],
        expanded: false,
    },
];

export default function Experience() {
    const [experiences, setExperiences] = useState(JobExperience);
    const toggleExperience = (index: number) => {
        setExperiences(
            experiences.map((exp, i) =>
                index === i ? { ...exp, expanded: !exp.expanded } : exp
            )
        );
    };

    return (
        <section id="experience" className="relative">
            <SlideUpAnimation>
                <div className="container">
                    <div className="mb-10 text-center">
                        <h2 className="section-title gradient-text">
                            Experience
                        </h2>
                    </div>

                    <div className="space-y-6 mx-auto max-w-4xl">
                        {experiences.map((job, index) => (
                            <Collapsible
                                key={index}
                                open={job.expanded}
                                onOpenChange={() => toggleExperience(index)}
                                className="bg-card/50 hover:shadow-md border border-border/50 rounded-lg overflow-hidden transition-all duration-300"
                            >
                                <div className="p-6">
                                    <CollapsibleTrigger className="flex justify-between items-start w-full text-left cursor-pointer">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="flex items-center gap-2 font-medium text-foreground text-xl">
                                                <Briefcase className="w-5 h-5 text-primary" />
                                                {job.title}
                                            </h3>
                                            <p className="font-medium text-foreground/90 text-lg">
                                                {job.company}
                                            </p>
                                            <div className="flex flex-wrap gap-4 text-foreground/70 text-sm">
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    {job.location}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {job.period}
                                                </span>
                                            </div>
                                        </div>
                                        <ChevronDown
                                            className={`h-5 w-5 text-foreground transition-transform ${
                                                job.expanded ? "rotate-180" : ""
                                            }`}
                                        />
                                    </CollapsibleTrigger>
                                </div>

                                <CollapsibleContent>
                                    <Separator className="mx-6" />
                                    <div className="space-y-4 p-6">
                                        <p className="text-foreground">
                                            {job.description}
                                        </p>
                                        <h4 className="font-medium text-foreground">
                                            Responsibilities
                                        </h4>
                                        <ul className="space-y-2.5 pl-6 text-foreground/70 list-disc">
                                            {job.responsibilities.map(
                                                (item, index) => (
                                                    <li key={index}>{item}</li>
                                                )
                                            )}
                                        </ul>
                                        <h4 className="font-medium text-foreground">
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {job.technologies.map(
                                                (tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-primary/10 px-2.5 py-0.5 rounded-full font-medium text-primary text-xs"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        ))}
                    </div>
                </div>
            </SlideUpAnimation>
            <div className="top-1/2 left-1/2 -z-10 absolute bg-primary/5 blur-3xl rounded-full w-full h-96 -translate-x-1/2 -translate-y-1/2 filter"></div>
        </section>
    );
}
