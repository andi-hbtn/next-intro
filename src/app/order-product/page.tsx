"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {

    const router = useRouter();

    const handleClick = () => {
        console.log("place order here");
        router.push("/");
    }

    return (
        <>
            <h1>Welcome to Order Product</h1>
            <button onClick={handleClick}>Place order</button>
        </>
    )
}