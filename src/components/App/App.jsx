import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Component } from "react";
import { AppStyled } from "./App.styled";
import { FetchMaterials } from "services/api";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
// import { Modal } from "components/Modal/Modal";
import { Button } from "components/Button/Button";
import Spiner from "components/Loader/Loader";


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

    async componentDidUpdate(_, prevState) {
      const { page, searchQuery } = this.state;
      if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
        this.setState({ status: 'pending' });
  
        try {
          const imageData = await FetchMaterials(searchQuery, page);
          this.totalHits = imageData.total;
          const imagesHits = imageData.hits;
          if (!imagesHits.length) {
            toast.warning(
              'No results were found for your search, please try something else.',
              { transition: Zoom, position: 'top-center' }
            );
          }
          this.setState(({ images }) => ({
            images: [...images, ...imagesHits],
            status: 'resolved',
          }));
  
          if (page > 1) {
            const CARD_HEIGHT = 300; 
            window.scrollBy({
              top: CARD_HEIGHT * 2,
              behavior: 'smooth',
            });
          }
        } catch (error) {
          toast.error(`Sorry something went wrong. ${error.message}`);
          this.setState({ status: 'rejected' });
        }
      }
    }

 
    handleFormSubmit = searchQuery => {
      if (this.state.searchQuery === searchQuery) {
        return;
      }
      this.resetState();
      this.setState({ searchQuery });
    };

    // handleSelectedImage = (largeImageUrl, tags) => {
    //   this.setState({
    //     selectedImage: largeImageUrl,
    //     alt: tags,
    //   });
    // };
  
    resetState = () => {
      this.setState({
        searchQuery: '',
        page: 1,
        images: [],
        selectedImage: null,
        alt: null,
        status: 'idle',
      });
    };
  
    loadMore = () => {
      this.setState(prevState => ({
        page: prevState.page + 1,
      }));
    };

  onImageClick = () => {
    console.log('click on image');
  };
  
  render () {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
        {this.state.status === 'pending' && <Spiner />}
        <ImageGallery images={this.state.images} onImageClick={this.onImageClick} />
        {/* <Modal /> */}
        <Button onClick={this.loadMore}  />   
      </AppStyled>
    );

  };
  }




export default App;

