import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const userQuery = form.elements.searchBar.value.trim();

    if (userQuery === "") {
      toast.error("Please enter search term!");

      return;
    }

    onSearch(userQuery);
    form.reset();
  };
  return (
    <div className={css.searchBarContainer}>
      <form className={css.formContainer} onSubmit={(e) => handleSubmit(e)}>
        <input
          className={css.inputStyle}
          type="text"
          name="searchBar"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit">
          <IoIosSearch className={css.icon} size={"18px"} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
