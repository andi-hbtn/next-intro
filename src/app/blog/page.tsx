import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Blog"
    }
}

export default async function Blog() {

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("This is a delay");
        }, 2000)
    });

    return <h1>Blog to Home page</h1>
}