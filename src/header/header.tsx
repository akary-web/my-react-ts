import React from 'react';
import { nav } from '../data/navList'; // navListの型定義が必要　
import styles from './header.module.css';
import { Link } from 'react-router-dom';

//Header コンポーネント内の NavItem 型定義は不要
//nav.ts からインポートしているから

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {nav.map((elem) => (  // elemの型定義は省略可能
        <Link to={elem.href} key={elem.id}>
          {elem.name}
        </Link>
      ))}
    </header>
  );
};
