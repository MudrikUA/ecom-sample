import React, { useEffect, useState } from "react";
import styles from "./Filters.module.css";

export default function CheckboxFilter({ 
  title,
  items,
  filterKey,
  setFilterParams,
  filterParams
}) {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    if (!filterParams[filterKey] || filterParams[filterKey].length !== selectedItems.length) {
      setFilterParams(prevParams => {
        if (!selectedItems.length) {
          const newParams = { ...prevParams };
          delete newParams[filterKey];
          return newParams;
        }
        return {
          ...prevParams,
          [filterKey]: selectedItems
        };
      });
    }
  }, [selectedItems]);

  useEffect(() => {
    if (filterParams[filterKey] && filterParams[filterKey].length !== selectedItems.length) {
      setSelectedItems(filterParams[filterKey]);
    } else if (!filterParams[filterKey] && selectedItems.length !== 0) {
      setSelectedItems([]);
    }
  }, [filterParams]);

  const handleCheckboxChange = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) 
        ? prev.filter((i) => i !== item) 
        : [...prev, item]
    );
  };

  return (
    <div className={styles.filter_block}>
      <p className={styles.plp_filte_name}>{title}</p>
      {items?.map((item) => (
        <label className={styles.filter_element_text} key={item}>
          <input
          style={{accentColor: "#2F3233"}}
            type="checkbox"
            value={item}
            checked={selectedItems.includes(item)}
            onChange={() => handleCheckboxChange(item)}
          />
          {item}
        </label>
      ))}
    </div>
  );
}