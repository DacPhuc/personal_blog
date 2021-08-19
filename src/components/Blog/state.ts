import { RootState } from "../../store";

const initialState: BlogState = {
  data: [
    {
      id: 1,
      title: "Hello",
      url: "https://something",
      view: 3,
    },
  ],
};

const reducer = (state: BlogState = initialState): BlogState => {
  return state;
};

export const blogsSelector = (state: RootState) => state.blogs.data;

export default reducer;
