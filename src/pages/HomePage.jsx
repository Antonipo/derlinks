import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="bg-zinc-700 flex flex-row flex-wrap relative h-[700px] items-center">
      <div className="flex-auto ">
        <div className=" flex-column w-min-[300px]  pl-2">
          <h2 className=" font-[1000] text-8xl pb-19 ">DER-LINKS</h2>
          <p className="pt-1">Guarda, agrupa y abre tus links donde quieras</p>
          <Link to="/login">
          <button className="bg-zinc-600 hover:bg-white hover:text-gray-800 font-semibold pb-1 px-2 mt-1 border border-gray-400 rounded shadow">Ingresa</button>
          </Link>
        </div>
      </div>
      <div className=" w-[300px] h-[700px] flex-auto">
        <img src="/images/person1.png"/>
      </div>
    </div>

  );
}

export default HomePage