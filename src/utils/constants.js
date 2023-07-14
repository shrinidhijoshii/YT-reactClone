export const GOOGLE_API_KEY = "AIzaSyAXXswR90gvfIHnJCpf12LPgz2-XDQR4uA";
export const getYtVideosApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY}`;
export const watchVidApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&id=${123}&key=${GOOGLE_API_KEY}`;
export const searchApi =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
