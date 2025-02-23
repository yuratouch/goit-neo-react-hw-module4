import style from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ loadMoreHandle }) {
  return (
    <div className={style.loadMoreContainer}>
      <button onClick={loadMoreHandle} className={style.loadMore}>
        Load More
      </button>
    </div>
  );
}

export default LoadMoreBtn;
