export default async function Docs({ params }: { params: Promise<{ slug: string[] }> }
) {
    const { slug } = await params;
    if (slug?.length === 2) {
        return (
            <div>
                <h4>Viewing docs for feature {slug[0]} and concept {slug[1]}</h4>
            </div>
        )
    } else if (slug?.length === 1) {
        return <h1>Viewing docs for feature {slug[0]}</h1>
    }
    return <h2>Docs page</h2>
}