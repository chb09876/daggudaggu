import { ButtonGroup, Button } from "reactstrap";
import Test1 from "./images/test1.png";

const StickerBoard = () => {
  return (
    <ButtonGroup>
      <Button>
        <img src={Test1} height={"50px"} alt="" />
      </Button>
      <Button>
        <img src={Test1} height={"50px"} alt="" />
      </Button>
      <Button>
        <img src={Test1} height={"50px"} alt="" />
      </Button>
    </ButtonGroup>
  );
};

export default StickerBoard;
