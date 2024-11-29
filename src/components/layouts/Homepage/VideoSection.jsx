import videoKv from "../../../assets/images/kv-video.mp4"

const VideoSection = () => {
  return (
    <>
      <video src={videoKv} muted autoPlay loop className="pointer-events-none"></video>
    </>
  )
}

export default VideoSection
