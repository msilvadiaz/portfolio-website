import { socials } from "@/data/data";
import { about } from "@/data/data";

export default function Profile() {
    return (
        <>
            <div className="flex gap-[5px] items-center mt-0">
                <h1 className="text-4xl font-semibold name-title">{about.name}</h1>
            </div>
            <div className="mt-1.5 flex items-center gap-1">
                <p className="text-base text-base-content/60">{about.role}</p>
                <p className="underline cursor-pointer text-base-content/90">
                </p>
            </div>

            <div className="flex items-center mt-3 gap-3">
                <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-1 transition-transform duration-200 hover:scale-110 hover:text-base-content/70"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cursor-pointer"
                    >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                    </svg>
                </a>

                <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-1 transition-transform duration-200 hover:scale-110 hover:text-base-content/70"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cursor-pointer"
                    >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                </a>

                <a
                    href={`mailto:${socials.email}`}
                    className="rounded-md p-1 transition-transform duration-200 hover:scale-110 hover:text-base-content/70"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cursor-pointer"
                    >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
                    </svg>
                </a>

                <a
                    href={socials.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-1 transition-transform duration-200 hover:scale-110 hover:text-base-content/70"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cursor-pointer"
                    >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6" />
                        <path d="M16 13H8" />
                        <path d="M16 17H8" />
                        <path d="M10 9H8" />
                    </svg>
                </a>
            </div>
        </>
    );
}
