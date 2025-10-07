import Link from "next/link"
export default function F2() {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <Link href={"/f1/f2"}>F2</Link>
                    </li>
                    <li>
                        <Link href={"/f3"}>F3</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}