import { useState } from 'react';
import { Buscador, Write, Icons } from './index.style';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div>
      <Buscador>
      <Icons icon={faSearch} />
        <Write
         type="text"
         placeholder="Buscar..."
         value={query}
         onChange={(e) => setQuery(e.target.value)}
         onKeyDown={handleKeyPress}
         />
      </Buscador>
    </div>
  );
}
