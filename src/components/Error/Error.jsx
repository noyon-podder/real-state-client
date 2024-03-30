import error from "../../assets/error.png";

const Error = () => {
  // const navigate = useNavigate();
  // setInterval(() => {
  //   navigate("/");
  // }, 5000);
  return (
    <div className="flex items-center justify-center flex-col py-5">
      <img src={error} alt="" />
      <h1 className="font-extrabold text-gray-950 text-3xl my-5">
        Page Not Found
      </h1>
    </div>
  );
};

export default Error;
