const Navbar = () => {
  const navbarSections = ["about", "projects", "skills", "contact"];

  return (
    <div className="flex h-14 m-5">
      <nav className="flex w-full justify-end items-center h-14 gap-3">
        <ul className="flex w-full justify-end items-center h-14 gap-3">
          {navbarSections.map((item, key) => (
            <li
              key={key}
              className="font-alliance font-medium text-xl text-white"
            >
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
