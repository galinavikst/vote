export interface IAllClients {
  clients: IClient[];
}

export interface IClient {
  name: string;
  email: string;
  password: string;
  questions: IQuestions[];
}

export interface IQuestions {
  id: string;
  question: string;
  options: IOption[];
  votedOption: number;
  totalClicks: number;
}

export interface IOption {
  id: string;
  color: string;
  text: string;
  clicked: number;
}

export const allClients = [
  {
    name: "Bob",
    email: "1@gmail.com",
    password: "1234",
    questions: [
      {
        id: "Our office will have a theme day, which one would you choose?",
        question:
          "Our office will have a theme day, which one would you choose?",
        options: [
          {
            id: "Crazy Hat Day",
            color: "#d7fe02",
            text: "Crazy Hat Day",
            clicked: 1,
          },
          {
            id: "Superhero Day",
            color: "#23fa22",
            text: "Superhero Day",
            clicked: 9,
          },
          {
            id: "Pajama Day",
            color: "#af0a22",
            text: "Pajama Day",
            clicked: 8,
          },
          {
            id: "Hawaiian Shirt Day",
            color: "#fa0a25",
            text: "Hawaiian Shirt Day",
            clicked: 2,
          },
        ],
        votedOption: -1,
        totalClicks: 20,
      },
      {
        id: "What's your preferred office pet?",
        question: "What's your preferred office pet?",
        options: [
          {
            id: "Office dog",
            color: "#33ffd7",
            text: "Office dog",
            clicked: 3,
          },

          {
            id: "Office cat",
            color: "#ff5733",
            text: "Office cat",
            clicked: 8,
          },

          {
            id: "Office fish tank",
            color: "#5481ee",
            text: "Office fish tank",
            clicked: 9,
          },

          {
            id: "Office plant",
            color: "#65ef54 ",
            text: "Office plant",
            clicked: 11,
          },
        ],
        votedOption: -1,
        totalClicks: 31,
      },
      {
        id: "Do you have kids?",
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
        votedOption: -1,
        totalClicks: 26,
      },
    ],
  },
  {
    name: "Maria",
    email: "2@gmail.com",
    password: "0000",
    questions: [
      {
        id: "What is your salary (usd)?",
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
        votedOption: -1,
        totalClicks: 22,
      },
      {
        id: "What's the best way to start the day in the office?",
        question: "What's the best way to start the day in the office?",
        options: [
          {
            id: "Coffee",
            color: "#f0f46f",
            text: "Coffee",
            clicked: 7,
          },
          {
            id: "Yoga/stretching",
            color: "#b8f46f",
            text: "Yoga/stretching",
            clicked: 5,
          },
          {
            id: "Office gossip",
            color: "#dc54ef",
            text: "Office gossip",
            clicked: 7,
          },
          {
            id: "Dancing to a favorite song",
            color: "#7b8cde",
            text: "Dancing to a favorite song",
            clicked: 3,
          },
          {
            id: "Other",
            color: "#16c6d0 ",
            text: "Other",
            clicked: 3,
          },
        ],
        votedOption: -1,
        totalClicks: 25,
      },
      {
        id: "What's your favorite office fashion statement?",
        question: "What's your favorite office fashion statement?",
        options: [
          {
            id: " Socks with sandals - breaking all fashion norms in the name of comfort.",
            color: "#f0e46f",
            text: " Socks with sandals - breaking all fashion norms in the name of comfort.",
            clicked: 4,
          },
          {
            id: "Hawaiian shirt Fridays - bringing the tropical vibes to the workplace.",
            color: "#b8f46f",
            text: "Hawaiian shirt Fridays - bringing the tropical vibes to the workplace.",
            clicked: 7,
          },
          {
            id: " Pajama bottoms hidden under professional attire - business on top, cozy on the bottom.",
            color: "#dc54e1",
            text: " Pajama bottoms hidden under professional attire - business on top, cozy on the bottom.",
            clicked: 7,
          },
          {
            id: "Other",
            color: "#7b8c56",
            text: "Other",
            clicked: 3,
          },
        ],
        votedOption: -1,
        totalClicks: 21,
      },
      {
        id: "If you were a superhero, what would your superpower be?",
        question: "If you were a superhero, what would your superpower be?",
        options: [
          {
            id: "The ability to make any food appear instantly.",
            color: "#f0e46f",
            text: "The ability to make any food appear instantly.",
            clicked: 10,
          },
          {
            id: "Teleportation - no more traffic or long commutes!",
            color: "#b8f46f",
            text: "Teleportation - no more traffic or long commutes!",
            clicked: 7,
          },
          {
            id: "The superpower of always being able to find a Wi-Fi signal, no matter where you are.",
            color: "#dc54e1",
            text: "The superpower of always being able to find a Wi-Fi signal, no matter where you are.",
            clicked: 15,
          },
          {
            id: "The ability to always find the perfect parking spot, even in the busiest areas.",
            color: "#7e3c56",
            text: "The ability to always find the perfect parking spot, even in the busiest areas.",
            clicked: 5,
          },
          {
            id: "Other",
            color: "#7f8c56",
            text: "Other",
            clicked: 3,
          },
        ],
        votedOption: -1,
        totalClicks: 40,
      },
    ],
  },
];
