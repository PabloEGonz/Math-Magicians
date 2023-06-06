import React from 'react';

const Home = () => {
  const info = {
    paragraph1: "The calculator section of this web app is designed using React, a popular JavaScript library for building user interfaces, the calculator offers a clean and intuitive interface. It supports basic arithmetic operations such as addition, subtraction, multiplication, and division, allowing users to perform calculations with ease. The React framework's component-based architecture ensures that the calculator is highly modular, making it easy to extend or customize its functionality. Additionally, the calculator incorporates responsive design principles, ensuring a seamless experience across various.",
    paragraph2: "The Inspirational Quote Generator utilizing an API, moving on to the third section of our web app, we have an inspirational quote generator that uses an API to fetch motivational quotes. We believe that small doses of inspiration can have a significant impact on our daily lives. The quote generator displays a random quote each time the component mounts. By integrating with an external API, we ensure a diverse collection of quotes from various authors. This dynamic nature of the quote generator keeps the user experience fresh and engaging. The React framework facilitates the seamless integration of API calls and data rendering, enabling users to receive their daily dose of inspiration with a single click. Whether it's for a quick morale boost, sharing on social media, or just finding something profound to reflect upon, the inspirational quote generator adds an element of thoughtfulness and positivity to our web app experience.",
  };
  return (

    <div>
      <h2>Welcome to our page!</h2>
      <p>{info.paragraph1}</p>
      <p>{info.paragraph2}</p>
    </div>
  );
};
export default Home;
