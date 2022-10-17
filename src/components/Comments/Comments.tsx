import {ChangeEvent, FC, useEffect, useState} from 'react';
import uuid from 'react-uuid';
import styles from './Comments.module.scss'
import {CommentItem} from "../CommentItem/CommentItem";
import {commentAPI, CommentsResponseType} from '../../api/commentAPI';


interface CommentsPropsType {
  foodId: string | undefined
}

export const Comments: FC<CommentsPropsType> = ({foodId}) => {
  const [comments, setComments] = useState<CommentsResponseType[]>([])
  const [valueComment, setValueComment] = useState('')
  const commentCreatedAt = new Intl.DateTimeFormat("ru", {day: "numeric", month: "long", year: "numeric", hour:'numeric', minute: "numeric"}).format(new Date()).replace(/(\s?\г\.?)/, " в")

  console.log('valueComment :' + valueComment)

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValueComment(e.currentTarget.value)
  }

  const editComment = async (id: string, value: string) => {
    try {
     const res = await commentAPI.editComment(id, value)
      setComments(prev => prev.map(obj => obj.id === id ? {...obj, text: res.data.text} : obj))
      setValueComment('')
    } catch (error) {
      console.warn(error)
      alert('Не удалось редактировать комментарий')
    }
  }

  const createNewComment = async () => {
    const comment: CommentsResponseType = {
      id: uuid(),
      foodId: foodId!,
      text: valueComment,
      createdAt: commentCreatedAt
    }

    setValueComment('')

    try {
      const res = await commentAPI.createComment(comment)
      setComments((prev => [...prev, res.data]))
    } catch (error) {
      console.warn(error)
      alert('Не создать комментарий')
    }
  }

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await commentAPI.getComments()
        setComments(res.data)
      } catch (error) {
        console.warn(error)
        alert('Не удалось получить комментарии')
      }
    }

    fetchComments()
  }, [])

  const removeComment = async (id: string) => {
    try {
      const res = await commentAPI.removeComment(id)
      setComments(prevState => prevState.filter(obj => obj.id !== res.data.id))
    } catch (error) {
      console.warn(error)
      alert('Не удалось удалить комментарий')
    }
  }


  return (
    <div className={styles.wrapper}>
      <span>Комментарий: {comments.filter(obj => obj.foodId === foodId).length}</span>
      <div className={styles.comment}>
        <input className={styles.input} placeholder="Написать комментарий..." value={valueComment}
               onChange={onChangeValue} type="text"/>
        <svg className={valueComment.length > 0 ? `${styles.btn} ${styles.btnActive}` : styles.btn}
             onClick={createNewComment} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="send_24__Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="send_24__send_24">
              <path id="send_24__Rectangle-76" d="M0 0h24v24H0z"></path>
              <path
                d="M5.74 15.75a39.14 39.14 0 0 0-1.3 3.91c-.55 2.37-.95 2.9 1.11 1.78 2.07-1.13 12.05-6.69 14.28-7.92 2.9-1.61 2.94-1.49-.16-3.2C17.31 9.02 7.44 3.6 5.55 2.54c-1.89-1.07-1.66-.6-1.1 1.77.17.76.61 2.08 1.3 3.94a4 4 0 0 0 3 2.54l5.76 1.11a.1.1 0 0 1 0 .2L8.73 13.2a4 4 0 0 0-3 2.54Z"
                id="send_24__Mask" fill="currentColor">
                <button disabled={valueComment.length === 0} type="submit" onClick={createNewComment}>Post</button>
              </path>
            </g>
          </g>
        </svg>
      </div>

      <div>
        {/*не смог реализовать запрос комментраиев по foodId через mockapi.io.
         Поэтому пришлось запрашивать все комментарии и потом фильтровать по foodId*/}
        {
          comments
            .filter(obj => obj.foodId === foodId)
            .map(obj => <CommentItem key={obj.id}
                                     {...obj}
                                     removeComment={removeComment}
                                     editComment={editComment}
              />
            )
        }
      </div>
    </div>
  );
};