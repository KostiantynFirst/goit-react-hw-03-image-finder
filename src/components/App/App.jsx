// import { ToastContainer } from "react-toastify";
import { Component } from "react";
import { AppStyled } from "./App.styled";
import { Searchbar } from "components/Searchbar/Searchbar";
// import { SearchForm } from "components/SearchForm/SearchForm";
// import { ImageGallery } from "components/ImageGallery/ImageGallery";
// import { Modal } from "components/Modal/Modal";
// import { Button } from "components/Button/Button";
import { FetchMaterials } from "services/api";

 class App extends Component {

  state = {
    images: '',
  }

  handleSubmit = async (searchQuery) => {
    try {
      const API_KEY = "38387021-e8462f34030ce37ed84fa82f8";
      const page = 1;
      const res = await this.fetchMaterials(searchQuery, page, API_KEY);
      this.setState({ images: res });
    } catch (error) {
      console.log(error);
    }
  };

  fetchMaterials = async (searchQuery, page, apiKey) => {
    try {
      const res = await fetch(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await res.json();
      if (data.hits.length === 0) {
        throw new Error("No images found for this search query.");
      }
      return data.hits.map(({ id, tags, webformatURL, largeImageURL }) => ({
        id,
        tags,
        webformatURL,
        largeImageURL,
      }));
    } catch (error) {
      throw error;
    }
  };
  
  render () {
    return (
      <AppStyled>
         <Searchbar onSubmit={this.handleSubmit} />
        {/* <SearchForm />
        <ImageGallery photos={this.state.photos} />
        <Modal />
        <Button />  */}
        {/* <ToastContainer autoClose={3000} /> */}
      </AppStyled>
    );

  }

};

export default App;