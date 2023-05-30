function SearchStudent({ search, setSearch }) {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <label>
      {" "}
      Search Students
      <input type="text" value={search} onChange={handleSearch} />
    </label>
  );
}

export default SearchStudent;
