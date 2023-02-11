import Footer from "./Footer";
import Header from "./Header";
import Card from "./Card";
import "./app.css";
import movies from "./data/movies.json";
function App() {
  return (
    <div>
      <Header />
      <div className="container">
        {movies.map((movie, index) => {
          if (movie.posterurl === " ") {
            console.log("error", movie.posterurl);
          }
          return (
            <Card
              key={index}
              title={movie.title}
              year={movie.year}
              posterurl={movie.posterurl}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
