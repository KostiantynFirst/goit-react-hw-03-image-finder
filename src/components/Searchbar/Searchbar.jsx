import { SearchbarField } from "./Searchbar.styled"

export const Searchbar = () => {
    return (
        <SearchbarField>
            <header class="searchbar">
                <form class="form">
                    <button type="submit" class="button">
                    <span class="button-label">Search</span>
                    </button>

                    <input
                    class="input"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
                
        </SearchbarField>
    )

}