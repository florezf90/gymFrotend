import Link from "next/link";

export default function Contact() {
    return (
        <main>
            <h1 className="text-3xl  ">Contact</h1>
            <p className="fs-1">This is the contact page, where we are going to provide a company email, phone number, address, social medial, and a form to contact us with a special request</p>
            <Link href="/">Home</Link>
        </main>
    );
}