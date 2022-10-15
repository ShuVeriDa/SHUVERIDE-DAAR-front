import {FC, useState} from 'react';

import { CommentsResponseType } from '../../api/commentAPI';
import styles from './CommentItem.module.scss'

interface CommentItemPropsType {
  setValueComment: (valueComment: string) => void
  removeComment: (id: string) => void
}

export const CommentItem: FC<CommentItemPropsType & CommentsResponseType> = ({id, text, foodId, removeComment, setValueComment}) => {
  const [isEdit, setEdit] = useState(false)
  const [value, setValue] = useState(text)

  const onClickRemove = () => {
    removeComment(id)
  }




  return (
    <div className={styles.commentItem}>
      <span className={styles.name}>ShuVeriDa</span>
      {isEdit ? <input className={styles.input} value={value} type="text" onChange={(e) => setValue(e.currentTarget.value)} />
        : <span className={styles.text} onDoubleClick={() => setEdit(true)}>{text}</span>
      }

      <div className={styles.svg}>
        <svg onClick={() => setEdit(!isEdit)} className={styles.svgItem} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="16px" height="16px">
          <path d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z"/>
        </svg>
        <svg onClick={onClickRemove} className={styles.svgItem} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="16px" height="16px">
          <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"/>
        </svg>
      </div>
        <span className={styles.date}>14 октября 2022 в 19:52</span>
    </div>
  );
};