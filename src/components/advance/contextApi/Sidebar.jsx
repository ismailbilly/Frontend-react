import { useContext } from "react";
import { sakiContext } from "../../../App";

const Sidebar = () => {
  const { username, title } = useContext(sakiContext);
  return (
    <div style={{ border: "2px solid black" }}>
      <p>Welcome {username}</p>
      <li>{title}</li>
    </div>
  );
};

export default Sidebar;
