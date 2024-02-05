import { useGroup } from "../context/LinkContext";
import { Link } from "react-router-dom";

function GroupCars({ group }) {
  const { deleteGroup } = useGroup();

  const openLinksGroup = (event) => {
    const links = group.links;
    links.forEach((link) => {
      window.open(link.url, "_blank");
    });
  };

  const stopButtonClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      onClick={(event) => openLinksGroup(event)}
      className="bg-zinc-800 max-w-md w-full p-10 rounded-md cursor-pointer"
    >
      <header>
        <h1 className="text-2xl font-bold">{group.group_name}</h1>
        <div className="flex gap-x-3 items-center py-3">
          <Link
            to={`/links/${group.group_id}`}
            className="bg-blue-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
            onClick={(event) => stopButtonClick(event)}
          >
            Open
          </Link>
          <Link
            to={`/group/${group.group_id}`}
            onClick={(event) => stopButtonClick(event)}
          >
            Edit
          </Link>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={(event) => {
              deleteGroup(group.group_id);
              stopButtonClick(event);
            }}
          >
            Delete
          </button>
        </div>
      </header>
    </div>
  );
}

export default GroupCars;
