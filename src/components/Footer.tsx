import { Heart } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-border/50">
            <div className="container">
                <div className="flex md:flex-row flex-col justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-muted-foreground text-sm">
                            © {currentYear} John Developer. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center text-muted-foreground text-sm">
                        <span>Built with</span>
                        <Heart className="mx-1 w-4 h-4 text-red-500" />
                        <span>using React & Tailwind</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
