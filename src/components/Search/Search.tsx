import {ChangeEvent, FC, useCallback, useRef, useState} from "react";
import debounce from "lodash.debounce";
import {useDispatch} from "react-redux";

import styles from './Search.module.scss'
import {AppDispatchType} from "../../redux/store";
import {setSearchValue} from "../../redux/filter/filterSlice";
import {ClearSearchValueSVG, SearchSVG} from "../SvgComponent";


type SearchPropsType = {}

export const Search: FC<SearchPropsType> = () => {
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch<AppDispatchType>()

  const onClickRemoveTextSearch = () => {
    dispatch(setSearchValue(''))
    inputRef.current?.focus()
    setValue('')
  }

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str))
    }, 350), []
  )

  const setSearchValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(e.currentTarget.value)
    setValue(e.currentTarget.value)
  }

  return (
    <div className={styles.root}>
      <SearchSVG styles={styles.icon}/>
      <input value={value}
             type="text"
             placeholder='Поиск пиццы...'
             className={styles.input}
             onChange={setSearchValueHandler}
             ref={inputRef}
      />
      {value && <ClearSearchValueSVG styles={styles.clearIcon} onClick={onClickRemoveTextSearch} />}
    </div>
  );
};
