const HeroBar = () => {
  return (
    <div className="flex justify-between items-center h-14 m-5">
      {/* Name and Logo */}
      <h2 className="font-alliance text-xl font-semibold tracking-wide">
        efrenmdza
      </h2>
      <img className="h-14" src="./public/efren-logo.png" alt="efren logo" />
    </div>
  );
};

export default HeroBar;
