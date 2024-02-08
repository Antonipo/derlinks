import { useGroup } from "../context/LinkContext";
import { Link, useNavigate } from "react-router-dom";

function GroupCars({ group }) {
  const navigate = useNavigate();
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
    <div className="bg-zinc-800 w-full p-2 rounded-md">
      <header>
        <div className="flex flex-row items-center h-10">
          <div
            className="flex-auto h-11 flex items-center cursor-pointer"
            onClick={() => navigate(`/links/${group.group_id}`)}
          >
            <div className="flex pl-7 ">
              <strong>{group.group_name}</strong>
            </div>
          </div>
          <div className="flex flex-row pr-7">
            <button
              className="bg-blue-500 hover:bg-yellow-600 text-white p-1 rounded-md"
              onClick={(event) => openLinksGroup(event)}
            >
              Open
            </button>
            <button>
              <Link
                className="bg-blue-500 hover:bg-yellow-600 text-white p-1 rounded-md m-1"
                to={`/group/${group.group_id}`}
              >
                Edit
              </Link>
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white p-1 rounded-md"
              onClick={(event) => {
                deleteGroup(group.group_id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default GroupCars;
