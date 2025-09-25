"use client"
import { usePathname } from "next/navigation";

export default function NotFound() {

    const pathName = usePathname();
    const phoneId = pathName.split("/")[2];
    const reviewId = pathName.split("/")[4];
    return (
        <>
            <p>Phone with id {phoneId} and reviewId {reviewId} was not found</p>
        </>
    )
}
