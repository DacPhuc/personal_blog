import request from "../utils/request";
import generateHostParam from "../utils/genHostUrl";

export const query = async () => {
  return request(`${generateHostParam()}/articles`);
};

export const queryArticleContent = async (id: string, slug: string) => {
  return request(`${generateHostParam()}/articles/${id}/${slug}`);
};
