import React from 'react';
import './style.css';

export default ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/640px-Netflix_2014_logo.svg.png" />
        </a>
      </div>

      <div className="header--user">
        <a href="/node_modules">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
        </a>
      </div>
    </header>
  )
}