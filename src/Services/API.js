import axios from 'axios';

 const apiKey = '40664862-84b34fcb53558e764c2f17e18';
const url = 'https://pixabay.com/api/';





export const fetchGalleryItems = async (searchQuery, pages, per_page) => {
  const { data } = await axios.get(
    `${url}?q=${searchQuery}&page=${pages}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${per_page}`
  );
  return data;
};