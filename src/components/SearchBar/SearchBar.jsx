import style from "./SearchBar.module.css";
import toast from "react-hot-toast";

function SearchBar({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const inputElement = form.querySelector("input");
    const query = inputElement.value;

    if (query.trim()) {
      form.reset();
      return onSubmit(query.toLowerCase());
    } else {
      toast.error("Please enter a search query");
    }
  }

  return (
    <header className={style.searchBar}>
      <form className={style.searchForm} onSubmit={handleSubmit}>
        <input
          className={style.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default SearchBar;
