"use client";
import { motion } from "motion/react";

export default function TotalCommits({ stats, onNext }: any) {
    return (
        <motion.section
            onClick={onNext}
            className="h-screen w-screen flex flex-col justify-center items-center cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h1 className="text-7xl font-extrabold">
                {stats.totalCommits}
            </h1>
            <p className="mt-4 text-xl opacity-70">
                Commits shipped this year
            </p>
        </motion.section>
    );
}
