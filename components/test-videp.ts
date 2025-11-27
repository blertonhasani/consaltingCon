"use client";
import ReactPlayer from "react-player";
import type { StaticImageData } from "next/image";
import ReactTyped from "react-typed";
import { relative } from "path";

interface ModalVideoProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

// export default function ModalVideo({
//   thumb,
//   thumbWidth,
//   thumbHeight,
//   thumbAlt,
//   video,
//   videoWidth,
//   videoHeight,
// }: ModalVideoProps) {
//   return (
//     // <>
//     //   <ReactPlayer
//     //     key={1}
//     //     url={video}
//     //     width="100%"
//     //     height="100%"
//     //     playing={true}
//     //     muted={true}
//     //     controls={false}
//     //     loop={true}
//     //     autoPlay={true}
//     //   />
//     // </>
//   );
// }
