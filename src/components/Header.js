import React from 'react';
import AppBar from '@material-ui/core/AppBar';

export function Header() {

  return (
    <AppBar position="static">
      <h1 className='navigation'>Trimmr</h1>
    </AppBar>
  );
}

export default Header;
