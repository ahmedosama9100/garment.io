import React, { useEffect, useState } from "react";
import store from "./../../utilities/store";
import { sortByReviews } from "./../../utilities/actionCreators";
import Card from "./../card/Card";
import Sort from "./../sort/Sort";
import styles from "./styles/search-result.module.css";

function activateSort(showResults, setShowResults) {
  store.dispatch(sortByReviews(showResults));
  setShowResults(store.getState().sortReviewsReducer);
}

const SearchResult = () => {
  const [showResults, setShowResults] = useState();

  useEffect(() => {
    store.subscribe(() => {
      setShowResults(store.getState().statusReducer[1]);
    });
  }, []);

  useEffect(() => {
    setShowResults(showResults);
  }, [showResults]);

  return (
    <div>
      {showResults !== undefined && (
        <div>
          <Sort
            activateSort={() => activateSort(showResults, setShowResults)}
          />
          <div className={styles["result-container"]}>
            {showResults.map((result) => (
              <Card
                key={result.id}
                src={result.image_url}
                businessName={result.name}
                numberOfReviews={result.review_count}
                priceRange={result.price}
                fullAddress={
                  result.location.address1 + " , " + result.location.city
                }
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
