import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ gallery, onOpenModal }) => {
  return (
    <ul className={css.galleryList}>
      {gallery.map((item) => {
        return (
          <li className={css.galleryItem} key={item.id}>
            <ImageCard image={item} onOpenModal={onOpenModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
