"use client";
import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

const colorHeader = {
  backgroundColor: "black",
} as React.CSSProperties;

export default function Hero() {
  return (
    <section id="home" style={colorHeader}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative bg-dark mt-20 ">
        <div className="relative pb-10 md:pt-20 md:pb-16 bg-dark">
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
