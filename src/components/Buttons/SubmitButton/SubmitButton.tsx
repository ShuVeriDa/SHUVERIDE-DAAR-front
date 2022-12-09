import {FC} from 'react';
import styles from './SubmitButton.module.scss';
import {StatusEnum} from "../../../redux/types";
interface ISubmitButtonProps {
  title: string
  status: StatusEnum
}

export const SubmitButton: FC<ISubmitButtonProps> = ({title, status}) => {
  const isLoading = status === 'success'
  return (
    <>
      <button type={'submit'} className={styles.btn} disabled={isLoading}>{title}</button>
    </>
  );
};