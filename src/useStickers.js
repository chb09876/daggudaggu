import { useState } from "react";

const images = [
  { name: "test1", src: "/images/test1.png", price: 1100, cnt: 0 },
  { name: "test2", src: "/images/test2.png", price: 1500, cnt: 0 },
  { name: "test3", src: "/images/test3.png", price: 1200, cnt: 0 },
  { name: "test4", src: "/images/test11.png", price: 1000, cnt: 0 },
  { name: "test5", src: "/images/test12.png", price: 1000, cnt: 0 },
  { name: "test6", src: "/images/test13.png", price: 1100, cnt: 0 },
  { name: "test7", src: "/images/test7.png", price: 1600, cnt: 0 },
  { name: "test8", src: "/images/test16.png", price: 1400, cnt: 0 },
  { name: "test9", src: "/images/test9.png", price: 1300, cnt: 0 },
  { name: "test10", src: "/images/test10.png", price: 1200, cnt: 0 },
];

const useStickers = () => {
  const [stickers, setStickers] = useState(images);
  const addCntSticker = (name) => {
    setStickers((prev) =>
      prev.map((sticker) => {
        if (sticker.name === name) return { ...sticker, cnt: sticker.cnt + 1 };
        else return sticker;
      })
    );
  };

  const subCntSticker = (name) => {
    setStickers((prev) =>
      prev.map((sticker) => {
        if (sticker.name === name) return { ...sticker, cnt: sticker.cnt - 1 };
        else return sticker;
      })
    );
  };

  return [stickers, addCntSticker, subCntSticker];
};

export default useStickers;
