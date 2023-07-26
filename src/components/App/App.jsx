import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Component } from "react";
import { AppStyled } from "./App.styled";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
// import { Modal } from "components/Modal/Modal";
import { Button } from "components/Button/Button";


 class App extends Component {

  state = {
    images: [],
    page: 1,
    isLoading: false,
    isLastPage: false,
    }

  handleSubmit = async (searchQuery) => {
    try {
      
      const { page } = this.state;
      const res = await this.fetchMaterials(searchQuery, page, API_KEY);
      this.setState(prevState => ({
        images: [...prevState.images, ...res],
        page: prevState.page + 1,
      })); 
     } catch (error) {
      console.log(error);
      toast.error("Error occurred while fetching images.");
    }
  };


  onImageClick = () => {
    console.log('click on image');
  };
  
  render () {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} onImageClick={this.onImageClick} />
        {/* <Modal /> */}
        <Button onClick={this.handleSubmit} />   
      </AppStyled>
    );

  };
  }




export default App;

