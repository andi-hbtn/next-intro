"use client"
import { useRouter } from "next/navigation";
import { start } from "node:repl";
import { startTransition } from "react";

//ky komponent e merr error obj si props
// errori vjen nga page.tsx kur bejme throw brenda ne komponent throw new Error("error loading review");
export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {


    const router = useRouter();

    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        });
    }
    return (
        <div>
            <div>{error.message}</div>
            <button onClick={reload}>refresh</button>
        </div>
    )
}