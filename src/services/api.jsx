import axios from "axios";
const API_KEY = '38387021-e8462f34030ce37ed84fa82f8';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const FetchMaterials = async (form, currentPage) => {
    try {
        const res = await axios.get(`?q=${form}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
        // console.log(res.data.hits);
        const photos = res.data.hits;
        return photos;
  } catch (error) {
        console.log(error);
  }
}


