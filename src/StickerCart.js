import Test1 from "./images/test1.png";
import { ListGroup, ListGroupItem, Badge, Button } from "reactstrap";

const StickerCart = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem className="justify-content-between text-center">
          <img alt={""} src={Test1} height={"80px"} />
          <span style={{ fontSize: 20 }} className="mx-3">
            2000원
          </span>
          <Badge pill style={{ fontSize: 20 }} className="mx-3">
            14
          </Badge>
        </ListGroupItem>
        <ListGroupItem className="justify-content-between text-center">
          <span style={{ fontSize: 30, fontWeight: "bold" }}>총 2000원</span>
        </ListGroupItem>
        <Button className="p-3" color="primary">
          Click Me
        </Button>
      </ListGroup>
    </div>
  );
};

export { StickerCart };
