'use client'

import { useState } from 'react'

const ExperienceEducationSection = () => {
    const [activeTab, setActiveTab] = useState<'work' | 'education'>('work')

    return (
        <section className="py-10 w-full">
            <h2 className="mb-4 font-mono text-blue font-bold text-xl">
                // experience
            </h2>
            <div className="border-2 border-blue-strong rounded-md">
                {/* tab buttons */}
                <div className="flex mb-4 justify-between border-b-2 border-b-blue-strong">
                    <button
                        onClick={() => setActiveTab('work')}
                        className={`w-full px-3 py-1 border rounded-tl-sm ${
                            activeTab === 'work'
                                ? 'bg-blue text-white dark:bg-soft-blue dark:text-navy-soft'
                                : 'border-blue text-blue'
                        }`}
                    >
                        work
                    </button>

                    <button
                        onClick={() => setActiveTab('education')}
                        className={`w-full px-3 py-1 rounded-tr-sm border ${
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
                        <div className="px-8 py-8 bg-soft-cream text-blue-strong dark:bg-navy dark:text-blue-strong">
                            <div className="flex gap-2">
                                <div className="h-16 w-16 bg-blue-strong rounded-full"></div>
                                {/* text container */}
                                <div>
                                    <span>Sept 2025 - Ongoing</span>
                                    <h3>
                                        MIS Student Assistant | St. Nicolas
                                        College of Business and Technology
                                    </h3>
                                    <span>On-site</span>
                                    <ul>
                                        <li>
                                            Provided hardware and network
                                            troubleshooting support ofr facult
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
                        </div>
                    )}

                    {activeTab === 'education' && (
                        <div className="bg-soft-cream text-blue-strong dark:bg-navy dark:text-blue-strong">
                            education tab content
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ExperienceEducationSection
