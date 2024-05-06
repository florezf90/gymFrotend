import Link from 'next/link';
import NavigationBtn from '../components/navigationbtn';
 
export default function Home() {
    return (
      <main>
        <h1 className="text-3xl font-bold my-5">Homepage</h1>
        <Link href="/about"><NavigationBtn name="About" /></Link>
        <Link href="/services"><NavigationBtn name="services" /></Link>
        <Link href="/contact"><NavigationBtn name="contact" /></Link>
      </main>
    );
}