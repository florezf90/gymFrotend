

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from '@florezf90gym/components/header';


export const metadata = {
    title: 'Florezf90 Gym',
    description: 'Florezf90 Gym landing page project',
};
export default function RootLayout({ children }) {
    return (
      <html lang="en" >
        <body style={{ backgroundColor: 'black'}}>
            <Container>
            <Header/>
            </Container>
            {children}
        </body>
      </html>
    );
}