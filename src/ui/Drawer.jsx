import "./Drawer.css";

const Drawer = ({ isOpen, setIsOpen, children }) => {
  console.log("isOpen", isOpen);

  return (
    <div
      className={`fixed inset-0 h-screen w-screen z-10 opacity-0 duration-300 invisible ${
        isOpen && "opacity-100 visible"
      }`}
    >
      <div
        className={`fixed inset-0 bg-overlay`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`absolute z-20 top-0 right-0 h-screen w-64 drawer shadow-lg translate-x-full ${
          isOpen && "translate-x-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
export default Drawer;
