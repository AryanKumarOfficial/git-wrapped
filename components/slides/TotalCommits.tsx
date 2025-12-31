"use client";
import { motion } from "motion/react";

export default function TotalCommits({ stats }: any) {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-[#1a1a1a] to-black relative overflow-hidden">
            {/* Background elements */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none"
            />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center relative z-10"
            >
                <h2 className="text-2xl font-medium text-white/60 mb-8 uppercase tracking-widest">
                    You shipped code
                </h2>
                <div className="relative inline-block">
                    <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-emerald-700 tracking-tighter">
                        {stats.totalCommits}
                    </h1>
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                        className="absolute -top-4 -right-8 text-4xl"
                    >
                        🚀
                    </motion.span>
                </div>
                <p className="mt-8 text-xl text-white/40">
                    times this year
                </p>
            </motion.div>
        </div>
    );
}