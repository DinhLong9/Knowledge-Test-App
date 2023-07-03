import React, { useEffect, useState } from "react";
import { getAnswersByUserId } from "../../services/AnswersService";
import { getTopic } from "../../services/TopicServices";
import { NavLink } from "react-router-dom";

export default function Answers() {
  const [dataAnswers, setDataAnswers] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const answers = await getAnswersByUserId();
      const topics = await getTopic();
      // console.log(answers);
      // console.log(topics);
      let resultFinal = [];
      for (let i = 0; i < answers.length; i++) {
        resultFinal.push({
          ...topics.find((item) => item.id === answers[i].topicId),
          ...answers[i],
        });
      }
      // console.log(resultFinal);
      setDataAnswers(resultFinal.reverse());
    };
    fetchApi();
  }, []);

  return (
    <>
      <h2>Danh Sách Bài Đã Luyện Tập</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên Chủ Đề</th>
          </tr>
        </thead>
        <tbody>
          {dataAnswers.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <NavLink to={`/result/${item.id}`}>Xem Chi Tiết</NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
