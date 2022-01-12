import React from 'react';
import './headerContainer.css';

export function Header({ currentPage }) {
    const COMPONENTS = {
        ARTICLES: 'articles',
        ADD_ARTICLE: 'addArticle',
        PROFILE: 'profile',
      };
    
    <header>
        <button type="button" onClick={() => currentPage(COMPONENTS.ARTICLES)}> Articles </button>
        <button type="button" onClick={() => currentPage(COMPONENTS.ADD_ARTICLE)}> Add Article </button>
        <button type="button" onClick={() => currentPage(COMPONENTS.PROFILE)}> Profile </button>
    </header>
}