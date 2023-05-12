export const allClients = [
  {
    name: "Bob",
    email: "1@gmail.com",
    password: "1234",
    questions: [
      {
        id: "How old are you?",
        question: "How old are you?",
        options: [
          {
            id: "0 - 19",
            color: "#d7fe02",
            text: "0 - 19",
            clicked: 1,
          },
          {
            id: "20 - 30",
            color: "#23fa22",
            text: "20 - 30",
            clicked: 9,
          },
          {
            id: "31 - 40",
            color: "#af0a22",
            text: "31 - 40",
            clicked: 8,
          },
          {
            id: "41 - 50",
            color: "#fa0a25",
            text: "41 - 50",
            clicked: 2,
          },
          {
            id: "50+",
            color: "#bea9de",
            text: "50+",
            clicked: 0,
          },
        ],
      },
      {
        question: "Do you have kids?",
        options: [
          {
            id: "yes",
            color: "#33ffd7",
            text: "yes",
            clicked: 11,
          },

          {
            id: "no",
            color: "#ff5733",
            text: "no",
            clicked: 15,
          },
        ],
      },
    ],
  },
  {
    name: "Maria",
    email: "2@gmail.com",
    password: "0000",
    questions: [
      {
        question: "What is your salary (usd)?",
        options: [
          {
            id: "0 - 1000",
            color: "#f0f46f",
            text: "0 - 1000",
            clicked: 5,
          },
          {
            id: "1000 - 2000",
            color: "#b8f46f",
            text: "1000 - 2000",
            clicked: 7,
          },
          {
            id: "2000 - 3000",
            color: "#dc54ef",
            text: "2000 - 3000",
            clicked: 7,
          },
          {
            id: "3000+",
            color: "#7b8cde",
            text: "3000+",
            clicked: 3,
          },
        ],
      },
    ],
  },
];
