/*
 * Complete the function below. to get number of movies title of which include the given str
 * Use console.log to print the result, you should not return from the function.
 */
async function getNumberOfMovies(substr) {
    /*
     * Endpoint: "https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=substr"
     */
    try {
        const response =
            await fetch(`https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=${encodeURIComponent(substr)}`);
        const data = await response.json();
        const totalMovies = data.total;
        console.log(totalMovies);
    } catch (error) {
        console.error('Error:', error);
    }
}