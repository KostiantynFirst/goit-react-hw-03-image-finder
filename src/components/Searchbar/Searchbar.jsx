import { SearchbarField, Header, Form, Button, Input, ButtonLabel} from "./Searchbar.styled"

export const Searchbar = () => {
    return (
        <SearchbarField>
            <Header>
                <Form>
                    <Button>
                    <ButtonLabel>Search</ButtonLabel>
                    </Button>

                    <Input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </Form>
            </Header>
                
        </SearchbarField>
    )

}