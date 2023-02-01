import {ChangeEvent, FC, useEffect, useRef} from 'react';
import styles from './Comments.module.scss'
import {CommentItem} from "../CommentItem/CommentItem";
import {useDispatch} from "react-redux";
import {AppDispatchType, useAppSelector} from "../../redux/store";
import {setValueComment,} from "../../redux/comment/commentSlice";
import {CreateCommentType, UpdateCommentType} from "../../api/types";
import {AddCommentSVG} from "../SvgComponent";
import {
  CreateNewCommentTC,
  EditCommentsTC,
  FetchCommentsTC,
  RemoveCommentTC
} from "../../redux/comment/comment.actions";


interface CommentsPropsType {
  foodId: string
}

export const Comments: FC<CommentsPropsType> = ({foodId}) => {
  const dispatch = useDispatch<AppDispatchType>()
  const {comments, valueComment} = useAppSelector(state => state.comment)
  // const [valueComment, setValueComment] = useState('')
  const inputRef = useRef<any>(null)
  const authorizedUserId = useAppSelector(state => state.user.user?.id)
  const isAdmin = useAppSelector(state => state.user.user?.isAdmin)

  useEffect(() => {
    dispatch(FetchCommentsTC(foodId))

    // const fetchComments = async () => {
    //   try {
    //     const res = await commentAPI.getComments()
    //     setComments(res.data)
    //   } catch (error) {
    //     console.warn(error)
    //     alert('Не удалось получить комментарии')
    //   }
    // }
    //
    // fetchComments()
  }, [])

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setValueComment(e.currentTarget.value))
  }

  const editComment = (comment: UpdateCommentType) => {
    dispatch(EditCommentsTC(comment))
    dispatch(setValueComment(''))

    //   try {
    //    const res = await commentAPI.editComment(id, value)
    //     setComments(prev => prev.map(obj => obj.id === id ? {...obj, text: res.data.text} : obj))
    //     setValueComment('')
    //   } catch (error) {
    //     console.warn(error)
    //     alert('Не удалось редактировать комментарий')
    //   }
    // }
  }

  const createNewComment = async () => {
    const comment: CreateCommentType = {
      foodId: foodId,
      text: valueComment,
    }

    dispatch(setValueComment(''))
    dispatch(CreateNewCommentTC(comment))

    // try {
    //   const res = await commentAPI.createComment(comment)
    //   setComments((prev => [...prev, res.data]))
    // } catch (error) {
    //   console.warn(error)
    //   alert('Не создать комментарий')
    // }
  }

  const removeComment = async (id: string) => {
    dispatch(RemoveCommentTC(id))
    // try {
    //   const res = await commentAPI.removeComment(id)
    //   setComments(prevState => prevState.filter(obj => obj.id !== res.data.id))
    // } catch (error) {
    //   console.warn(error)
    //   alert('Не удалось удалить комментарий')
    // }
  }


  return (
    <div className={styles.wrapper}>
      <span>Комментарий: {comments.length}</span>
      {authorizedUserId && <div className={styles.comment}>
        <input className={styles.input} placeholder="Написать комментарий..." value={valueComment}
               onChange={onChangeValue} type="text"/>

        <button type="submit"
                className={styles.addComment}
                ref={inputRef}
                disabled={valueComment.length === 0}
                onClick={createNewComment}
        />
        <AddCommentSVG onClick={() => inputRef.current.click()}
                       styles={valueComment.length > 0 ? `${styles.btn} ${styles.btnActive}` : styles.btn}

        />
      </div>}


      <div>
        {comments
          .map((obj) => <CommentItem key={obj.id} {...obj}
                                     removeComment={removeComment}
                                     editComment={editComment}
                                     authorizedUserId={authorizedUserId}
                                     isAdmin={isAdmin}
          />)
          .reverse()
        }
      </div>
    </div>
  );
};