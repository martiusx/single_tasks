import { FunctionComponent } from "react";
type FormElementProps = {
  onClickHandler: () => void;
  task: string;
};

const FormElement: FunctionComponent<FormElementProps> = ({
  onClickHandler,
  task,
}) => {
  return (
    <li>
      {task} <button onClick={onClickHandler}>Done</button>
    </li>
  );
};

export default FormElement;
