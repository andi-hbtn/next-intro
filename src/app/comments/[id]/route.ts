import { comments } from "../../comments/data";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;

    const comment = comments.find((coment, index) => coment.id === parseInt(id));

    return new Response(
        JSON.stringify(comment),
        {
            headers: { "Content-Type": "application/json" },
            status: 201
        }
    );
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    const body = await request.json();

    const index = comments.findIndex((index) => index.id === parseInt(id));
    comments[index].text = body.text

    return new Response(
        JSON.stringify(comments[index])
    )
}


export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const id = await params;

    const index = comments.findIndex((index) => index.id);
    const deletedComment = comments[index];
    comments.splice(index, 1);

    return new Response(JSON.stringify(deletedComment))
}