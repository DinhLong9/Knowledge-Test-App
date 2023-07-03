import { post } from "../utils/request";
import { get } from "../utils/request";
import { getCookie } from "../helpers/cookie";

export const answerPOST = async (options) => {
  const result = await post("answers", options);
  return result;
};

export const answerTopicName = async (id) => {
  const result = await get(`answers?id=${id}`);
  return result;
};

export const getAnswersByUserId = async () => {
  const userId = getCookie("id");
  const result = await get(`answers?userId=${userId}`);
  return result;
};
