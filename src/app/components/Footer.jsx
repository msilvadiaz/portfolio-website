import { socials } from "@/data/data";

const contactLinks = [
    { label: "LinkedIn", href: socials.linkedin },
    { label: "GitHub", href: socials.github },
    { label: "Mail", href: `mailto:${socials.email}` },
    { label: "Resume", href: socials.resume },
];

export default function Footer() {
    return (
        <footer className="mt-16 pb-8 px-4">
            <hr className="border-base-content/20" />
            <div className="pt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                {contactLinks.map((contact) => (
                    <a
                        key={contact.label}
                        href={contact.href}
                        target={contact.label === "Mail" ? undefined : "_blank"}
                        rel={contact.label === "Mail" ? undefined : "noopener noreferrer"}
                        className="hover:underline text-base-content/80"
                    >
                        {contact.label}
                    </a>
                ))}
            </div>
        </footer>
    );
}
