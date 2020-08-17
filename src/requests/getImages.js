import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        const imageResults = response.data.collection.items;
        console.log(imageResults);
        const parsedImages = imageResults.filter(
          (e) => e.data[0].media_type === "image"
        );
        const images = parsedImages.map((image) => image.links[0].href);
        return images;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getImages;

// href: image address
// response.data.collection.items.href
// filter out only the photos, not videos
// .filter(response.data.collection.items.media_type = "image")
