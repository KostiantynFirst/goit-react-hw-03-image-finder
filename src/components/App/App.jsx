import { ToastContainer } from "react-toastify";
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
    photos: '',
  }

  handleFormSubmit = () => {
    this.setState({ photos });
  }
  
  render () {
    return (
      <AppStyled>
         <Searchbar />
        {/* <SearchForm />
        <ImageGallery photos={this.state.photos} />
        <Modal />
        <Button />  */}
        <ToastContainer autoClose={3000} />
      </AppStyled>
    );

  }

};

export default App;