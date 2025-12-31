"use client";
import { motion } from "motion/react";

export default function Streak({ stats }: any) {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center p-8 bg-gradient-to-b from-orange-900/20 to-black relative">

            {/* Fire Glow Behind */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/30 rounded-full blur-[80px]"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 text-center"
            >
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-6xl mb-4"
                >
                    🔥
                </motion.div>

                <h1 className="text-9xl font-black text-white tracking-tighter drop-shadow-2xl">
                    {stats.longestStreak}
                </h1>

                <h2 className="text-2xl font-bold text-orange-400 uppercase tracking-widest mt-2">
                    Day Streak
                </h2>

                <p className="mt-8 text-white/60 max-w-xs mx-auto text-lg leading-relaxed">
                    {stats.longestStreak > 10
                        ? "Unstoppable. You turned coding into a habit."
                        : "Consistency builds momentum."}
                </p>
            </motion.div>
        </div>
    );
}