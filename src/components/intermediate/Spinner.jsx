import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";
const Spinner = () => {
    
  return (
    <div>
      <ClipLoader color="#d67036" loading={loading} size={150} />
    </div>
  );
};

export default Spinner;
