import studyImg from "../images/knowledge1.png";
const Home = () => {
  return (
    <div>
      <main className>
        <h1 className="main-h1">Unlock Your Potential</h1>
        <h2 className="main-h2">Knowledge is Power!</h2>
        <img className="main-image" src={studyImg} alt="image1" />
      </main>
    </div>
  );
};

export default Home;
