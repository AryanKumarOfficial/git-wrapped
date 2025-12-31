"use client";

import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {useState} from "react";
import type {WrappedConfig, WrappedSlide} from "@/types/wrapped"

interface Props {
    stats: any;
    onGenerate: (config: WrappedConfig) => void;
}

const ALL_SLIDES: WrappedSlide[] = [
    "totalCommits",
    "commitRank",
    "topLanguages",
    "longestStreak",
    "summary",
];

export default function CustomizePanel({onGenerate}: Props) {
    const [slides, setSlides] = useState<WrappedSlide[]>(ALL_SLIDES);
    const [theme, setTheme] = useState<WrappedConfig["theme"]>("neon");

    function toggleSlide(slide: WrappedSlide) {
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
