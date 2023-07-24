import { Component } from "react";
import { AppStyled } from "./App.styled";
import { Searchbar } from "components/Searchbar/Searchbar";
// import { SearchForm } from "components/SearchForm/SearchForm";
// import { ImageGallery } from "components/ImageGallery/ImageGallery";
// import { Modal } from "components/Modal/Modal";
// import { Button } from "components/Button/Button";
import { FetchMaterials } from "services/api";

 class App extends Component {

  handleSubmit = async (searchQuery) => {
    try {
      const res = await FetchMaterials(searchQuery, 1);
      // Handle the response data as needed
      console.log(res[0].id);
      console.log(res[0].webformatURL);
      console.log(res[0].largeImageURL);
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };
  
  render () {
    return (
      <AppStyled>
         <Searchbar handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        {/* <SearchForm />
        <ImageGallery photos={this.state.photos} />
        <Modal />
        <Button />  */}
      </AppStyled>
    );

  }

};

export default App;