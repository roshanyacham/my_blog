import Header from './components/Header';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <div className="app">
      <DarkModeToggle />
      <Header />
      <main>
        <h2>Welcome to my blog!</h2>
        <p>This is my first React component with dark mode.</p>
      </main>
    </div>
  );
}

export default App;
