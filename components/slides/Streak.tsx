"use client";

import { motion } from "motion/react";

interface Props {
    stats: {
        longestStreak: number;
    };
    onNext: () => void;
}

export default function Streak({ stats, onNext }: Props) {
    const message =
        stats.longestStreak >= 60
            ? "You didn’t break the chain."
            : stats.longestStreak >= 30
                ? "Consistency was your strength."
                : "You kept showing up.";

    return (
        <motion.section
            onClick={onNext}
            className="h-screen w-screen flex flex-col justify-center items-center text-center px-8 cursor-pointer"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
      <span className="uppercase tracking-widest text-sm opacity-60 mb-4">
        Longest Streak
      </span>

            <h1 className="text-8xl font-extrabold leading-none">
                {stats.longestStreak}
            </h1>

            <p className="mt-4 text-2xl opacity-80">
                days in a row
            </p>

            <p className="mt-10 text-xl font-medium text-purple-300">
                {message}
            </p>

            <span className="absolute bottom-10 text-sm opacity-40">
        Tap to continue
      </span>
        </motion.section>
    );
}
