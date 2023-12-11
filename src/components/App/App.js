import "./App.css";

import Marquee from "../Marquee/Marquee";
import Header from "../Header/Header";
import Contacts from "../Contacts/Contacts";
import Intro from "../Intro/Intro";
import Footer from "../Footer/Footer";
import DoneCards from "../DoneCards/DoneCards";
import WorkCards from "../WorkCards/WorkCards";
import StudyCards from "../StudyCards/StudyCards";
import TodoCards from "../TodoCards/TodoCards";

function App() {
  return (
    <div className="App">
      <Marquee />
      <Header />
      <Contacts />
      <Intro />
      <DoneCards />
      <WorkCards />
      <StudyCards />
      <TodoCards />
      <Footer />
    </div>
  );
}

export default App;
