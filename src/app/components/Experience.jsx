import { experience } from "../../data/data";

export default function Experience() {
    return (
        <>
            <div className="mt-10 scroll-mt-14" id="experience">
                <h2 className="text-xl font-medium section-heading">Work Experience</h2>
                <div className="mt-6">
                    <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-500 mt-4 p-2">
                        {experience.map((item, index) => (
                            <li
                                key={index}
                                className="relative -ms-1.5 flex items-start gap-4"
                            >
                                <span className="size-3 shrink-0 rounded-full bg-base-content"></span>

                                <div className="flex items-start gap-3">
                                    <div className="shrink-0 rounded-2xl border-2 border-base-content/20 p-1">
                                        <img
                                            src={item.logo}
                                            alt={item.logoAlt}
                                            className="w-16 h-16 rounded-md object-contain bg-base-100 p-1 border border-black"
                                        />
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
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
}
