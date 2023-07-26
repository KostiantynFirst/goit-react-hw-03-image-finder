import axios from "axios";


const API_KEY = "38387021-e8462f34030ce37ed84fa82f8";
axios.defaults.baseURL = 'https://pixabay.com/api/';


fetchMaterials = async (searchQuery, page, apiKey) => {
    try {
      const res = await fetch(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await res.json();
      if (data.hits.length === 0) {
        toast.error("No images found for this search query.");
      }
      return data.hits.map(({ id, tags, webformatURL, largeImageURL }) => ({
        id,
        tags,
        webformatURL,
        largeImageURL,
      }));
    } catch (error) {
      throw error;
    }
  };