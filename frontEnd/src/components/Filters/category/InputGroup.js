import React from "react";

const InputGroup = ({ total, name , setId}) => {
  // console.log([...Array(total).keys()]);
  return (
    <div className="input-group mb-3">
      <label className="input-group-text text-success" for="inputGroupSelect01">
        Select Episodes
      </label>
      <select
      onChange={(e)=>setId(e.target.value)}
      className="form-select" id={name}>
        <option value="1" selected>Choose...</option>
        {[...Array(total).keys()].map((x) => {
         
          return  <option value={x + 1}> {name} - {x + 1} </option>;;
        })}
      </select>
    </div>
  );
};

export default InputGroup;
