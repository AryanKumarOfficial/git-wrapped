"use client";

import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import CustomizePanel from "@/components/CustomizePanel";
import {useRouter} from "next/navigation";
import type {WrappedConfig} from "@/types/wrapped";

export default function Home() {
    const [username, setUsername] = useState("");
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleFetch() {
        setLoading(true);
        const res = await fetch(`/api/stats?username=${username}`);
        const data = await res.json();
        setStats(data);
        setLoading(false);
    }

    return (
        <main className="min-h-screen bg-black text-white p-8">
            <h1 className="text-4xl font-bold mb-8">Git Wrapped</h1>

            {!stats && (
                <div className="flex gap-4 max-w-md">
                    <Input
                        placeholder="GitHub username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Button onClick={handleFetch} disabled={loading}>
                        {loading ? "Loading..." : "Generate"}
                    </Button>
                </div>
            )}

            {stats && (
                <CustomizePanel
                    stats={stats}
                    onGenerate={(config: WrappedConfig) => {
                        sessionStorage.setItem("wrappedConfig", JSON.stringify(config));
                        sessionStorage.setItem("wrappedStats", JSON.stringify(stats));
                        router.push("/wrapped");
                    }}
                />
            )}
        </main>
    );
}
