import React from 'react';

function Jumbotron(props) {
  const { title } = props;

  return (
    <div className="jumbotron text-center mt-5">
      <h1 className="mt-5">{title}</h1>
    </div>
  );
}

export default Jumbotron;