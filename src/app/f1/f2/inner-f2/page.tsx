import Link from "next/link"
export default function InnerF2() {
    return (
        <div>
            <h2>F2 page</h2>
            <ul>
                <li>
                    <Link href={"/f5"}>go to F5</Link>

                </li>
            </ul>
        </div>
    )
}