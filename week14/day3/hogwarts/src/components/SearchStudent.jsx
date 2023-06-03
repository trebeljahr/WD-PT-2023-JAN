function SearchStudent({ search, setSearch }) {
  const handleSearch = (event) => {
    console.log();
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
