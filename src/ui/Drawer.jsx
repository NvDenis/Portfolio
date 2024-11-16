import "./Drawer.css";

const Drawer = ({ isOpen, setIsOpen, children }) => {
  return (
    <div
      className={`fixed inset-0 duration-300 h-screen w-screen z-10  ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className={`fixed inset-0 bg-overlay`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`fixed z-20 top-0 duration-300 drawer  right-0 h-screen w-64  shadow-lg ${
          isOpen ? "translate-x-[0]" : "translate-x-[100%]"
        } `}
      >
        {children}
      </div>
    </div>
  );
};
export default Drawer;
