import axios from "axios";

// GET method
export const Get = async (url, options = {}) => {
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error in GET request:", error);
    throw error;
  }
};

// POST method
export const Post = async (url, data, options = {}) => {
  try {
    const response = await axios.post(url, data, options);
    return response.data;
  } catch (error) {
    console.error("Error in POST request:", error);
    throw error;
  }
};

// PUT method
export const Put = async (url, data, options = {}) => {
  try {
    const response = await axios.put(url, data, options);
    return response.data;
  } catch (error) {
    console.error("Error in PUT request:", error);
    throw error;
  }
};

// DELETE method
export const Delete = async (url, options = {}) => {
  try {
    const response = await axios.delete(url, options);
    return response.data;
  } catch (error) {
    console.error("Error in DELETE request:", error);
    throw error;
  }
};
