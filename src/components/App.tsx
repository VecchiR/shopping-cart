import Header from './Header';
import Footer from './Footer';
import { ShopProvider } from '../context/ShopContext';
import AppRoutes from '../routes';
import '../index.css';

export default function App() {
  return (
      <ShopProvider>
          <Header />
          <AppRoutes />
          <Footer />
      </ShopProvider>
  );
}
