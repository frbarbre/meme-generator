import { Troll } from "../assets";

const Navbar = () => {
  return (
    <nav className="flex flex-col-reverse xs:flex-row justify-between gap-4 items-center p-[20px] max-w-[1000px] mx-auto">
      <div className="flex gap-[6.69px] items-center">
        <img
          src={Troll}
          alt="troll-face"
          className="w-[31.31px] object-contain"
        />
        <h1 className="text-[20.75px] font-bold text-white">Meme Generator</h1>
      </div>
      <div>
        <p className="font-inter text-white text-[12px]">
          React Course - Project 3
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
