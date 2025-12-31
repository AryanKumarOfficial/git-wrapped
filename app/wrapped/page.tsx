"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import SlideRenderer from "@/components/SlideRenderer";
import { X } from "lucide-react";

const SLIDE_DURATION = 5000;

export default function WrappedPage() {
    const router = useRouter();
    const [data, setData] = useState<{ stats: any; config: any } | null>(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (data) return;
        if (typeof window === "undefined") return;

        const stats = sessionStorage.getItem("wrappedStats");
        const config = sessionStorage.getItem("wrappedConfig");

        if (!stats || !config) {
            router.push("/");
            return;
        }

        try {
            setData({
                stats: JSON.parse(stats),
                config: JSON.parse(config),
            });
        } catch (e) {
            console.error("Failed to parse wrapped data", e);
            router.push("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const goToNext = useCallback(() => {
        if (!data) return;
        if (currentSlideIndex < data.config.slides.length - 1) {
            setCurrentSlideIndex((prev) => prev + 1);
        } else {
            console.log("End of story");
        }
    }, [currentSlideIndex, data]);

    const goToPrev = useCallback(() => {
        if (currentSlideIndex > 0) {
            setCurrentSlideIndex((prev) => prev - 1);
        }
    }, [currentSlideIndex]);

    const handleTap = (e: React.MouseEvent | React.TouchEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === "BUTTON" || target.closest("button")) return;

        const screenWidth = window.innerWidth;
        const clientX = 'touches' in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX;

        if (clientX < screenWidth / 3) {
            goToPrev();
        } else {
            goToNext();
        }
    };

    useEffect(() => {
        if (!data || isPaused) return;
        const timer = setTimeout(goToNext, SLIDE_DURATION);
        return () => clearTimeout(timer);
    }, [currentSlideIndex, data, isPaused, goToNext]);


    if (!data) return null;

    return (
        <main className="fixed inset-0 bg-black overflow-hidden font-sans select-none">
            {/* Story Progress Bars */}
            <div className="absolute top-0 left-0 right-0 z-50 p-4 pt-6 flex gap-2 pointer-events-none">
                {data.config.slides.map((slide: string, index: number) => (
                    <div
                        key={index}
                        className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm"
                    >
                        <motion.div
                            className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                            initial={{ width: index < currentSlideIndex ? "100%" : "0%" }}
                            animate={{
                                width: index === currentSlideIndex
                                    ? "100%"
                                    : index < currentSlideIndex ? "100%" : "0%"
                            }}
                            transition={{
                                duration: index === currentSlideIndex ? SLIDE_DURATION / 1000 : 0,
                                ease: "linear"
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Close Button */}
            <button
                onClick={(e) => { e.stopPropagation(); router.push("/"); }}
                className="absolute top-8 right-4 z-50 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
                <X className="w-6 h-6" />
            </button>

            {/* Main Click/Tap Area */}
            <div
                className="relative z-0 w-full h-full flex items-center justify-center cursor-pointer"
                onMouseDown={() => setIsPaused(true)}
                onMouseUp={(e) => { setIsPaused(false); handleTap(e); }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlideIndex}
                        className="w-full h-full"
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <SlideRenderer
                            slide={data.config.slides[currentSlideIndex]}
                            stats={data.stats}
                            onNext={goToNext}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </main>
    );
}