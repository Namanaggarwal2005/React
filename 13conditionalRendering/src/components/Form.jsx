import React from "react";

function Form({message}) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {message!=="Login"&&<input type="password" placeholder="Confirm Password" />}
      <button type="submit">{message}</button>
    </form>
  );
}

export default Form;
