import React from "react";
import "./video.css";
import { BsFillPlayFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import Counter from "../Counter/Counter";

const VideoContent = () => {
  const showPopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.add("popupActive");
  };
  const closePopup = () => {
    const popup = document.getElementById("popup");
    const video = document.getElementById("mainYoutubeVideo");
    popup.classList.remove("popupActive");
    video.contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
  };
  return (
    <>
      <div className="commonSection videoContent">
        <div className="container">
          <div className="videoIcon" onClick={() => showPopup()}>
            <div className="colorWhite flex playIcon">
              <BsFillPlayFill />
            </div>
          </div>

          <div className="content textAlignCenter">
            <h3 className="colorWhite">
              ARE YOU READY TO TRAVEL? REMEMBER US !!
            </h3>
            <p className="colorWhite">
              Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
              nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
              tenetur, aptent.
            </p>
            <div className="buttons flex justifyContentCenter">
              <button className="globalBtn">LEARN MORE</button>
              <button className="globalBorderBtn">BOOK NOW</button>
            </div>
          </div>
          <Counter />
        </div>
        <div
          className="popup flex justifyContentCenter alignItemCenter"
          id="popup"
        >
          <iframe
            id="mainYoutubeVideo"
            className="popupVideo"
            src="https://www.youtube.com/embed/PzGoCfFCgdw?enablejsapi=1&version=3&playerapiid=ytplayer"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="close colorWhite" onClick={() => closePopup()}>
            <AiFillCloseCircle />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoContent;
