// -- logic
resList.map((restaurant) => (
  <RestaurantCard key={restaurant.data.id} resData={restaurant} />
));

// -- logic
const filteredList = listOfRestaurant.filter((res) => res.data.avgRating > 4);
