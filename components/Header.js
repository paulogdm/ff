import React from 'react';

const Header = () => (
  <header>
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,700,900" rel="stylesheet" />
    <style jsx global>
      {`
        html {
          font-size: 15px;
          font-family: 'Poppins', sans-serif;
          font-weight: 100;
        }
      `}
    </style>
  </header>
);

export default Header;
