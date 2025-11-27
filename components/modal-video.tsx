"use client";
import { useState, useRef } from "react";
import type { StaticImageData } from "next/image";

interface ModalVideoProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoStyle = {
    position: "absolute",
  };

  const paragraphStyle = {
    position: "absolute",
    alingeItem: "center",
  } as React.CSSProperties;

  return (
    <div>
      <div>
        <video
          ref={videoRef}
          width={videoWidth}
          height={videoHeight}
          playsInline
          autoPlay
          muted
          loop
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
