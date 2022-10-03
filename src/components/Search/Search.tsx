import {FC} from "react";

import classes from './Search.module.scss'

type SearchPropsType = {}

export const Search: FC<SearchPropsType> = () => {

   return (
      <div className={classes.root}>
         <svg className={classes.icon}
              enableBackground="new 0 0 32 32"
              id="Editable-line"
              version="1.1"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
         >
            <circle cx="14"
                    cy="14"
                    fill="none"
                    id="XMLID_42_"
                    r="9"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
            />
            <line fill="none"
                  id="XMLID_44_"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  x1="27"
                  x2="20.366"
                  y1="27"
                  y2="20.366"
            />
         </svg>
         <input
                type="text"
                placeholder='Поиск пиццы...'
                className={classes.input}

         />
         <svg className={classes.clearIcon}

                              height="48"
                              viewBox="0 0 48 48"
                              width="48"
                              xmlns="http://www.w3.org/2000/svg"
         >
             <path
                 d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
             <path d="M0 0h48v48h-48z" fill="none"/>
         </svg>

      </div>
   );
};
