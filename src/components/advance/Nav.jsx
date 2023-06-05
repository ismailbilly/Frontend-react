import {useContext} from 'react'
import { sakiContext } from '../../App';

const Nav = () => {
  const {username} = useContext(sakiContext)
  // const { username } = useContext(sakiContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        border: "2px solid red",
      }}
    >
      <h3>
        <a href="/">LOGO.</a>
      </h3>
      <ul
        style={{
          display: "flex",
          gap: ".5rem",
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <p>Hi, {username}</p>
    </div>
  );
}

export default Nav