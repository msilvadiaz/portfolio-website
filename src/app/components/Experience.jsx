import { experience } from "../../data/data";

export default function Experience() {
    return (
        <>
            <div className="mt-10 scroll-mt-14" id="experience">
                <h2 className="text-xl font-medium section-heading">Work Experience</h2>
                <div className="mt-6">
                    <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-500 mt-4 p-2">
                        {experience.map((item, index) => {
                            const cardContent = (
                                <div className="flex items-start gap-3">
                                    <div className="shrink-0 rounded-2xl border-2 border-base-content/20 p-1">
                                        <div className="w-16 h-16 rounded-md border-2 border-base-content/20 bg-base-100 overflow-hidden">
                                            <img
                                                src={item.logo}
                                                alt={item.logoAlt}
                                                className="w-full h-full object-cover scale-110"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <time className="text-xs font-medium text-base-content/80">
                                            {item.date}
                                        </time>

                                        <p className="text-base font-semibold text-base-content">
                                            {item.role} • {item.company}
                                        </p>

                                        <p className="mt-1 text-sm text-base-content/80 max-w-[52ch]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );

                            return (
                                <li
                                    key={index}
                                    className="relative -ms-1.5 flex items-start gap-4"
                                >
                                    <span className="size-3 shrink-0 rounded-full bg-base-content"></span>

                                    {item.link ? (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-lg transition-transform duration-200 hover:scale-[1.01]"
                                        >
                                            {cardContent}
                                        </a>
                                    ) : (
                                        cardContent
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}
