import {React, useState} from "react";

function CategoryFilter({categories, parentFunctUpdateCategory}) {
  const [currCategory, setCurrCategory] = useState("");

  function onCategeoryClick(e) {
    setCurrCategory(e.target.value)
    parentFunctUpdateCategory(e.target.value);
  }

  function mapCategories(element, index, array) {
    const tmpClassName = element === currCategory ? "selected" : "";
    return (
    <button className={tmpClassName} onClick={onCategeoryClick} key={element} value={element}>
      {element}
    </button>);
  }
  const categoryButton = categories.map(mapCategories);

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
