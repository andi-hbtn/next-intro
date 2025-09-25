export default async function ProductDetail({ params }:{ params: Promise<{ productId: string }> }) {
    const productId = (await params).productId;
    return (
        <h4> Product Page with param {productId}</h4>
    )
}