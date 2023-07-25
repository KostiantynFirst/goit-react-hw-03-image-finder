import { Component } from "react"
import axios from "axios";
import { SearchbarField, Header, Form, Button, Input, ButtonLabel} from "./Searchbar.styled"
// import { FetchMaterials } from "services/api"
// import { toast } from "react-toastify/dist/components";

export class Searchbar extends Component {

    state = {
        searchQuery: '',
    }


    handleChange = e => {
        this.setState({ searchQuery: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { searchQuery } = this.state;
        if(searchQuery.trim() !== "") {
            this.props.onSubmit(searchQuery);
        }

        this.props.onSubmit(this.state.searchQuery)
    }

    fetchImg = async () => {
        const {searchQuery, page} = this.state 
        const API_KEY = '38387021-e8462f34030ce37ed84fa82f8';
        axios.defaults.baseURL = 'https://pixabay.com/api/';
        this.setState( {status: "prending"} )

        try {
            const res = await axios.get(`?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
            const photos = res.data.hits;
            
           if (photos.length === 0) {
            alert('There are no images for this request')
           } 

           const requests = photos.map(({id, tags, webformatURL, largeImageURL }) => ({id, tags, webformatURL, largeImageURL }));
           this.setState((prevState) => ({
            images: [...prevState.images, ...requests],
            page: prevState.page + 1
           }));

      } catch (error) {
            console.log(error);
      }
    }


    render () {
        return (
            <SearchbarField>
                <Header>
                    <Form onSubmit={this.handleSubmit}>
                        <Button>
                        <ButtonLabel>Search</ButtonLabel>
                        </Button>
    
                    <Input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.searchQuery}
                        onChange={this.handleChange}
                    />
                    </Form>
                </Header>
            </SearchbarField>
        )
    }

}