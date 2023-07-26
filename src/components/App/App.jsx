import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Component } from "react";
import { AppStyled } from "./App.styled";
import { FetchMaterials } from "services/api";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
// import { Modal } from "components/Modal/Modal";
import { Button } from "components/Button/Button";


 class App extends Component {

  state = {
    searchQuery: '',
    images: [],
    page: 1,
    isLoading: false,
    isLastPage: false,
    status: "idle",
    };
    totalHits = null;

 
    handleSubmit = async (searchQuery) => {
    
      try {
        const { page } = this.state;
        const res = await FetchMaterials(searchQuery, page );
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
        <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
        <ImageGallery images={this.state.images} onImageClick={this.onImageClick} />
        {/* <Modal /> */}
        <Button onClick={() => this.handleSubmit()} />   
      </AppStyled>
    );

  };
  }




export default App;

