// const [stars, setStars] = useState([]);

// useEffect(() => {
//   const newStars = calculateRating(reviews);
//   setStars(newStars);
// }, []);

// const calculateRating = (reviews) => {
//   const totalStars = reviews.reduce((acc, review) => {
//     review.stars.forEach((star, index) => {
//       acc[index] = (acc[index] || 0) + (star ? 1 : 0);
//     });
//     return acc;
//   }, []);

//   const averageStars = totalStars.map(
//     (starCount) => starCount >= reviews.length / 2
//   );
//   return averageStars;
// };
