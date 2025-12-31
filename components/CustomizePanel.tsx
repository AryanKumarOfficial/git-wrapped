"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const ALL_SLIDES = [
    "totalCommits",
    "commitRank",
    "topLanguages",
    "longestStreak",
    "summary",
];

export default function CustomizePanel({ stats, onGenerate }: any) {
    const [slides, setSlides] = useState(ALL_SLIDES);
    const [theme, setTheme] = useState("neon");

    function toggleSlide(slide: string) {
        setSlides((prev) =>
            prev.includes(slide)
                ? prev.filter((s) => s !== slide)
                : [...prev, slide],
        );
    }

    return (
        <div className="mt-10 max-w-lg space-y-6">
            <h2 className="text-2xl font-semibold">Customize your Wrapped</h2>

            <div className="space-y-3">
                {ALL_SLIDES.map((slide) => (
                    <div key={slide} className="flex items-center gap-3">
                        <Checkbox
                            checked={slides.includes(slide)}
                            onCheckedChange={() => toggleSlide(slide)}
                        />
                        <span className="capitalize">{slide}</span>
                    </div>
                ))}
            </div>

            <Button
                className="w-full"
                onClick={() =>
                    onGenerate({
                        theme,
                        slides,
                    })
                }
            >
                Generate My Wrapped
            </Button>
        </div>
    );
}
