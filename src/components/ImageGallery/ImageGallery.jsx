import { ImageGalleryStyled } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images, onImageClick}) => {
    return (
        <ImageGalleryStyled>
            {images.map(image => (
                <ImageGalleryItem 
                    key={image.id}
                    image={image}
                    onImageClick={onImageClick}
                />
                
                
            ))}
        </ImageGalleryStyled>
    )
}