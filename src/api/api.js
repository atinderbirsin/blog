import axios from "axios";

const get = async (url) => {
  const response = await axios.get(url);

  return response.data;
};

const functions =  {
    get,
}

export default functions;
