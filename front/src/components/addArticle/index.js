import React from 'react';
import './addArticle.css';

export function AddArticle() {
    return (
        <div className="addArticleContainer">
            <p>Enter the text of the article: </p>
            <textarea cols="60" rows="5" /><br></br>
            <p>Select a file: </p>
            <input type="file" id="myfile" name="myfile"></input><br></br>
            <button type="button"> Add article </button>
      </div>
    );
  }