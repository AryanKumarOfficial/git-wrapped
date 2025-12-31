"use client";

import { useState } from "react";
import SlideRenderer from "@/components/SlideRenderer";

export default function WrappedPage() {
    const [stats] = useState<any>(() => {
        if (typeof window === "undefined") return null;
        const raw = sessionStorage.getItem("wrappedStats");
        return raw ? JSON.parse(raw) : null;
    });

    const [config] = useState<any>(() => {
        if (typeof window === "undefined") return null;
        const raw = sessionStorage.getItem("wrappedConfig");
        return raw ? JSON.parse(raw) : null;
    });

    const [index, setIndex] = useState(0);

    if (!stats || !config) return null;

    return (
        <main className="h-screen w-screen overflow-hidden bg-black text-white">
            <SlideRenderer
                slide={config.slides[index]}
                stats={stats}
                onNext={() =>
                    setIndex((i) => Math.min(i + 1, config.slides.length - 1))
                }
            />
        </main>
    );
}
