import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Nav = props => {

  return (
    <Menu>
      <Link to="/">
        Home
      </Link>
    </Menu>
  )

}

export default Nav;
