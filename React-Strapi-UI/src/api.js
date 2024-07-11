import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('http://54.242.183.173:1337/api/items');
    return response.data.data; // Ensure this matches the structure of your API response
  } catch (error) {
    throw new Error('Error fetching data from Strapi');
  }
};

