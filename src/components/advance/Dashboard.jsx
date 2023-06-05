import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'

const Dashboard = ({ title, username }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 5fr",
        height: "100vh",
      }}
    >
      <Sidebar title={title} name={username} />
      <Main name={username} />
    </div>
  );
};

export default Dashboard