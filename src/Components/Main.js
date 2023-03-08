import Days from "./Days";
import Hours from "./Hours";
import Schedule from "./Schedule";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <Days />
      <div>
        <Hours />
        <Schedule />
      </div>
    </main>
  );
};

export default Main;
