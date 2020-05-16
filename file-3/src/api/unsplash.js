import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID XK21xpI7l6Z8ko29C8ZJ-IMeWBjV6QBTdkS-HIpXVYQ",
  },
});
