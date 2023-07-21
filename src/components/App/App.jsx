import { Component } from "react";
import { AppStyled } from "./App.styled";
// import { Searchbar } from "components/Searchbar/Searchbar";
// import { SearchForm } from "components/SearchForm/SearchForm";
// import { ImageGallery } from "components/ImageGallery/ImageGallery";
// import { Modal } from "components/Modal/Modal";
// import { Button } from "components/Button/Button";
import { FetchMaterials } from "services/api";

 class App extends Component {

  state = {
    photos: [],
  };

  async componentDidMount() {
      try {
        const res = await FetchMaterials('cat', 1);
        this.setState({ photos: res.data.hits });
      } catch (error) {
        console.log(error);
}
  }

  render () {
    return (
      <AppStyled>
        {/* <Searchbar />
        <SearchForm />
        <ImageGallery photos={this.state.photos} />
        <Modal />
        <Button /> */}
      </AppStyled>
    );

  }

};

export default App;