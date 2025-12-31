"use client";
import { motion } from "motion/react";

const languagesColors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f7df1e",
    Python: "#3776ab",
    Go: "#00add8",
    Rust: "#dea584",
    HTML: "#e34c26",
    CSS: "#563d7c",
    default: "#888888"
};

export default function TopLanguages({ stats }: any) {
    const languages = stats.topLanguages || [];

    return (
        <div className="w-full h-full flex flex-col justify-center px-8 bg-[#0D1117] relative overflow-hidden">
            {/* Code Background Effect */}
            <div className="absolute right-[-20%] top-[-10%] opacity-5 text-9xl font-mono font-bold rotate-12 pointer-events-none select-none">
                {"</>"}
            </div>

            <motion.div className="relative z-10 space-y-8 max-w-lg mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl font-bold text-white mb-8"
                >
                    You spoke in <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                        {languages.length} languages
                    </span>
                </motion.h2>

                <div className="space-y-4">
                    {languages.map((lang: string, index: number) => (
                        <motion.div
                            key={lang}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (index * 0.15) }}
                            className="group flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors"
                        >
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg"
                                style={{
                                    backgroundColor: languagesColors[lang] || languagesColors.default,
                                    color: lang === 'JavaScript' ? 'black' : 'white'
                                }}
                            >
                                {lang.slice(0, 2).toUpperCase()}
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white">{lang}</h3>
                                <div className="text-xs text-white/40 font-mono">
                                    {index === 0 ? "Most Used" : index === 1 ? "Secondary" : "In the mix"}
                                </div>
                            </div>

                            <span className="text-2xl opacity-20 font-black">
                                #{index + 1}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}