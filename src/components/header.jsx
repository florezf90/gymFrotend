import { Stack } from "react-bootstrap";
import { NavItem } from "react-bootstrap";
import Link from "next/link";
import NavigationBtn from "./navigationbtn";
export default function Navbar() {
  return (
    <Stack direction="horizontal" gap={3} className="p-3 bg-dark  ">
      <NavItem>
        <Link href="/">
          <NavigationBtn name="Home" />
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/about">
          <NavigationBtn name="About" />
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/services">
          <NavigationBtn name="services" />
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/contact">
          <NavigationBtn name="contact" />
        </Link>
      </NavItem>
      
    </Stack>
  );
}
