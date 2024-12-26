import Hero from './components/Hero';
import Navbar from './components/Navbar';
// import './App.css';

function App() {
  return (
    <main className="h-full">
      <header className="App-header">
        <Navbar/>
      </header>
      <Hero/>
    </main>
  );
}

export default App;
