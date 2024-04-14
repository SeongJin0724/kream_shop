import Products from "../components/content/Products";
import Carousel from "../components/section/Carousel";
import Main from "./../components/section/Main";
export default function Home() {
  return (
    <Main>
      <Carousel />
      <div className="home_wrap">
        <Products />
      </div>
    </Main>
  );
}
