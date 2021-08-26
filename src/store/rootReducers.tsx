import { combineReducers } from "redux";
import blogs from "../components/Blog/state";
import notifications from "../components/Notification/state";
import articles from "../components/Article/state";

export default combineReducers({
  blogs,
  notifications,
  articles,
});
