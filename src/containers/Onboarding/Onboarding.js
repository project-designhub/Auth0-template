import React from 'react';

const Onborading = props => {
  return (
    <>
      <h1>Onborading</h1>
      <button onClick={props.auth.logout}>Logout</button>
    </>
  );
};

export default Onborading;
