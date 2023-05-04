import {InputContainern} from "./styles"; 


function Input ({value}) {
    return (
      <InputContainern>
        <input disabled value={value} />
      </InputContainern>
    );
  }
  
  export default Input;
  