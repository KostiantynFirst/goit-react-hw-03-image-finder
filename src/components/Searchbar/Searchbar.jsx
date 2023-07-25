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