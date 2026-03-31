import Calender from "./components/Calender";
import Card from "./components/Card";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Background blobs for premium aesthetic */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      {/* Exercise Five */}
      <Header />

      <main className="hero-section">
        {/* Exercise Two */}
        <h1 className="hero-title">Hello World</h1>
        <p className="hero-subtitle">Exploring the power of React and Next-Gen Design</p>
      </main>

      <section className="card-section">
        {/* Exercise Three */}
        <Card />
      </section>

      <footer className="footer-section">
        {/* Exercise Four */}
        <Calender />
      </footer>
    </div>
  );
}

export default App;