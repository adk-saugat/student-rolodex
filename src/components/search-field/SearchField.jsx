import { Component } from "react";
import './search-field.css'
class SearchField extends Component {
  render() {
    const { onSearch, placeholder, className} = this.props;
    return (
      <div>
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={onSearch}
        />
      </div>
    );
  }
}
export default SearchField;
