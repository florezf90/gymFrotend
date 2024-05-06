import Link from "next/link";
import NavigationBtn from "../../components/navigationbtn";

export default function Memberships() {
  return (
    <main>
      <h1 className="text-3xl font-bold mt-5">
        this page is gonna have content such as company info, trainers, type of
        gym we are, where we are located, group of tr trainers, and contact info
      </h1>
      <Link href="/"><NavigationBtn name="Home" /></Link>
    </main>
  );
}
