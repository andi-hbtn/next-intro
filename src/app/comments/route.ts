import { NextRequest } from "next/server";
import { comments } from "./data";
import { headers, cookies } from "next/headers";
// export async function GET() {
//     return Response.json(comments);
// }

export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: comment.text
    }

    comments.push(newComment);
    return new Response(
        JSON.stringify(newComment),
        {
            headers: { "Content-Type": "application/json" },
            status: 201
        }
    )
}

t
// export async function GET(request: NextRequest) {
//     const searchParams = request.nextUrl.searchParams;
//     const query = searchParams.get("query");
//     const result = query ? comments.filter((comment) => comment.text.includes(query)) : comments
//     return new Response(
//         JSON.stringify(result),
//         {
//             headers: { "Content-Type": "application/json" },
//             status: 201
//         }
//     )
// }


export async function GET(request: NextRequest) {
    // const requestHeaders = new Headers(request.headers);
    // console.log("requestHeaders--", requestHeaders.get("Authorization"));

    // const headerList = await headers();
    // console.log("headerList---", headerList.get("Authorization"));


    const cookieStore = await cookies();
    cookieStore.set("resultsPerPare", "20");


    return new Response(
        "<h1> Hello </h1>",
        {
            // headers: { "Content-Type": "text/html" }
            headers: { "Content-Type": "application/json" }
        }
    );

}