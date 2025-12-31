"use client";
import { motion } from "motion/react";

export default function CommitRank({ stats }: any) {
    const isElite = stats.commitRank.includes("0.5") || stats.commitRank.includes("1%");

    const bgGradient = isElite
        ? "from-yellow-500/20 to-amber-900/20"
        : "from-blue-500/20 to-purple-900/20";

    const textColor = isElite
        ? "text-yellow-400"
        : "text-blue-400";

    return (
        <div className={`w-full h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br ${bgGradient} relative`}>
            {/* Ambient Noise Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 w-full max-w-sm"
            >
                <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center shadow-2xl">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 text-4xl"
                    >
                        {isElite ? "👑" : "⚡️"}
                    </motion.div>

                    <h2 className="text-zinc-400 text-sm uppercase tracking-widest font-bold mb-2">
                        Global Ranking
                    </h2>

                    <h1 className={`text-5xl font-black ${textColor} mb-4 leading-tight`}>
                        {stats.commitRank}
                    </h1>

                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mb-6">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }}
                            className={`h-full bg-current ${textColor}`}
                        />
                    </div>

                    <p className="text-white/80 font-medium">
                        {isElite
                            ? "You are carrying the open source community."
                            : "You're consistently shipping value."}
                    </p>
                </div>
            </motion.div>
        </div>
    );
}