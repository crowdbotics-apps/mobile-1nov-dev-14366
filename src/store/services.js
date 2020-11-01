import axios from "axios"
import {
  NEW_CONNECTOR_788_USERNAME,
  NEW_CONNECTOR_788_PASSWORD
} from "react-native-dotenv"
const newConnector = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/14366/storyboard/13633/",
  auth: {
    username: NEW_CONNECTOR_788_USERNAME,
    password: NEW_CONNECTOR_788_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
