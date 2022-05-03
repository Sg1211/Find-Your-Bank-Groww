import React from "react";
import {Pagination as PaginationComponent} from "@material-ui/lab";

const Pagination = (props) => {
  const {
    totalLength,
    paginate
  } = props;

  const count = Math.ceil(totalLength / 10);

  return (
    <>
      <PaginationComponent
        count={count}
        color="primary"
        onChange={(event, value) => {
          paginate(value);
        }}
      />
    </>
  );
}

export default Pagination;
