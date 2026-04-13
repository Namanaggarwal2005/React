import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {
        userIsRegistered?<Form message={'Login'}/> : <Form message={'Register'}/> 
      }
    </div>
  );
}

export default App;
