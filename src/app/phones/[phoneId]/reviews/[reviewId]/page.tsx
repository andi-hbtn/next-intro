import { notFound, redirect } from "next/navigation";

function getRandonmNumber(count: number) {
    return Math.floor(Math.random() * count);
}

export default async function ReviewId({ params }: { params: Promise<{ productId: string, reviewId: string }> }) {

    if (getRandonmNumber(2) === 1) {
        throw new Error("error loading review");
    }

    const { productId, reviewId } = await params;

    if (parseInt(reviewId) > 1000) {
        //notFound();
        redirect("/phones");
    }

    return (
        <h4>Review with id {reviewId} for product {productId}</h4>
    )
}