import {FC} from "react";

import ReactPaginate from "react-paginate";
import classes from './Pagination.module.scss'

type PaginationPropsType = {

}

export const Pagination: FC<PaginationPropsType> = () => {
   return (
      <ReactPaginate
         className={classes.root}
         breakLabel="..."
         nextLabel=">"
         previousLabel="<"
         pageRangeDisplayed={4}
         pageCount={3}
      />
   );
};