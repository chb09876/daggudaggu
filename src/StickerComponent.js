import React, { useState } from "react";
import { Image } from "react-konva";
import useImage from "use-image";

const StickerComponent = (props) => {
  const [id] = useImage(props.image);

  const [imageX, setImageX] = useState(50);
  const [imageY, setImageY] = useState(50);

  const handleImageDragEnd = (e) => {
    setImageX(e.target.x());
    setImageY(e.target.y());
  };

  return (
    <Image
      image={id}
      id={props.imageId}
      draggable
      x={imageX}
      y={imageY}
      width={45}
      height={45}
      onDragEnd={handleImageDragEnd}
      onClick={(e) => {
        props.onDeleteSticker(e, props.name);
      }}
    />
  );
};

export default StickerComponent;
