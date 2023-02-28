import React from "react";

export default function Pagination({ gotoNextPage, gotoPrevpage }) {
  return (
    <div>
      {gotoPrevpage && <button onClick={gotoPrevpage}>previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  );
}
