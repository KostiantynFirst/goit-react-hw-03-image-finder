import { Component } from "react"
import { SearchbarField, Header, Form, Button, Input, ButtonLabel} from "./Searchbar.styled"

export class Searchbar extends Component {


    state = {
        searchQuery: '',
        errorL: null,
        status: idle,
    }

    componentDidUpdate = (prevProps, prevState) => {
        const prevName = prevProps.imageName
        const nextName = this.props.imageName
        if(prevName !== nextName) {
            'imageName changed'
            this.setState({ status: 'pending' })
        }
    }

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