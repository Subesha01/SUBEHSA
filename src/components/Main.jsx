import React from "react";

const Main = () => {
  return (
    <div>
      <label for="name">Email Id: &emsp;</label>
      <input id="name" type="Email Id" placeholder="Email ID"></input>
      <br></br>
      <label for="na">Password: &emsp;</label>
      <input id="na" type="Password" placeholder="Password"></input>
      <br></br>
      <center>
        <button>Submit</button>
      </center>
    </div>
  );
};

export default Main;
