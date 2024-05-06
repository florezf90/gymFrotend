import Link from "next/link"
import NavigationBtn from "../../components/navigationbtn";

export default function services () {
    return (
      <main>
        <h1>Services</h1>
        <p>This is the services page, info such as memeberships types, dedicated coaching offers, group classes schedule, etc. </p>
        <Link href={"/"}><NavigationBtn name="Home" /></Link>
      </main>
    );
}