import axios from "axios";

const baseUrl = "/api/menu";

const getMenuItems = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch menu items:", error);
    return [];
  }
};

export default { getMenuItems };
