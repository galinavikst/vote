import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OptionsForm from "../components/OptionsForm";
import QuestionForm from "../components/QuestionForm";
import { LottieSet } from "../components/Lottie";
import { lottiePage, setPage } from "../store/lottieSlice";

export default function CreateNewQuestion() {
  const dispatch = useDispatch();
  const page = useSelector(lottiePage);

  useEffect(() => {
    dispatch(setPage("forms"));
  }, [dispatch, page]);

  return (
    <div className="app_wrapper">
      <>
        <QuestionForm />
        <OptionsForm />
      </>
      <LottieSet />
    </div>
  );
}
