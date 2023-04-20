import { IOption } from "../store/optionsFormSlice";

export function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const getHight = (totalCklicks: number, elementClicked: number) => {
  if (!elementClicked) return "5px";
  return Math.round((elementClicked / totalCklicks) * 200) + "px";
};

export const getWidth = (arr: IOption[]) => 80 / arr.length + "%";
