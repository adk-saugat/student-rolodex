import "./search-field.css"

const SearchField = ({ onSearch, placeholder, className }) => {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onSearch}
      />
    </div>
  )
}
export default SearchField
