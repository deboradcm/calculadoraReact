import {ButtunContainer} from "./styles";

function Button ({label, onClick}) {
    return (
      <ButtunContainer onClick={onClick} type = "button">
         {label}
      </ButtunContainer>
    );
  }
  
  export default Button;
  