import React from 'react'

const Delete = () => {
    function deletePost(){
        fetch("https://jsonplaceholder.typicode.com/posts/1", {
          method: "DELETE",
        });
    }
  return (
    <div>
        <button onClick={deletePost}>DELETE</button>
    </div>
  )
}

export default Delete