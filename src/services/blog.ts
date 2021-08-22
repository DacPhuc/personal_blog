import request from "../utils/request";
import generateHostParam from "../utils/genHostUrl";

export const query = async () => {
  return request(`${generateHostParam()}/articles`);
};
