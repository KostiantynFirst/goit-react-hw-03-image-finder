import { Component } from "react"
import { SearchbarField, Header, Form, Button, Input, ButtonLabel} from "./Searchbar.styled"

export class Searchbar extends Component {

    state = {
        searchQuery: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchQuery);
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