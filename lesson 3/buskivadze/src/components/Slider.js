import Carousel from "react-bootstrap/Carousel";
import { NewsObjs } from "../libs/data";

const Slider = () => {
  return (
    <Carousel>
      {NewsObjs.map((value) => {
        return (
          <Carousel.Item key={value.id}>
            <a href={value.link}><img src={value.image} alt="Couldnt load" /></a>
            <Carousel.Caption>
                <h1 style={{color: "white"}}>{value.text}</h1>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slider;
