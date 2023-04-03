import axios from 'axios';

//axios for fetching data
//unsplash API fetch requirements per https://unsplash.com/documentation#search-photos
const searchImages = async term => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    // headers: {
    //   Authorization: 'Client-ID uS5CZMK_yuR9w_fc4bExagb7sqTWWE_2wemFacR7yHQ',
    // },
    params: {
      query: term,
    },
  });

  console.log(response);
  return response.data.results; //return array of data from the response
};

export default searchImages;
