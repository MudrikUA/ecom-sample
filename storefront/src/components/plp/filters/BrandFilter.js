import React, { useEffect, useState } from "react";
import styles from "./Filters.module.css";

export default function BandFilter({ filter, setFilterParams, filterParams }) {
  const [selectedBrands, setSelectedBrands] = useState([]);

  useEffect(() => {
    if (!filterParams.brand || filterParams.brand.length !== selectedBrands.length) {
      setFilterParams((prevParams) => {
        if (!selectedBrands.length) {
          delete prevParams.brand;
          return { ...prevParams };
        }
        return {
          ...prevParams,
          brand: selectedBrands
        }
      });
    }
  }, [selectedBrands]);

  useEffect(() => {
    if (filterParams.brand && filterParams.brand.length !== selectedBrands.length) {
      setSelectedBrands(filterParams.brand);
    } else if (!filterParams.brand && selectedBrands.length !== 0) {
      setSelectedBrands([]);
    }
  }, [filterParams]);

  const handleCheckboxChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p className={styles.plp_filte_name}>Brand</p>
      {filter.brands?.map((brand) => (
        <label key={brand}>
          <input
            type="checkbox"
            value={brand}
            checked={selectedBrands.includes(brand)}
            onChange={() => handleCheckboxChange(brand)}
          />
          {brand}
        </label>
      ))}
    </div>
  );
}
