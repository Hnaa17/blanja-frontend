import React from "react";
// import { Pagination } from "react-bootstrap";
// import { useSearchParams } from "react-router-dom";


const Pagination = ({ limit, totalData, page }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalData / limit); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a onClick={() => page(number)} className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
};
  
export default Pagination;




// export default function MyPagination({ totalData, current }) {
//     const [searchParams, setSearchParams] = useSearchParams();
//     let searching = searchParams.get("search");

//     let sortParam = searchParams.get("sort") || "asc";
//     let limitParam = searchParams.get("limit") || "10";

//     // console.log(current)

//     let items = [];
//     if (current > 1) {
//         items.push(
//             <Pagination.Prev
//                 key="prev"
//                 onClick={(e) => {
//                     if (searching === null) {
//                         setSearchParams({
//                             sort: sortParam,
//                             page: (current - 1),
//                             limit: limitParam,
//                         });
//                     } else {
//                         setSearchParams({
//                             search: searching,
//                             sort: sortParam,
//                             page: (current - 1),
//                             limit: limitParam,
//                         });
//                     }
//                 }}
//             />
//         );
//     }

//     for (let page = 1; page <= totalData; page++) {
//         items.push(
//             <Pagination.Item key={page} data-page={page} value={page} active={page === current}
//                 onClick={(e) => {
//                     if (searching === null) {
//                         setSearchParams({
//                             sort: sortParam,
//                             page: page,
//                             limit: limitParam,
//                         });
//                     } else {
//                         setSearchParams({
//                             search: searching,
//                             sort: sortParam,
//                             page: page,
//                             limit: limitParam,
//                         });
//                     }
//                 }
//                 }>
//                 {page}
//             </Pagination.Item>
//         );
//     }

//     if (current < totalData) {
//         items.push(<Pagination.Next key="next"
//             onClick={(e) => {
//                 if (searching === null) {
//                     setSearchParams({
//                         sort: sortParam,
//                         page: (current + 1),
//                         limit: limitParam,
//                     });
//                 } else {
//                     setSearchParams({
//                         search: searching,
//                         sort: sortParam,
//                         page: (current + 1),
//                         limit: limitParam,
//                     });
//                 }
//             }}


//         />);
//     }

//     return <Pagination size="lg">{items}</Pagination>;
// }