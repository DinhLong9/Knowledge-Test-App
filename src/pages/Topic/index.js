import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import { getTopic } from "../../services/TopicServices";

export default function Topic() {
  const [dataTopic, setDataTopic] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getTopic();
      setDataTopic(response);
    };
    fetchApi();
  }, []);
  // console.log(dataTopic);

  return (
    <>
      <h2>Danh Sách Chủ Đề Ôn Luyện</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên Chủ Đề</th>
          </tr>
        </thead>
        <tbody>
          {dataTopic.map((topic, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{topic.name}</td>
              <td>
                <NavLink to={`/quiz/${topic.id}`}>Làm Bài</NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
