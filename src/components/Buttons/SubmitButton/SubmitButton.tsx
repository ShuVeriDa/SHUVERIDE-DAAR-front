import {FC} from 'react';
import styles from './SubmitButton.module.scss';
interface ISubmitButtonProps {
  title: string
}

export const SubmitButton: FC<ISubmitButtonProps> = ({title}) => {
  return (
    <>
      <button className={styles.btn}>{title}</button>
    </>
  );
};