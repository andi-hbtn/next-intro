import { Metadata } from "next";

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const id = (await params).phoneId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iphone ${id}`);
        }, 100);
    });
    return {
        title: `Phone ${id} with title ${title}`
    }
}

type Props = { params: Promise<{ phoneId: string }> }

export default async function PhoneId({ params }: Props) {

    const phoneId = (await params).phoneId;
    return (
        <h4>The phone with id {phoneId}</h4>
    )
}