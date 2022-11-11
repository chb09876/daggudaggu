import React, { useState } from "react";
import { Image } from "react-konva";
import useImage from "use-image";

const StickerComponent = (props) => {
  const [id] = useImage(props.image);
  console.log(props.image);

  const [imageX, setImageX] = useState(50);
  const [imageY, setImageY] = useState(50);

  const handleImageDragEnd = (e) => {
    setImageX(e.target.x());
    setImageY(e.target.y());
  };

  return (
    <Image
      image={id}
      draggable
      x={imageX}
      y={imageY}
      width={100}
      height={150}
      onDragEnd={handleImageDragEnd}
    />
  );
};

export default StickerComponent;
