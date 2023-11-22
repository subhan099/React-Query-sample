// import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "react-query";
import axios from "axios";
function App() {
  const { isLoading, error, data } = useQuery("Random Pictures", async () => {
    try {
      const response = await axios("https://random.dog/woof.json");
      console.log("API Response:", response.data); // Log the response data
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  });
  if (error) {
    return (
      <div>
        <h1>Error {error.message}, try again!</h1>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      {data.url ? (
        <img src={data.url} alt="Random Dog" />
      ) : (
        <p>No image URL available</p>
      )}
    </div>
  );
}

export default App;
