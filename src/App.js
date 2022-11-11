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

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "70px" }}
      >
        <img alt="" width={"300px"} src="/images/daggu_logo.png" />
      </div>
      <div
        style={{
          marginTop: "25px",
          marginLeft: "390px",
          marginRight: "390px",
        }}
      >
        <Row>
          <div style={{ backGroundColor: "red", height: "30px" }} />
        </Row>
        <Row>
          <Col md={8}>
            <div
              style={{
                border: "0.5px solid",
                borderColor: "#198754",
                backgroundImage: `url("./images/background3.png")`,
                backgroundSize: "contain",
              }}
              className="capture"
            >
              <Stage width={750} height={520}>
                <Layer>
                  {images.map(({ src, id, name }) => (
                    <StickerComponent
                      key={id}
                      imageId={id}
                      name={name}
                      image={src}
                      onDeleteSticker={(e, name) => {
                        console.log(e.target.id());
                        if (e.evt.which === 3 || e.evt.button === 2) {
                          subCntSticker(name);
                          setImages((prev) =>
                            prev.filter((image) => image.id !== e.target.id())
                          );
                        }
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
                    <span style={{ fontSize: 20 }} className="mx-3">
                      {`${sticker.price}원`}
                    </span>
                    <Badge pill style={{ fontSize: 18 }} className="mx-3">
                      {sticker.cnt}
                    </Badge>
                  </ListGroupItem>
                ))}
                <ListGroupItem className="justify-content-between text-center">
                  <span style={{ fontSize: 25, fontWeight: "bold" }}>
                    {`${stickers.reduce((sum, sticker) => {
                      return sum + sticker.price * sticker.cnt;
                    }, 0)}원`}
                  </span>
                </ListGroupItem>
                <div style={{ display: "flex" }}>
                  <Button
                    color="success"
                    onClick={() => {
                      window.alert("공유 하셨습니다!");
                    }}
                  >
                    <img alt="" width={"26px"} src={"/images/share.svg"} />
                  </Button>
                  <Button
                    style={{ flex: 0.7 }}
                    color="success"
                    onClick={async () => {
                      const capturePart = document.querySelector(".capture");

                      const canvas = await html2canvas(capturePart);
                      const dataURL = canvas.toDataURL("image/png");
                      downloadjs(dataURL, "download.png", "image/png");
                      window.alert("저장완료!");
                    }}
                  >
                    <strong>이미지로 저장</strong>
                  </Button>
                  <Button
                    style={{
                      flex: 1,
                      backgroundColor: "#346aff",
                      borderColor: "#346aff",
                    }}
                    color="success"
                    onClick={() => {
                      window.alert("구매 하셨습니다!");
                    }}
                  >
                    <strong>구매 하기</strong>
                  </Button>
                </div>
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
                <img src={sticker.src} height={"80px"} alt="" />
              </Button>
            ))}
          </ButtonGroup>
        </Row>
      </div>
    </>
  );
}

export default App;
