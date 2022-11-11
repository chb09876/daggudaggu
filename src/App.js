import { useEffect, useState } from "react";
import "./App.css";
import { Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stage, Layer } from "react-konva";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import useStickers from "./useStickers";

import {
  ButtonGroup,
  Button,
  ListGroup,
  ListGroupItem,
  Badge,
} from "reactstrap";
import StickerComponent from "./StickerComponent";

function App() {
  const [stickers, addCntSticker, subCntSticker] = useStickers();

  const [images, setImages] = useState([]);

  useEffect(() => {
    window.oncontextmenu = () => {
      return false;
    };
  });

  const submitHandler = async () => {
    const canvas = await html2canvas(document.body);
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, "download.png", "image/png");
  };

  return (
    <>
      <div
        style={{
          marginTop: "100px",
          marginLeft: "390px",
          marginRight: "390px",
        }}
      >
        <Row>
          <Col md={8}>
            <div
              style={{
                border: "0.5px solid",
                backgroundImage: `url("./images/background.png")`,
              }}
            >
              <Stage width={670} height={520}>
                <Layer>
                  {images.map(({ src, id, name }) => (
                    <StickerComponent
                      key={id}
                      imageId={id}
                      name={name}
                      image={src}
                      onDeleteSticker={(e, name) => {
                        console.log(e.target.id());
                        subCntSticker(name);
                        setImages((prev) =>
                          prev.filter((image) => image.id !== e.target.id())
                        );
                      }}
                    />
                  ))}
                </Layer>
              </Stage>
            </div>
          </Col>
          <Col md={4}>
            <div>
              <ListGroup>
                {stickers.map((sticker, index) => (
                  <ListGroupItem
                    key={index}
                    className="justify-content-between text-center"
                  >
                    <img alt={""} src={sticker.src} height={"30px"} />
                    <span style={{ fontSize: 10 }} className="mx-3">
                      {`${sticker.price}원`}
                    </span>
                    <Badge pill style={{ fontSize: 10 }} className="mx-3">
                      {sticker.cnt}
                    </Badge>
                  </ListGroupItem>
                ))}
                <ListGroupItem className="justify-content-between text-center">
                  <span style={{ fontSize: 15, fontWeight: "bold" }}>
                    {`${stickers.reduce((sum, sticker) => {
                      return sum + sticker.price * sticker.cnt;
                    }, 0)}원`}
                  </span>
                </ListGroupItem>
                <Button className="p-2" color="success" onClick={submitHandler}>
                  <strong>이미지로 저장</strong>
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
            {stickers.map((sticker, index) => (
              <Button
                style={{ backgroundColor: "#198754", border: "none" }}
                key={index}
                onClick={() => {
                  addCntSticker(sticker.name);
                  setImages((prev) => [
                    ...prev,
                    {
                      name: sticker.name,
                      id: `${sticker.name}${prev.length}`,
                      src: sticker.src,
                    },
                  ]);
                }}
              >
                <img src={sticker.src} height={"45px"} alt="" />
              </Button>
            ))}
          </ButtonGroup>
        </Row>
      </div>
    </>
  );
}

export default App;
