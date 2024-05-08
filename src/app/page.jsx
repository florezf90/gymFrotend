import Image from "next/image";
import gymSquat from '../../public/gym_squat.jpg'
import { Container } from "react-bootstrap";
 
export default function Home() {
    return (
      <main className="bg-black">

          <Image src={gymSquat} alt="squat" className="w-100 h-90"   />
      </main>
    );
}