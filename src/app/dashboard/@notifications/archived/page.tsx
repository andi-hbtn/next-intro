import { Card } from "@/components/card"
import Link from "next/link"

export default function ArchivedNotifications() {
    return (
        <Card>
            <h4>Notifications </h4>
            <div>
                <Link href="/dashboard">Default</Link>
            </div>
        </Card>
    )
}