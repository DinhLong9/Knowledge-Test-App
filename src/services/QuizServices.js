import { get } from "../utils/request";

export const getListQuiz = async (topicId) => {
  const result = await get(`questions?topicId=${topicId}`);
  return result;
};
