import css from "./ImageCard.module.css";

const ImageCard = ({ image, onOpenModal }) => {
  return (
    <>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onOpenModal(image)}
      />
    </>
  );
};

export default ImageCard;
