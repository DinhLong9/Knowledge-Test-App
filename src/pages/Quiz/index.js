import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTopicName } from "../../services/TopicServices";
import { getListQuiz } from "../../services/QuizServices";
import { getCookie } from "../../helpers/cookie";
import { answerPOST } from "../../services/AnswersService";

export default function Quiz() {
  const param = useParams();
  const [nameTopic, setNameTopic] = useState([]);
  const [question, setQuestion] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getTopicName(param.id);
      setNameTopic(response);
    };
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListQuiz(param.id);
      setQuestion(response);
    };
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(question);

  const options = {
    userId: parseInt(getCookie("id")),
    topicId: parseInt(param.id),
    answers: [],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let i = 0; i < e.target.length; i++) {
      if (e.target[i].checked) {
        let name = e.target[i].name;
        let value = e.target[i].value;
        options.answers.push({
          questionId: parseInt(name),
          answer: parseInt(value),
        });
      }
    }
    // console.log(options);
    const response = await answerPOST(options);
    if (response) {
      navigate(`/result/${response.id}`);
    }
  };

  return (
    <>
      <h2>Bài Quiz Chủ Đề: {nameTopic.length > 0 && nameTopic[0].name}</h2>
      <div className="form-quiz">
        <form onSubmit={handleSubmit}>
          {question.map((item, index) => (
            <div className="form-quiz__item" key={index}>
              <p>
                Câu {index + 1}: {item.question}
              </p>
              {item.answers.map((itemAns, indexAns) => (
                <div key={indexAns}>
                  <input
                    type="radio"
                    name={item.id}
                    value={indexAns}
                    id={`quiz-${item.id}-${indexAns}`}
                  />
                  <label htmlFor={`quiz-${item.id}-${indexAns}`}>
                    {itemAns}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <button className="button btn-submit">Nộp Bài</button>
        </form>
      </div>
    </>
  );
}
