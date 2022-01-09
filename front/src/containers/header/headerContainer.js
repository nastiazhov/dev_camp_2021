import React from 'react';
import './headerContainer.css';

const Header = ({ currentPage }) => (
    <header>
        <button type="button" onClick={() => currentPage('articles')}> Articles </button>
        <button type="button" onClick={() => currentPage('addArticle')}> Add Article </button>
        <button type="button" onClick={() => currentPage('profile')}> Profile </button>
    </header>
);

export default Header;