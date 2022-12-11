import React from "react";
import "./gallery.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import gallery from "../../Assets/Image/gallery.jpg";
import gallery_2 from "../../Assets/Image/gallery_2.jpg";

const PhotoGallery = () => {
  const sectionHeading = {
    topText: "PHOTO GALLERY",
    heading: "PHOTO'S FROM TRAVELLERS",
    description:
      "Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.",
  };
  return (
    <>
      <div className="gallery commonSection">
        <div className="container">
          <SectionHeading options={sectionHeading} />

          <div className="photos flex justifyContentBetween">
            <div className="row flex flexDirCol justifyContentBetween">
              <figure>
                <img src={gallery} alt="GalleryImage" />
              </figure>
              <figure>
                <img src={gallery} alt="GalleryImage" />
              </figure>
            </div>
            <div className="row">
              <figure>
                <img src={gallery_2} alt="GalleryImage" />
              </figure>
            </div>
            <div className="row flex flexDirCol justifyContentBetween">
              <figure>
                <img src={gallery} alt="GalleryImage" />
              </figure>
              <figure>
                <img src={gallery} alt="GalleryImage" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
