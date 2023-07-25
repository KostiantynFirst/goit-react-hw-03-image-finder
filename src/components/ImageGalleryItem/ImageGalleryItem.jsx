import { ImageGalleryItemStyled, ImageGalleryItemImg } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ( {image, onImageClick} ) => {
  const onItemClick = () =>  {
    onImageClick(image)
  };

  return (
    <ImageGalleryItemStyled onClick={onItemClick}>
      <ImageGalleryItemImg src={image.webformatURL} alt={image.tags} />
    </ImageGalleryItemStyled>
  )
 }