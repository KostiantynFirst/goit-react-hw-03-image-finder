import axios from "axios";
import { Component } from "react";
import { AppStyled } from "./App.styled";
import { Searchbar } from "components/Searchbar/Searchbar";
import { SearchForm } from "components/SearchForm/SearchForm";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Modal } from "components/Modal/Modal";
import { Button } from "components/Button/Button";


export class App extends Component {

  const API_KEY = '38387021-e8462f34030ce37ed84fa82f8';
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  
  
  async function fetchArticles(form, currentPage) {

    
    try {
      const res = await axios.get(`?q=cat&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
      // console.log(res.data.hits);
      const photos = res.data.hits;
      
      console.log(photos);
    } catch (error) {
      console.log(error)
    }
  }


  render () {
      <AppStyled>
        <Searchbar />
        <SearchForm />
        <ImageGallery />
        <Modal />
        <Button />
    </AppStyled>
  }

};
