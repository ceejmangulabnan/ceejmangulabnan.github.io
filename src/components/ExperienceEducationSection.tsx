'use client'

import { useState } from 'react'

const ExperienceEducationSection = () => {
    const [activeTab, setActiveTab] = useState<'work' | 'education'>('work')

    return (
        <section className="py-10 w-full">
            <h2 className="mb-4 font-mono text-blue font-bold text-base sm:text-lg md:text-xl">
                // experience
            </h2>
            <div className="border-2 border-blue-strong rounded-md">
                {/* tab buttons */}
                <div className="flex justify-between border-b-2 border-b-blue-strong">
                    <button
                        onClick={() => setActiveTab('work')}
                        className={`w-full px-3 py-1 rounded-tl-sm font-bold font-mono focus:outline-none focus:ring-0 active:outline-none ${
                            activeTab === 'work'
                                ? 'bg-blue text-white dark:bg-soft-blue dark:text-navy-soft'
                                : 'text-blue'
                        }`}
                    >
                        work
                    </button>

                    <button
                        onClick={() => setActiveTab('education')}
                        className={`w-full px-3 py-1 rounded-tr-sm font-bold font-mono focus:outline-none focus:ring-0 active:outline-none ${
                            activeTab === 'education'
                                ? 'bg-blue text-white dark:bg-soft-blue dark:text-navy-soft'
                                : 'border-blue text-blue'
                        }`}
                    >
                        education
                    </button>
                </div>

                {/* tab content */}
                <div>
                    {activeTab === 'work' && (
                        <div className="flex flex-col gap-4 rounded-md px-4 sm:px-6 md:px-8 py-6 sm:py-8 bg-soft-cream text-blue-strong dark:bg-navy-soft dark:text-blue-strong">
                            <div className="flex gap-2">
                                <div className="h-12 w-12 sm:h-16 sm:w-16 shrink-0 mt-1 sm:mt-2 mr-2 sm:mr-4 bg-blue dark:bg-navy rounded-full"></div>
                                {/* text container */}
                                <div>
                                    <span className="text-xs text-navy-soft dark:text-baby-blue italic font-light">
                                        Sept 2025 - Ongoing
                                    </span>
                                    <h3 className="text-blue-strong dark:text-sky font-bold font-mono text-base sm:text-lg md:text-xl">
                                        MIS Student Assistant | St. Nicolas
                                        College of Business and Technology
                                    </h3>
                                    <span className="text-xs sm:text-sm text-navy-soft dark:text-baby-blue font-extralight">
                                        On-site
                                    </span>
                                    <ul className="list-disc font-mono text-xs sm:text-sm dark:text-blue">
                                        <li>
                                            Provided hardware and network
                                            troubleshooting support for faculty
                                            and staff
                                        </li>
                                        <li>
                                            Developed a dynamic tabulation and
                                            scoring system for school events and
                                            competitions, using Nuxt 4 and
                                            Strapi 5 CMS improving efficiency
                                            and accuracy of scoring.
                                        </li>
                                        <li>
                                            Set-up and managed audio and video
                                            equipment for school programs and
                                            activities
                                        </li>
                                        <li>
                                            Coordinated closely with staff and
                                            event organizers to ensure smooth
                                            technical operations
                                        </li>
                                        <li>
                                            Assisted in resolving technical
                                            issues quickly to minimize
                                            operational disruptions
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <div className="h-12 w-12 sm:h-16 sm:w-16 shrink-0 mt-1 sm:mt-2 mr-2 sm:mr-4 bg-blue dark:bg-navy rounded-full"></div>
                                {/* text container */}
                                <div>
                                    <span className="text-xs text-navy-soft dark:text-baby-blue italic font-extralight">
                                        Jan 2025 - Aug 2025
                                    </span>
                                    <h3 className="text-blue-strong dark:text-sky font-bold font-mono text-base sm:text-lg md:text-xl">
                                        Software Developer | Trendly Digital
                                        Solutions
                                    </h3>
                                    <span className="text-xs sm:text-sm text-navy-soft dark:text-baby-blue font-extralight">
                                        Remote
                                    </span>
                                    <ul className="list-disc font-mono text-xs sm:text-sm dark:text-blue">
                                        <li>
                                            Built and maintained full-stack web
                                            applications using Next.js 15 (App
                                            Router) integrated with AWS
                                            serverless backend services (Lambda,
                                            API Gateway, DynamoDB, S3), ensuring
                                            responsive, user-friendly
                                            experiences across desktop and
                                            mobile.
                                        </li>
                                        <li>
                                            Improved SEO and social
                                            integrations, resulting in a 200%
                                            increase in social traffic and 14%
                                            growth in organic search traffic in
                                            one quarter.
                                        </li>
                                        <li>
                                            Partnered with the marketing team to
                                            design and implement automation
                                            workflows in n8n, including an email
                                            outreach system and a lead-sourcing
                                            tool, significantly reducing manual
                                            client prospecting and streamlining
                                            lead generation.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'education' && (
                        <div className="flex flex-col gap-4 rounded-md px-4 sm:px-6 md:px-8 py-6 sm:py-8 bg-soft-cream text-blue-strong dark:bg-navy-soft dark:text-blue-strong">
                            <div className="flex gap-2">
                                <div className="h-12 w-12 sm:h-16 sm:w-16 shrink-0 mt-1 mr-2 sm:mr-4 bg-blue dark:bg-navy rounded-full"></div>
                                {/* text container */}
                                <div>
                                    <p className="text-xs text-navy-soft dark:text-baby-blue italic font-light">
                                        Jan 2025 - May 2027{' '}
                                        <span className="text-blue-strong dark:text-blue not-italic font-medium ml-1">
                                            (Expected)
                                        </span>
                                    </p>
                                    <h3 className="text-blue-strong dark:text-sky font-bold font-mono text-base sm:text-lg md:text-xl">
                                        St. Nicolas College of Business and
                                        Technology
                                    </h3>
                                    <span className="text-xs sm:text-sm text-blue-strong dark:text-blue">
                                        Bachelor of Science in Computer Science
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <div className="h-12 w-12 sm:h-16 sm:w-16 shrink-0 mt-1 mr-2 sm:mr-4 bg-blue dark:bg-navy rounded-full"></div>
                                {/* text container */}
                                <div>
                                    <p className="text-xs text-navy-soft dark:text-baby-blue italic font-light">
                                        Aug 2021 - May 2022
                                    </p>
                                    <h3 className="text-blue-strong dark:text-sky font-bold font-mono text-base sm:text-lg md:text-xl">
                                        University of Santo Tomas
                                    </h3>
                                    <span className="text-xs sm:text-sm text-blue-strong dark:text-blue">
                                        Bachelor of Science in Computer Science
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ExperienceEducationSection
