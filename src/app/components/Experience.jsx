import { experience } from "../../data/data";

export default function Experience() {
    return (
        <>
            <div className="mt-10 scroll-mt-14" id="experience">
                <h2 className="text-xl font-medium before:content-['>'] before:mr-1">Work Experience</h2>
                <div className="mt-6">
                    <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-500 mt-4 p-2">
                        {experience.map((item, index) => (
                            <li
                                key={index}
                                className="relative -ms-1.5 flex items-start gap-4"
                            >
                                <span className="size-3 shrink-0 rounded-full bg-base-content"></span>

                                <div className="-mt-2 flex items-start gap-3">
                                    <img
                                        src={item.logo}
                                        alt={item.logoAlt}
                                        className="w-10 h-10 rounded-md object-contain bg-base-100 p-1 border border-base-content/15"
                                    />

                                    <div>
                                        <time className="text-xs font-medium text-base-content/80">
                                            {item.date}
                                        </time>

                                        <h3 className="text-lg font-semibold text-base-content">
                                            {item.title}
                                        </h3>

                                        <p className="mt-0.5 text-sm text-base-content/80">
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
