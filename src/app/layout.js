import './globals.css';
import { AppProvider } from '../app/context/AppContext';
import Navbar from '../components/commun/Navbar';
import Footer from '../components/commun/Footer';

export default function Layout({ children }) {
    return (
        <html lang="en">
            <body>
                <AppProvider>
                    <div className='container'>
                        <Navbar />
                        <main>{children}</main>
                        <Footer />
                    </div>
                </AppProvider>
            </body>
        </html>
    );
}