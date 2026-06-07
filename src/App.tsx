import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Home } from "./pages/Home";
import { PortfolioProvider } from "./context/PortfolioContext";

function App() {
  return (
    <BrowserRouter>
      <PortfolioProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main>
            <Home />
          </main>

          <footer className="py-10 border-t border-white/10 text-center text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} Ananya Chaurasia</p>
          </footer>
        </div>
      </PortfolioProvider>
    </BrowserRouter>
  );
}

export default App;
