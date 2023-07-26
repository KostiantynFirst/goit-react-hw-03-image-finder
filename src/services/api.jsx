import axios from "axios";
import { toast } from "react-toastify";


const API_KEY = "38387021-e8462f34030ce37ed84fa82f8";
axios.defaults.baseURL = 'https://pixabay.com/api/';


export const FetchMaterials = async (searchQuery, page) => {
    try {
      const res = await axios.get(
        `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = res.data;
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