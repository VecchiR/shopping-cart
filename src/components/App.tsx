import { ThemeProvider } from 'styled-components';
import { Theme } from '../styles/Theme';
import GlobalStyle from '../styles/GlobalStyle';
import Header from './Header';
import Footer from './Footer';
import { ShopProvider } from '../context/ShopContext';
import AppRoutes from '../routes';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ShopProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </ShopProvider>
    </ThemeProvider>
  );
}
