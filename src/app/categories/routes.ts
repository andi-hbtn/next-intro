export const dynamic = "force-static";

export async function GET(request: Request) {
    const categories = [
        { id: 1, name: "Electronics" },
        { id: 2, name: "Electronics" },
        { id: 3, name: "Clothing" }
    ]
    return Response.json(categories);
}