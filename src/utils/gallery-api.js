import axios from "axios";

export async function fetchingGalleryPage(userRequest, currentPage = 1) {
  const getConfig = {
    method: "get",
    url: "https://api.unsplash.com/search/photos",
    headers: {
      Authorization: "Client-ID f2G1Xa4JTBGFMXLmICWHFxse_TbYP5YFlxnMnI8nQdg",
    },
    params: {
      query: userRequest,
      page: currentPage,
      per_page: 20,
      orientation: "landscape",
    },
  };

  const response = await axios(getConfig);

  return response.data;
}
