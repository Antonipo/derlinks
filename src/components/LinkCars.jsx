import { Link } from "react-router-dom";
import { useGroup } from "../context/LinkContext";

function LinkCars({ links }) {
  const {deleteLink} = useGroup()
  return (
    <div className="bg-zinc-800 p-7 rounded-xl dark:bg-neutral-700/70">
        <h3 className="text-xl font-semibold mb-7">{links.name}</h3>
        <Link to={links.url} className="font-medium leading-7 text-gray-500 mb-6 dark:text-gray-400">{links.url}</Link>
        <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={() => {
              deleteLink(links.link_id);
            }}
          >
            Delete
          </button>
    </div>
  );
}

export default LinkCars;
