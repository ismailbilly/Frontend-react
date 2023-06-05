import React from 'react'
import Nav from './Nav'
import Page from './Page'


const Main = ({name}) => {
  return (
    <div style={{ border: "2px solid black" }}>
      <Nav name={name} />
      <Page />
    </div>
  );
}

export default Main