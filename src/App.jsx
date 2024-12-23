import { useState } from "react";
import people from "./data";
import Reviews from "./Reviews";
const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((index) => {
      // let newIndex = index + 1;
      // console.log(newIndex);
      // console.log(newIndex % people.length);
      const newValue = (index + 1) % people.length;
      console.log(newValue);
      return newValue;
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      const newValue = (index - 1 + people.length) % people.length;
      return newValue;
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    const newIndex = randomNumber % people.length;
    // console.log(randomNumber, newIndex);
    setIndex(newIndex);
  };

  return (
    <main>
      <Reviews
        prevPerson={prevPerson}
        nextPerson={nextPerson}
        randomPerson={randomPerson}
        name={name}
        job={job}
        text={text}
        image={image}
      />
    </main>
  );
};
export default App;
