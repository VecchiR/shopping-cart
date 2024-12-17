import { useContext} from 'react';
import { ShopContext } from '../context/ShopContext';

export default function FilterAndSort() {
  const {
    sortMode,
    setSortMode,
    categoryFilter,
    setCategoryFilter,
    priceRange,
    setPriceRange,
    searchQuery,
    setSearchQuery,
    products,
  } = useContext(ShopContext);

  const categories = Array.from(new Set(products.map((product) => product.category)));

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortMode(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(e.target.value);
  };

  const handlePriceRangeChange = (value: number, index: number) => {
    if (isNaN(value)) {
      value = index === 0 ? 0 : Infinity;
    }
    const newRange: [number, number] = [...priceRange];
    newRange[index] = value;
    setPriceRange(newRange);
  };

  const priceRangeCheck = () => {
    if (priceRange[0] > priceRange[1]) {
      setPriceRange([priceRange[1], priceRange[0]]);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClearAll = () => {
    setSortMode('mostRecent');
    setCategoryFilter('');
    setPriceRange([0, Infinity]);
    setSearchQuery('');
  };

  return (
    <>
      <select value={sortMode} onChange={handleSortChange}>
        <option value="mostRecent">Most Recent</option>
        <option value="alphaAsc">Alphabetical Ascending</option>
        <option value="alphaDesc">Alphabetical Descending</option>
        <option value="priceAsc">Price Ascending</option>
        <option value="priceDesc">Price Descending</option>
      </select>
      <select value={categoryFilter} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="price-range-container">
        <label>Price Range:</label>
        <div className="range-inputs">
          <input
            type="number"
            placeholder="Min"
            min={0}
            value={priceRange[0] === 0 ? '' : priceRange[0]}
            onChange={(e) => handlePriceRangeChange(parseInt(e.target.value, 10), 0)}
            onBlur={priceRangeCheck}
          />
          <input
            type="number"
            placeholder="Max"
            min={0}
            value={priceRange[1] === Infinity ? '' : priceRange[1]}
            onChange={(e) => handlePriceRangeChange(parseInt(e.target.value, 10), 1)}
            onBlur={priceRangeCheck}/>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button onClick={handleClearAll}>Clear All</button>
    </>
  );
}
