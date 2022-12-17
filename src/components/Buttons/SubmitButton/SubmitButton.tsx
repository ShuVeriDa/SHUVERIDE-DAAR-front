import {FC} from 'react';
import styles from './SubmitButton.module.scss';
import {StatusEnum} from "../../../redux/types";
import cn from "classnames";
interface ISubmitButtonProps {
  title: string
  status?: StatusEnum
  onSelectType?: () => void
  classes?: string
}

export const SubmitButton: FC<ISubmitButtonProps> = ({title, classes, status, onSelectType}) => {
  const isLoading = status === 'success'
  return (
    <>
      <button type={'submit'} onClick={onSelectType} className={cn(styles.btn, classes)} disabled={isLoading}>{title}</button>
    </>
  );
};