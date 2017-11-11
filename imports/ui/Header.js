import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <div className ="header__logo">
          <img src="/CI_smallest.png" alt="medipixel CI"></img>
          <h2> {props.title}</h2>
        </div>
        <button className="button button--link-text" onClick={() => Accounts.logout()}>Logout</button>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
