"use client";
import { motion } from "motion/react";

export default function Summary({ stats }: any) {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center p-6 bg-[#050505] relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-sm aspect-[4/5] bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-between"
            >
                {/* Header */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-5 h-5 bg-black rounded-sm" />
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-lg">Git Wrapped</h3>
                        <p className="text-xs text-zinc-500 uppercase">2025 Edition</p>
                    </div>
                </div>

                {/* Main Stats Grid */}
                <div className="grid grid-cols-2 gap-4 my-6">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                        <p className="text-xs text-zinc-500 mb-1">Total Commits</p>
                        <p className="text-2xl font-bold text-white">{stats.totalCommits}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                        <p className="text-xs text-zinc-500 mb-1">Best Streak</p>
                        <p className="text-2xl font-bold text-white">{stats.longestStreak} days</p>
                    </div>
                    <div className="col-span-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-4 rounded-2xl border border-white/5">
                        <p className="text-xs text-purple-200 mb-1">Top Language</p>
                        <p className="text-3xl font-bold text-white">
                            {stats.topLanguages?.[0] || "Code"}
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center">
                    <div className="inline-block bg-white text-black text-xs font-bold px-4 py-2 rounded-full mb-4">
                        {stats.commitRank}
                    </div>
                    <p className="text-zinc-600 text-xs">
                        git-wrapped.com
                    </p>
                </div>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 text-zinc-500 text-sm"
            >
                Thanks for watching
            </motion.p>
        </div>
    );
}