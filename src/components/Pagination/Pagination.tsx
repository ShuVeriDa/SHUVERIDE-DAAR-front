import {FC} from "react";

import ReactPaginate from "react-paginate";
import classes from './Pagination.module.scss'

type PaginationPropsType = {
   currentPage: number
   onChangeCurrentPage: (currentPage: number) => void
}

export const Pagination: FC<PaginationPropsType> = ({currentPage, onChangeCurrentPage}) => {
   return (
      <ReactPaginate
         className={classes.root}
         breakLabel="..."
         nextLabel=">"
         onPageChange={(e) => onChangeCurrentPage(e.selected + 1)}
         previousLabel="<"
         pageRangeDisplayed={4}
         pageCount={3}
         forcePage={currentPage - 1}
      />
   );
};