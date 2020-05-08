import * as React from 'react';

export const Home = ({ name }) => {
  return (
    <div className="container rounded text-center">
      <h1>I'm {name}</h1>
    </div>
  );
};