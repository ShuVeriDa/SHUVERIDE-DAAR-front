import {ChangeEvent, FC, useState} from 'react';

import styles from './CommentItem.module.scss'
import {CommentsResponseType, UpdateCommentType} from "../../api/types";
import {EditCommentSVG, RemoveCommentSVG} from "../SvgComponent";
import {commentDateAt} from "../../utils/commentDateAt";
import {useAppSelector} from "../../redux/store";

interface CommentItemPropsType {
  removeComment: (id: string) => void
  editComment: (comment: UpdateCommentType) => void
  authorizedUserId: number | undefined
  isAdmin: boolean | undefined
}

export const CommentItem: FC<CommentItemPropsType & CommentsResponseType> = (
  {
    id, authorizedUserId, isAdmin,
    text, food, user, updatedAt,
    favorites, removeComment, editComment, createdAt
  }) => {
  const [isEdit, setEdit] = useState(false)
  const [value, setValue] = useState(text)

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const onClickRemove = () => {
    removeComment(id)
  }

  const onClickShow = (show: boolean) => {
    setEdit(show)
  }

  const onClickEditComment = () => {
    editComment({id: id, foodId: food?.id, text: value})
    setEdit(false)
  }

  return (
    <div className={styles.commentItem}>
      <span className={styles.name}>{user.nickName}</span>
      {isEdit && authorizedUserId === user.id
        ? <div className={styles.editText}>
          <input className={styles.input} value={value} type="text" onChange={onChangeValue}/>
          <div className={styles.btnDiv}>
            <button className={styles.btn} onClick={() => onClickShow(false)}>Отмена</button>
            <button className={`${styles.btn} ${styles.btnSave}`} onClick={onClickEditComment}>Сохранить</button>
          </div>
        </div>
        : <span className={styles.text} onDoubleClick={() => onClickShow(true)}>{text}</span>

      }
      <div className={styles.svg}>
        {!isEdit && (authorizedUserId === user.id) &&
          <EditCommentSVG styles={styles.svgItem} onClick={() => onClickShow(true)}/>}
        {(authorizedUserId === user.id || isAdmin) && <RemoveCommentSVG onClick={onClickRemove} styles={styles.svgItem}/>}
      </div>
      <span
        className={styles.date}>{createdAt !== updatedAt ? commentDateAt(updatedAt) : commentDateAt(createdAt)}</span>
    </div>
  );
};