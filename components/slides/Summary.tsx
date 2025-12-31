export default function Summary({ stats, onNext }: any) {
    const text =
        stats.longestStreak > 50
            ? "Consistency was your superpower."
            : "Every commit counted.";

    return (
        <div
            onClick={onNext}
            className="h-screen flex flex-col justify-center items-center text-center px-8"
        >
            <h1 className="text-4xl font-bold">{text}</h1>
        </div>
    );
}
