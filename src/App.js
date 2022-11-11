import { useEffect } from "react";
import "./App.css";
import { Row, Col } from "reactstrap";
import { StickerCart } from "./StickerCart";
import TestCanvas from "./TestCanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import StickerBoard from "./StickerBoard";

function App() {
  useEffect(() => {
    window.oncontextmenu = () => {
      return false;
    };
  });

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
            <TestCanvas />
          </Col>
          <Col md={4}>
            <StickerCart />
          </Col>
        </Row>
        <Row
          className="text-center"
          style={{
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <StickerBoard />
        </Row>
      </div>
    </>
  );
}

export default App;
