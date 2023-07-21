import { AppStyled } from "./App.styled";
import { Searchbar } from "components/Searchbar/Searchbar";
import { SearchForm } from "components/SearchForm/SearchForm";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Modal } from "components/Modal/Modal";
import { Button } from "components/Button/Button";


export const App = () => {
  return (
    <AppStyled>
      <Searchbar />
      <SearchForm />
      <ImageGallery />
      <Modal />
      <Button />
    </AppStyled>
  );
};
