import Link from 'next/link';
 
export default function Home() {
    return (
      <main>
        <h1 className="text-3xl font-bold underline">Homepage</h1>
        <Link href="/about">about</Link>
        <Link href="/services" style={{ marginLeft: "20px" }}>
          services
        </Link>
        <Link href="/contact" style={{ marginLeft: "20px" }}>
          contact
        </Link>
      </main>
    );
}