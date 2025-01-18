import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <>
      <button className={css.loadMoreBtn} type="button" onClick={onLoadMore}>
        Load More
      </button>
    </>
  );
};

export default LoadMoreBtn;
