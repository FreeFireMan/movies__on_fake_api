// import styles from './Pagination.module.css'

export const PaginationWrapper = ({
                                    children,
                                    currentPage,
                                    totalPage,
                                    onPrevClick,
                                    onNextClick,
                                    handlerLastPage,
                                    handlerFirstPage
                                  }) => {

  const handlerPrevClick = () => {
    if (currentPage - 1 > 0) {
      onPrevClick(currentPage - 1)
    }
  }
  const handlerNextClick = () => {
    if (currentPage + 1 <= totalPage) {
      onNextClick(currentPage + 1)
    }
  }
  const handlerFirstClick = () => {
    handlerFirstPage && handlerFirstPage(1)
  }
  const handlerLastClick = () => {
    handlerLastPage && handlerLastPage(totalPage)
  }

  return (
      <div>
        <div>
          <button disabled={currentPage === 1} onClick={handlerFirstClick}>first page</button>
          <button disabled={currentPage - 1 <= 0} onClick={handlerPrevClick}>prev page</button>
          <span>{currentPage} of {totalPage}</span>
          <button disabled={currentPage + 1 > totalPage} onClick={handlerNextClick}>next page</button>
          <button disabled={currentPage === totalPage} onClick={handlerLastClick}>last page</button>
        </div>
        {children}
      </div>
  );
}
