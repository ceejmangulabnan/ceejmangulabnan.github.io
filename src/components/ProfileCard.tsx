import { motion } from 'motion/react'
import { Gamepad2, MapPin, Mail, Download } from 'lucide-react'

interface ProfileCardProps {
    onHover: (isHovered: boolean) => void
}

export function ProfileCard({ onHover }: ProfileCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onHoverStart={() => onHover(true)}
            onHoverEnd={() => onHover(false)}
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 hover:border-[#ff6b35] transition-all"
        >
            {/* Profile Image */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-32 h-32 mx-auto mb-4 rounded-full bg-linear-to-br from-[#ff6b35] to-[#ff8555] p-1"
            >
                <div className="w-full h-full rounded-full bg-[#2a2a2a] flex items-center justify-center">
                    <Gamepad2 className="w-16 h-16 text-[#ff6b35]" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-400 text-[#0a0a0a] px-3 py-1 rounded-full text-xs">
                    Online
                </div>
            </motion.div>

            {/* Name & Title */}
            <div className="text-center mb-6">
                <h1 className="text-2xl mb-1 text-[#f5f5f5] italic">
                    Cheljee{' '}
                    <span className="rotate-5 text-[#ff6b35] font-bold not-italic pl-1">
                        (Ceej)
                    </span>{' '}
                    Mangulabnan
                </h1>
                <p className="text-[#ff6b35] mb-2">Full Stack Developer</p>
                <div className="flex items-center justify-center gap-2 text-sm text-[#9a9a9a]">
                    <MapPin className="w-3 h-3" />
                    <span>San Fernando, Pampanga, PH</span>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mb-6 p-4 bg-[#0a0a0a] rounded-lg border border-[#2a2a2a]">
                <div className="text-center">
                    <div className="text-xl text-[#ff6b35]">N</div>
                    <div className="text-xs text-[#9a9a9a]">Years</div>
                </div>
                <div className="text-center border-l border-r border-[#2a2a2a]">
                    <div className="text-xl text-[#ff6b35]">N</div>
                    <div className="text-xs text-[#9a9a9a]">Projects</div>
                </div>
                <div className="text-center">
                    <div className="text-xl text-[#ff6b35]">100%</div>
                    <div className="text-xs text-[#9a9a9a]">Passion</div>
                </div>
            </div>

            {/* Quick Bio */}
            <p className="text-sm text-[#9a9a9a] leading-relaxed mb-6">
                Passionate developer who loves building innovative solutions.
                Gamer at heart, coder by profession. Always ready for the next
                challenge.
            </p>

            {/* CTA Buttons */}
            <div className="space-y-2">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#ff6b35] text-[#0a0a0a] py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#ff8555] transition-colors"
                >
                    <Mail className="w-4 h-4" />
                    Contact Me
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full border border-[#2a2a2a] text-[#f5f5f5] py-3 rounded-lg flex items-center justify-center gap-2 hover:border-[#ff6b35] hover:text-[#ff6b35] transition-colors"
                >
                    <Download className="w-4 h-4" />
                    Resume
                </motion.button>
            </div>
        </motion.div>
    )
}
