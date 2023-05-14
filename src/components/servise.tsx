import { IOption } from "../store/optionsFormSlice";

const VoteBlockHeight = 350;

export default function createVotingBlock(
  optionsArr: IOption[],
  toShowPercentage: boolean,
  toShowResult: boolean
) {
  const clicks = getTotalClicks(optionsArr);

  const results = optionsArr.map((el, index) => {
    const height = getHight(clicks, el.clicked);
    return (
      <div
        className="result"
        key={index}
        style={{
          width: getWidth(optionsArr),
          background: el.color,
          height: toShowResult ? height + "px" : "5px",
        }}
      >
        {toShowPercentage && (
          <span className="percentage">
            {toShowResult ? getPercentage(height) + "%" : "0%"}
          </span>
        )}
      </div>
    );
  });

  return results;
}

export function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const getHight = (totalCklicks: number, elementClicked: number) => {
  if (!elementClicked) return 5;
  return Math.round((elementClicked / totalCklicks) * VoteBlockHeight);
};

export const getWidth = (arr: IOption[]) => 85 / arr.length + "%";

export const getPercentage = (height: number) => {
  if (height === 5) return 0;
  return Math.round((height / VoteBlockHeight) * 100);
};

export const getTotalClicks = (optionsArr: IOption[]) =>
  optionsArr.reduce((acc, el) => {
    return acc + el.clicked;
  }, 0);
