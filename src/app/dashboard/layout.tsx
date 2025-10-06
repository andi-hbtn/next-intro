export default function ComplexDashboardLayout(
    {
        children,
        user,
        notifications,
        revenueMetrics,
        login
    }: {
        children: React.ReactNode,
        user: React.ReactNode,
        notifications: React.ReactNode,
        revenueMetrics: React.ReactNode,
        login: React.ReactNode,
    }
) {
    const isLoggedIn = false;
    return (
        isLoggedIn ?
            <>
                <div>{children}</div>
                <div>{user}</div>
                <div>{notifications}</div>
                <div>{revenueMetrics}</div>
            </>
            : login
    )
}