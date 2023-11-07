import React from "react";

const Main = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCIZp_0DgLBaYIiwnjI4BttEwyF1PGxFkAT7nib60NhkACieWNptls69KsJvW1gWyzgjU&usqp=CAU")',
      }}
    >
      <center>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8nBIecPcl0lYMn1PYRoUZPg7sdzQo_YPS-Q&usqp=CAU"></img>
        <br></br>
        <br></br>
        <label for="First Name">
          <b>First Name: </b>&emsp;
        </label>
        <input
          id="First Name"
          type="First Name"
          placeholder="First Name"
        ></input>
        <br></br>
        <br></br>
        <label for="Last Name">
          <b>Last Name:</b> &emsp;
        </label>
        <input id="name" type="Last Name" placeholder="Last Name"></input>
        <br></br>
        <br></br>
        <label for="name">
          <b>Email Id: </b>&emsp;
        </label>
        <input id="name" type="Email Id" placeholder="Email ID"></input>
        <br></br>
        <br></br>
        <label for="na">
          <b>Password:</b> &emsp;
        </label>
        <input id="na" type="Password" placeholder="Password"></input>
        <br></br>
        <br></br>
        <button style={{ backgroundColor: "green" }}>
          <b>SUBMIT</b>
        </button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </center>
    </div>
  );
};

export default Main;
