import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './header/header';
import { PostsList } from './top/postsList';
import { PostsDetail } from './detail/postsDetail';
import { ContactForm } from './form/contactForm';
import './destyle.css';

// Appコンポーネントを関数型コンポーネントとして型付け
export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostsDetail />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
};
