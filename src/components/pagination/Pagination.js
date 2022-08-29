import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {

   const handlePageChange = () => {

    };

    return(
        <div>
            <ReactPaginate 
                previousLabel={'Prev'}
                nextLabel={'Next'}
                breakLabel={'...'}
                pageCount={5}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
            />
        </div>
    )
}


export default Pagination;