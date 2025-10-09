export const dynamic = "force-static";
export async function GET(request: Request) {
    return Response.json({ time: new Date().toLocaleTimeString() });
}