import React from "react";
import PaginationBase from "@material-ui/lab/Pagination";
import "./Pagination.scss";

export const Pagination = ( { itemsPerPage, total, ...restProps } ) => {
    const pageCount = total / itemsPerPage;
    if ( pageCount <= 1 ) {
        return null;
    }

    return (
        <div className="pagination">
            <PaginationBase color="primary" count={ Math.ceil( pageCount ) } { ...restProps } />
        </div>
    );
};