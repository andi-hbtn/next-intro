export default async function PhoneId({ params }: { params: Promise<{ phoneId: string }> }) {

    const phoneId = (await params).phoneId;
    return (
        <h4>The phone with id {phoneId}</h4>
    )
}