"use client";

import emailjs from "emailjs-com";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { LuLinkedin, LuGithub } from "react-icons/lu";
import { Send, Mail } from "lucide-react";
import { Toaster, toast } from "sonner";
import SlideUpAnimation from "./animations/SlideUp";

interface ContactFormInputs {
    subject: string;
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<ContactFormInputs>({
        defaultValues: {
            subject: "",
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (
        data: ContactFormInputs,
        e?: React.BaseSyntheticEvent
    ) => {
        e?.preventDefault();
        setIsSubmitting(true);

        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "");

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
                {
                    subject: data.subject,
                    name: data.name,
                    email: data.email,
                    message: data.message,
                }
            );
            setIsSubmitting(false);
            form.reset();
            toast.success("Email sent successfully!");
        } catch (err: unknown) {
            setIsSubmitting(false);
            form.reset();

            if (err instanceof Error) {
                toast.error(`Failed to send email: ${err.message}`);
            } else {
                toast.error("Failed to send email due to an unknown error.");
            }
        }
    };

    return (
        <section id="contact" className="relative bg-secondary/50">
            <div className="container">
                <div className="mb-10 text-center">
                    <h2 className="section-title gradient-text">
                        Get in Touch
                    </h2>
                    <p className="mb-6 text-muted-foreground">
                        I&apos;m currently available for freelance work,
                        full-time positions, or collaborative projects.
                        Don&apos;t hesitate to reach out using the form or
                        through my social profiles.
                    </p>
                </div>

                <SlideUpAnimation>
                    <div className="gap-12 grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-6"
                                >
                                    <FormField
                                        control={form.control}
                                        name="subject"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Subject</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Subject"
                                                        {...field}
                                                        required
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Your Name"
                                                        {...field}
                                                        required
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="email@example.com"
                                                        {...field}
                                                        required
                                                        type="email"
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="How can I help you?"
                                                        {...field}
                                                        required
                                                        className="w-full"
                                                        rows={8}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <Button
                                        type="submit"
                                        className="w-full"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            "Processing"
                                        ) : (
                                            <>
                                                <Send className="mr-2 w-4 h-4" />{" "}
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </div>

                        <div>
                            <div className="bg-card/80 shadow-sm backdrop-blur-sm p-6 border border-border/50 rounded-lg">
                                <h3 className="mb-4 font-bold text-xl">
                                    Contact Information
                                </h3>
                                <p className="mb-6 text-muted-foreground">
                                    I&apos;m currently available for freelance
                                    work, full-time positions, or collaborative
                                    projects. Don&apos;t hesitate to reach out
                                    using the form or through my social
                                    profiles.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <Mail className="mr-3 w-5 h-5 text-primary" />
                                        <a
                                            href="mailto:fakeyetami@gmail.com"
                                            className="text-foreground hover:text-primary transition-colors"
                                        >
                                            fakeyetami@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h4 className="mb-3 font-medium text-lg">
                                        Connect with me
                                    </h4>
                                    <div className="flex space-x-4">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            asChild
                                        >
                                            <a
                                                href="https://github.com/FakeyeTami"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="GitHub"
                                            >
                                                <LuGithub className="w-5 h-5" />
                                            </a>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            asChild
                                        >
                                            <a
                                                href="https://www.linkedin.com/in/fakeyetami/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="LinkedIn"
                                            >
                                                <LuLinkedin className="w-5 h-5" />
                                            </a>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            asChild
                                        >
                                            <a
                                                href="mailto:fakeyetami@gmail.com"
                                                aria-label="Email"
                                            >
                                                <Mail className="w-5 h-5" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-primary/10 mt-8 p-6 border border-primary/20 rounded-lg">
                                <h4 className="mb-2 font-bold text-lg">
                                    Looking for a developer?
                                </h4>
                                <p className="mb-4 text- text-muted-foreground">
                                    Whether you need a website, web application,
                                    or technical consultation, I&apos;m here to
                                    help bring your ideas to life.
                                </p>
                                <Button variant="outline" asChild>
                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download="resume.pdf"
                                    >
                                        Download Resume
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </SlideUpAnimation>
            </div>
            <Toaster />
        </section>
    );
}
