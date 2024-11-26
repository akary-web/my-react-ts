import React from 'react';
import { nav } from '../data/navList'; // navListの型定義が必要
import styles from './header.module.css';
import { Link } from 'react-router-dom';

// nav要素の型定義
interface NavItem {
  id: number;
  name: string; // ナビゲーションの表示名
  href: string; // リンク先のURL
}

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {nav.map((elem: NavItem) => (
        <Link to={elem.href} key={elem.id}>
          {elem.name}
        </Link>
      ))}
    </header>
  );
};
