import React, { useState } from "react";
import { Stage, Layer, Image } from "react-konva";
import useImage from "use-image";
import Test1 from "./images/test1.png";
import Test2 from "./images/test2.png";
import Test3 from "./images/test3.png";

const Canvas = () => {
  const [image] = useImage(Test1);
  const [imageX, setImageX] = useState(50);
  const [imageY, setImageY] = useState(50);

  const handleImageDragEnd = (e) => {
    setImageX(e.target.x());
    setImageY(e.target.y());
  };
  return (
    <div style={{ border: "1px solid" }}>
      <Stage width={650} height={500}>
        <Layer>
          <Image
            image={image}
            draggable
            x={imageX}
            y={imageY}
            width={100}
            height={150}
            onDragEnd={handleImageDragEnd}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
