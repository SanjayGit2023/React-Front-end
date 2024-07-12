import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('http://107.21.64.97:1337/api/items'); // Ensure 'http://'
    console.log(response.data); // Log the entire response
    return response.data.data; // Ensure this matches the structure of your API response
  } catch (error) {
    console.error('Error fetching data from Strapi', error);
    throw new Error('Error fetching data from Strapi');
  }
}

