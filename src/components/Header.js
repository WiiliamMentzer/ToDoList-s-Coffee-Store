import React from 'react';
import carlImage from './../img/server-icon.png';

function Header(){
  return (
    <React.Fragment>
      <img src={carlImage} alt="CARL" />
      <h1>ToDo's Coffee House</h1>
    </React.Fragment>
  );
}

export default Header;