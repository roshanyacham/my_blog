import Header from './components/Header';
import BlogList from './components/BlogList/BlogList';
import { posts } from './data/posts';
import './App.css';
import DarkModeToggle from './components/DarkModeToggle';


function App() {
  return (
    <div className="app">
      <DarkModeToggle />
      <Header />
      <main className="main-content">
        <BlogList posts={posts} />
      </main>
    </div>
  );
}

export default App;