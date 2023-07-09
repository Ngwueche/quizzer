import React from "react";

// let questions = [];
export const getQuiz = async (data) => {
  try {
    const url =
      "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getNextQuestion = async () => {
  const questions = await getQuiz();
  if (questions.length > 0) {
    const nextQuestion = questions.shift();
    console.log("Next question:", nextQuestion.question);
    return nextQuestion;
  }
};

// export async function getNextQuestion() {
//   const question = await getQuiz()
//   if (question.length > 0) {
//     const nextQuestion = questions.shift();
//     console.log('Next question:', nextQuestion.question);
//     return nextQuestion;
//   } else {
//     console.log('No more questions available.');
//     return null;
//   }
// }

// let questions = [];

// async function getQuiz() {
//   try {
//     const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986');
//     const data = await response.json();
//     return questions = data.results;
//     console.log('Questions fetched successfully!');
//   } catch (error) {
//     console.log('Error fetching questions:', error.message);
//   }
// }

// function getNextQuestion() {
//   if (questions.length > 0) {
//     const nextQuestion = questions.shift();
//     console.log('Next question:', nextQuestion.question);
//     return nextQuestion;
//   } else {
//     console.log('No more questions available.');
//     return null;
//   }
// }
