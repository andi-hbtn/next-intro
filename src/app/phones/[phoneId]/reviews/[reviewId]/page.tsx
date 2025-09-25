import { notFound } from "next/navigation";
export default async function ReviewId({ params }: { params: Promise<{ productId: string, reviewId: string }> }) {

    const { productId, reviewId } = await params;

    if (parseInt(reviewId) > 1000) {
        notFound();
    }

    return (
        <h4>Review with id {reviewId} for product {productId}</h4>
    )
}