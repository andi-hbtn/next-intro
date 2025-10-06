import Notifications from "./Notifications/page";
import UserAnalytics from "./UserAnalytics/page";
import RevenueMetrics from "./RevenueMetrics/page";

export default function ComplexDashboardLayout(
    { children }: { children: React.ReactNode }
) {
    return (
        <>
            <div>{children}</div>
            <UserAnalytics />
            <RevenueMetrics />
            <Notifications />
        </>
    )
}