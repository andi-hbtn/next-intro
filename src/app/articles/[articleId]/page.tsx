"use client"
import Link from "next/link";
import { use } from "react";

export default function NewsArticle({ params, searchParams }: {
    params: Promise<{ articleId: string }>
    searchParams: Promise<{ lang?: "en" | "es" | "fr" }>
}) {
    const { articleId } = use(params);
    const { lang = "en" } = use(searchParams);


    console.log("page");

    return (
        <div>
            <h1>News article {articleId}</h1>
            <p>Reading in {lang}</p>
            <div>
                <ul>
                    <li>
                        <Link href={`/articles/${articleId}?lang=en`}>Read in English</Link>
                    </li>
                    <li>
                        <Link href={`/articles/${articleId}?lang=fr`}>Read in French</Link>
                    </li>
                    <li>
                        <Link href={`/articles/${articleId}?lang=es`}>Read in Spanish</Link>
                    </li>
                </ul>
            </div>
        </div >
    )
}