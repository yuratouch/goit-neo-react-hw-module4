import style from "./ImageGallery.module.css";
import ImageCard from "/src/components/ImageCard/ImageCard";

function ImageGallery({ images, modalHandler }) {
  return (
    <ul className={style.imageGallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} modalHandler={modalHandler} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
