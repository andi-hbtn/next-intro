import { Card } from "@/components/card"
import Link from "next/link"

export default function Notifications() {
    return (
        <Card>
            <h4>Notifications </h4>
            <div>
                <Link href="/dashboard/archived">Archived</Link>
            </div>
        </Card>
    )
}