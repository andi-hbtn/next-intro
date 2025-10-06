import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1>Welcome to Home page</h1>

            <Link href="/blog"> Blog</Link>
            <Link href="/products"> Products</Link>
            <Link href="/phones"> Phones</Link>
            <div>
                <ul>
                    <li>
                        <Link href="/articles/breaking-news-123?lang=en">Read in enlgish</Link>
                    </li>
                    <li>
                        <Link href="/articles/breaking-news-123?lang=fr">Read in french</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}