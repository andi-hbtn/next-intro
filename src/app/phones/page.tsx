import Link from "next/link";

export default function Phone() {
    return (
        <>
            <Link href="/">Home</Link>
            <h4>Phones page</h4>
            <ul>
                <li>
                    <Link href="phones/1">Phone 1</Link>
                </li>
                <li>
                    <Link href="phones/2">Phone 2</Link>
                </li>
                <li>
                    <Link href="phones/3" replace>Phone 3</Link>
                </li>
            </ul>
        </>
    )
}