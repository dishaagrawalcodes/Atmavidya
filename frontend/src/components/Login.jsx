import background from "/assets/bg_1.jpg";

const Login = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center overflow-y-hidden"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Welcome to My Page</h1>
      </div>
    </div>
  );
};

export default Login;
