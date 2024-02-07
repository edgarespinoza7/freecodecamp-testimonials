import './App.css';
import Testimonial from './components/Testimonial';
import data from './data'

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>This is what our students say about freeCodeCamp:</h1>
        <Testimonial 
          name = {data[0].name}
          country = {data[0].country}
          role = {data[0].role}
          company = {data[0].company}
          imgName = {data[0].imgName}
          testimonial = {data[0].testimonial}
        />
        <Testimonial 
          name = {data[1].name}
          country = {data[1].country}
          role = {data[1].role}
          company = {data[1].company}
          imgName = {data[1].imgName}
          testimonial = {data[1].testimonial}
        />
        <Testimonial 
          name = {data[2].name}
          country = {data[2].country}
          role = {data[2].role}
          company = {data[2].company}
          imgName = {data[2].imgName}
          testimonial = {data[2].testimonial}
        />
      </div>

    </div>
  );
}

export default App;
