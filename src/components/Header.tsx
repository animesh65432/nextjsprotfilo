import Link from "next/link";
const Header = () => {
  return (
    <div className="flex items-center  bg-slate-600 h-24 justify-around">
      <Link href="/">
        <div className="bg-slate-800 text-white rounded-lg w-20 text-center py-2 hover:bg-slate-700">
          Home
        </div>
      </Link>

      <Link href="/projects">
        <div className="bg-slate-800 text-white rounded-lg w-20 text-center py-2 hover:bg-slate-700">
          Projects
        </div>
      </Link>
      <Link href="/contactme">
        <div className="bg-slate-800 text-white rounded-lg w-24 text-center py-2 hover:bg-slate-700">
          Contact Me
        </div>
      </Link>
    </div>
  );
};

export default Header;
