import Link from "next/link"

export default function services () {
    return (
      <main>
        <h1>Services</h1>
        <p>This is the services page, info such as memeberships types, dedicated coaching offers, group classes schedule, etc. </p>
        <Link href={"/"} className="fs-1">Home</Link>
      </main>
    );
}