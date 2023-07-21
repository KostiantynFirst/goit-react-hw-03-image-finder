import axios from "axios";
import { Component } from "react";
import { AppStyled } from "./App.styled";
import { Searchbar } from "components/Searchbar/Searchbar";
import { SearchForm } from "components/SearchForm/SearchForm";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Modal } from "components/Modal/Modal";
import { Button } from "components/Button/Button";
import { FetchMaterials } from "services/api";

export class App extends Component {

  componentDidUpdate() {
     FetchMaterials('cat', 1)
  }

  render () {
    return (
      <AppStyled>
        <Searchbar />
        <SearchForm />
        <ImageGallery />
        <Modal />
        <Button />
      </AppStyled>
    )

  }

};
