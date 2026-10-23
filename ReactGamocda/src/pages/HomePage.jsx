import Counter from "../components/Counter";
import useToggle from "../hooks/useToggle";
import "./HomePage.css";

export default function HomePage() {
  const [isVisible, toggle] = useToggle();

  return (
    <>
      <div className="home-page">
        <h1>მთავარი გვერდი</h1>
        <Counter />
      </div>
      <div className="welcome">
        {isVisible && <p>კეთილი იყოს თქვენი მობრძანება ბიბლიოთეკაში</p>}
        <button onClick={toggle}>ჩვენება / დამალვა</button>
      </div>
    </>
  );
}
