//Search.js
import { Divider, Input } from 'antd';

// Iteration 5
function Search({query, setQuery}) {
  return (
    <div>
      <Divider>Search</Divider>
        <label>Search</label>
        <Input placeholder="Search food" value={query} onChange={event => setQuery(event.target.value)} />
    </div>
  );
}

export default Search;