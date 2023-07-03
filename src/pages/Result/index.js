import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { answerTopicName } from "../../services/AnswersService";
import { getTopicName } from "../../services/TopicServices";
import { getListQuiz } from "../../services/QuizServices";
import "./styles.scss";
export default function Result() {
  const param = useParams();
  const [dataResult, setDataResult] = useState([]);
  const [dataTopicName, setDataTopicName] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const dataAnswers = await answerTopicName(param.id);
      const dataTopics = await getTopicName(dataAnswers[0].topicId);
      const dataQuestion = await getListQuiz(dataAnswers[0].topicId);
      setDataTopicName(dataTopics);
      // console.log(dataQuestion);
      // console.log(dataAnswers);

      let resultFinal = [];
      for (let i = 0; i < dataQuestion.length; i++) {
        resultFinal.push({
          ...dataQuestion[i],
          ...dataAnswers[0].answers.find(
            (item) => item.questionId === dataQuestion[i].id
          ),
        });
      }

      setDataResult(resultFinal);
    };
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(dataTopicName);
  // console.log(dataResult);

  const numberTrueAnswers = dataResult.filter(
    (item) => item.answer === item.correctAnswer
  ).length;
  const numberfalseAnswers = dataResult.filter(
    (item) => item.answer !== item.correctAnswer
  ).length;
  return (
    <>
      <h2>
        Kết Quả Chủ Đề: {dataTopicName.length > 0 && dataTopicName[0].name}
      </h2>
      <p>
        Đúng:
        {numberTrueAnswers}| Sai:
        {numberfalseAnswers}| Tổng số câu: {dataResult.length} | Tỷ lệ đúng:
        {parseInt((numberTrueAnswers / dataResult.length) * 100)}%
      </p>
      <div className="result__list">
        {dataResult.map((item, index) => (
          <div className="result__item" key={index}>
            <p>
              Câu {index + 1}: {item.question}
              {item.answer === item.correctAnswer && (
                <span className="result__tag result__tag--true">Đúng</span>
              )}
              {item.answer !== item.correctAnswer && (
                <span className="result__tag result__tag--false">Sai</span>
              )}
            </p>
            {item.answers.map((itemAns, indexAns) => {
              let className = "";
              let checked = false;
              if (item.answer === indexAns) {
                checked = true;
                className = "result__item--selected";
              }
              if (item.correctAnswer === indexAns) {
                className += " result__item--result";
              }

              return (
                <div className="result_answer" key={indexAns}>
                  <input type="radio" disabled checked={checked} />
                  <label className={className}>{itemAns}</label>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <button className="button">Làm Lại</button>
    </>
  );
}
