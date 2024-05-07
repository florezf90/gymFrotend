

import { Inter } from 'next/font/google';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from '@florezf90gym/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Florezf90 Gym',
    description: 'Florezf90 Gym landing page project',
};
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={inter.className}>
          
          <Container>
            <Navbar />
            {children}
          </Container>
        </body>
      </html>
    );
}