import catLove from "./catLove.png";

const loaderImg = <img src={catLove} alt="" />;

const Loader = () => {
  return (
    <>
      <h2>You're Only A Whisker Away......</h2>
      {loaderImg}
    </>
  );
};

export default Loader;
