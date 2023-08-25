const Button = ({ value }) => {
  return (
    <div className="w-full mt-3 text-center">
      <button className="px-10 py-3  bg-[#4A60A1] hover:bg-blue-700 text-white text-center rounded text-xl font-medium">
        {value}
      </button>
    </div>
  );
};

export default Button;
