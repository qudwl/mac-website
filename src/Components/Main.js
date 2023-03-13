import Days from "./Days";
import Hours from "./Hours";
import Schedule from "./Schedule";
import "./Main.css";

const Main = (props) => {
  return (
    <main>
      <Days />
      <div>
        <Hours />
        <Schedule dark={props.dark} />
      </div>
    </main>
  );
};

export default Main;
