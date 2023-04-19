import React from 'react';

export const Header = (props) => {
  console.log(props.homeLink);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">{ props.homeLink }</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}