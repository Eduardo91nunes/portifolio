import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import './styles/globals.css';

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
