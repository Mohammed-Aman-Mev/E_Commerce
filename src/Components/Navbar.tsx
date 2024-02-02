const Navbar = () => {
  return (
    <nav className="w-full bg-orange-500 flex items-center justify-between px-5 py-3">
      <div>
        <h3 className="font-bold text-2xl">LOGO</h3>
      </div>
      <div className="flex px-3 justify-between items-center w-96">
        <button className="px-4 py-2 bg-orange-400 rounded-md font-bold hover:bg-orange-600 hover:text-white">
          Payments
        </button>
        <button className="px-4 py-2 bg-orange-400 rounded-md font-bold hover:bg-orange-600 hover:text-white">
          shipping
        </button>
        <button className="px-4 py-2 bg-orange-400 rounded-md font-bold hover:bg-orange-600 hover:text-white">
          carts
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
