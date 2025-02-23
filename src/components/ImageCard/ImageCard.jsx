import style from "./ImageCard.module.css";

function ImageCard({ image, modalHandler }) {
  return (
    <div className={style.imageCard} onClick={() => modalHandler(image)}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageCard;
