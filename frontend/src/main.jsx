import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import StudioPage from './pages/StudioPage/StudioPage.jsx';
import ContactPage from './pages/ContactPage/ContactPage.jsx';
import MediaPage from './pages/MediaPage/MediaPage.jsx';
import Article from './pages/ArticlePage.jsx/Article.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'about',
    element: <AboutPage />,
  },
  {
    path: 'studio',
    element: <StudioPage />,
  },
  {
    path: 'contacts',
    element: <ContactPage />,
  },
  {
    path: 'media',
    element: <MediaPage />,
  },
  {
    path: 'media/article/:id',
    element: <Article />,
  },
  {
    path: 'article/:id',
    element: <Article />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
