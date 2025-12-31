"use client";

import { motion } from "motion/react";

interface Props {
    stats: {
        commitRank: string;
        totalCommits: number;
    };
    onNext: () => void;
}

export default function CommitRank({ stats, onNext }: Props) {
    const hypeLine =
        stats.commitRank.includes("0.5")
            ? "You’re operating at elite levels."
            : stats.commitRank.includes("1%-3%")
                ? "You’re among the most active developers."
                : stats.commitRank.includes("5%-10%")
                    ? "You’re well above average."
                    : "You showed up — and that matters.";

    return (
        <motion.section
            onClick={onNext}
            className="h-screen w-screen flex flex-col justify-center items-center text-center px-8 cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
      <span className="uppercase tracking-widest text-sm opacity-60 mb-4">
        Your Commit Rank
      </span>

            <h1 className="text-6xl md:text-7xl font-extrabold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stats.commitRank}
            </h1>

            <p className="mt-6 text-xl opacity-80">
                with {stats.totalCommits.toLocaleString()} commits
            </p>

            <p className="mt-10 text-xl font-medium text-pink-300 max-w-xl">
                {hypeLine}
            </p>

            <span className="absolute bottom-10 text-sm opacity-40">
        Tap to continue
      </span>
        </motion.section>
    );
}
