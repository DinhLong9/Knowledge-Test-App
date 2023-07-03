import { get } from "../utils/request";

export const getTopic = async () => {
  const result = await get(`topics`);
  return result;
};

export const getTopicName = async (id) => {
  const result = await get(`topics?id=${id}`);
  return result;
};
