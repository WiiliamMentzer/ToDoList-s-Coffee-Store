import React from 'react';
import ticketsImage from './../img/server-icon.png';

function Header(){
  return (
    <React.Fragment>
      <img src={ticketsImage} alt="CARL" />
      <h1>ToDo's Coffee House</h1>
    </React.Fragment>
  );
}

export default Header;