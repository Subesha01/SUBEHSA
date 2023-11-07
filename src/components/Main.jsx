import React from "react";

const Main = () => {
  return (
    <div>
      <center>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8nBIecPcl0lYMn1PYRoUZPg7sdzQo_YPS-Q&usqp=CAU"></img>
        <br></br>
        <label for="name">Email Id: &emsp;</label>
        <input id="name" type="Email Id" placeholder="Email ID"></input>
        <br></br>
        <br></br>
        <label for="na">Password: &emsp;</label>
        <input id="na" type="Password" placeholder="Password"></input>
        <br></br>
        <br></br>
        <button>SUBMIT</button>
      </center>
    </div>
  );
};

export default Main;
