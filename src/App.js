import { useEffect, useState } from "react";
import "./App.css";
import { Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";

import {
  ButtonGroup,
  Button,
  ListGroup,
  ListGroupItem,
  Badge,
} from "reactstrap";
import StickerComponent from "./StickerComponent";

function App() {
  const [image] = useImage();
  const [imageX, setImageX] = useState(50);
  const [imageY, setImageY] = useState(50);

  const [cntImgA, setCntImgA] = useState(0);
  const [cntImgB, setCntImgB] = useState(0);
  const [cntImgC, setCntImgC] = useState(0);

  const image1 = "./images/test1.png";
  const image2 = "./images/test2.png";
  const image3 = "./images/test3.png";

  const [images, setImages] = useState([]);

  const addTest1ImgHandler = () => {
    setCntImgA(cntImgA + 1);
    setImages([...images, image1]);
  };

  const addTest2ImgHandler = () => {
    setCntImgB(cntImgB + 1);
    setImages([...images, image2]);
  };

  const addTest3ImgHandler = () => {
    setCntImgC(cntImgC + 1);
    setImages([...images, image3]);
  };

  const submitHandler = () => {
    console.log(images);
  };

  useEffect(() => {}, [images]);

  return (
    <>
      <div
        style={{
          marginTop: "100px",
          marginLeft: "400px",
          marginRight: "400px",
        }}
      >
        <Row>
          <Col md={8}>
            <div style={{ border: "1px solid" }}>
              <Stage width={650} height={500}>
                <Layer>
                  {images.map((image) => (
                    <StickerComponent image={image} />
                  ))}
                </Layer>
              </Stage>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <ListGroup>
                <ListGroupItem className="justify-content-between text-center">
                  <img alt={""} src={"./images/test1.png"} height={"80px"} />
                  <span style={{ fontSize: 20 }} className="mx-3">
                    2000원
                  </span>
                  <Badge pill style={{ fontSize: 20 }} className="mx-3">
                    {cntImgA}
                  </Badge>
                </ListGroupItem>
                <ListGroupItem className="justify-content-between text-center">
                  <img alt={""} src={"./images/test2.png"} height={"80px"} />
                  <span style={{ fontSize: 20 }} className="mx-3">
                    1700원
                  </span>
                  <Badge pill style={{ fontSize: 20 }} className="mx-3">
                    {cntImgB}
                  </Badge>
                </ListGroupItem>
                <ListGroupItem className="justify-content-between text-center">
                  <img alt={""} src={"./images/test3.png"} height={"80px"} />
                  <span style={{ fontSize: 20 }} className="mx-3">
                    2200원
                  </span>
                  <Badge pill style={{ fontSize: 20 }} className="mx-3">
                    {cntImgC}
                  </Badge>
                </ListGroupItem>
                <ListGroupItem className="justify-content-between text-center">
                  <span style={{ fontSize: 30, fontWeight: "bold" }}>
                    총 {cntImgA * 2000 + cntImgB * 1700 + cntImgC * 2200}원
                  </span>
                </ListGroupItem>
                <Button className="p-3" color="primary" onClick={submitHandler}>
                  Click Me
                </Button>
              </ListGroup>
            </div>
          </Col>
        </Row>
        <Row
          className="text-center"
          style={{
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <ButtonGroup>
            <Button onClick={addTest1ImgHandler}>
              <img src={"./images/test1.png"} height={"50px"} alt="" />
            </Button>
            <Button onClick={addTest2ImgHandler}>
              <img src={"./images/test2.png"} height={"50px"} alt="" />
            </Button>
            <Button onClick={addTest3ImgHandler}>
              <img src={"./images/test3.png"} height={"50px"} alt="" />
            </Button>
          </ButtonGroup>
        </Row>
      </div>
    </>
  );
}

export default App;
