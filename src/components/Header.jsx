import React from 'react';

function Header({titulo}) {
  const edad = 39;
  return (
    <h1>
      {titulo} {edad}
    </h1>
  );
}

export default Header;
