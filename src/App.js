import "./assets/css/tailwind.css";

function App() {
  return (
    <div className="bg-gray-900 p-20 h-screen flex justify-center items-start flex-col">
      <h1 className="text-5xl text-white">Hello CRA Tailwind 👋</h1>
      <p className="text-gray-400 mt-5 text-lg">
        Simple boilerplate code for react tailwind project
      </p>
      <button className="p-4 bg-green-600 rounded-lg font-bold text-white mt-5 hover:bg-gray-600">
        Hello Friends 🚀
      </button>
    </div>
  );
}

export default App;
