"use client";
import { motion } from "motion/react";

export default function TotalCommits({ stats }: any) {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center p-8 bg-black relative overflow-hidden">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white/20 rounded-full"
                    style={{
                        // eslint-disable-next-line react-hooks/purity
                        width: Math.random() * 4 + 1 + "px",
                        // eslint-disable-next-line react-hooks/purity
                        height: Math.random() * 100 + 50 + "px",
                        // eslint-disable-next-line react-hooks/purity
                        left: Math.random() * 100 + "%",
                        // eslint-disable-next-line react-hooks/purity
                        top: Math.random() * 100 + "%",
                    }}
                    animate={{
                        y: [1000, -1000],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        // eslint-disable-next-line react-hooks/purity
                        duration: Math.random() * 2 + 1,
                        repeat: Infinity,
                        ease: "linear",
                        // eslint-disable-next-line react-hooks/purity
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "backOut" }}
                className="relative z-10 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl text-zinc-400 font-medium tracking-widest uppercase mb-4"
                >
                    2025 Impact
                </motion.div>

                <div className="relative inline-block">
                    <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 tracking-tighter">
                        {stats.totalCommits}
                    </h1>
                    {/* Decorative Elements around number */}
                    <motion.div
                        className="absolute -inset-4 border border-white/10 rounded-full blur-xl"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-6 text-xl text-zinc-500 font-medium"
                >
                    Commits Pushed
                </motion.p>
            </motion.div>
        </div>
    );
}