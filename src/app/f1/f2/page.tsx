import Link from "next/link"
export default function F2() {
    return (
        <div>
            <h2>F2 page</h2>
            <ul>
                <li>
                    <Link href={"/f4"}>go to F4</Link>

                </li>
            </ul>
        </div>
    )
}