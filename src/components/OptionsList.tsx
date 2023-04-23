import React from "react";
import { deleteOption, options } from "../store/optionsFormSlice";
import { useDispatch, useSelector } from "react-redux";
import { inputQuestionValue } from "../store/questionFormSlice";

export function OptionsList() {
  const dispatch = useDispatch();
  const optionsArr = useSelector(options);
  const question = useSelector(inputQuestionValue);

  const handleDeleteBtn = (index: number) => {
    console.log(index, optionsArr);
    dispatch(deleteOption(index));
  };

  const list = Array.from({ length: 5 }).map((_el, index) => {
    return (
      <li
        key={"option" + index}
        style={
          optionsArr[index]
            ? {
                opacity: 1,
                listStyle: "inside",
                color: optionsArr[index].color,
              }
            : { opacity: 0.3 }
        }
      >
        {optionsArr[index] ? (
          <span>
            <span className="option_text">{optionsArr[index].text}</span>
            <button
              className="delete_btn"
              onClick={() => handleDeleteBtn(index)}
            >
              X
            </button>
          </span>
        ) : (
          "Your option"
        )}
      </li>
    );
  });

  // const list = [];
  // for (let i = 0; i < 5; i++) {
  //   console.log(optionsArr[i]);
  //   list.push(
  //     <li
  //       key={"option" + i}
  //       style={
  //         optionsArr[i]
  //           ? { opacity: 1, listStyle: "inside", color: optionsArr[i].color }
  //           : { opacity: 0.3 }
  //       }
  //     >
  //       {optionsArr[i] ? (
  //         <div>
  //           <span className="option_text">{optionsArr[i].text}</span>
  //           <button
  //             className="delete_btn"
  //             onClick={() => handleDeleteBtn(indexOf(optionsArr[i]))}
  //           >
  //             X
  //           </button>
  //         </div>
  //       ) : (
  //         "Your option"
  //       )}
  //     </li>
  //   );
  //}

  return <>{question && <ul className="options_list">{list}</ul>}</>;
}
