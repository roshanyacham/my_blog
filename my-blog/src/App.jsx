import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";


// Lazy load route components
const Home = lazy(() => import('./pages/home'));
const BlogList = lazy(() => import('./pages/BlogList'));
const PostDetail = lazy(() => import('./pages/PostDetail'));
const Editor = lazy(() => import('./pages/Editor'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<BlogList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;