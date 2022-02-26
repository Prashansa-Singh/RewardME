import React from "react";

fetch('http://localhost:8080/', {
    mode: 'cors',
})
    .then(res => res.json())
    .then(data => console.log(data));


const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
