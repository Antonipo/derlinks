import { useEffect } from "react";
import { useGroup } from "../context/LinkContext";
import { Link, useNavigate } from "react-router-dom";
import LinksCars from "./LinksCars";


function GroupCars({ group }) {
  const navigate = useNavigate();
  const { deleteGroup,getGroups } = useGroup();
  
  useEffect(() => {
    getGroups();
  }, []);


  const openLinksGroup = (event) => {
    const links = group.links;
    links.forEach((link) => {
      window.open(link.url, "_blank");
    });
  };

  const toggleList = () => {
      var list= document.getElementById(`${group.group_id}`)
      list.style.display = (list.style.display==='none'|| list.style.display==='')? 'block':'none';
      var buttons= document.getElementById(`buttons${group.group_id}`)
      buttons.style.display = (buttons.style.display==='block'|| buttons.style.display==='')? 'none':'block';
    };

  return (
    <div className="bg-zinc-800 w-full p-2 rounded-md">
      <header>
        <div className="flex flex-row items-center h-10">
          <div
            className="flex-auto h-11 flex items-center cursor-pointer"
            onClick={() => {
              toggleList();
            }}
          >
            <div className="flex pl-7 ">
              <strong>{group.group_name}</strong>
            </div>
          </div>
          <div id={`buttons${group.group_id}`} className="flex flex-row pr-7 block">
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
              onClick={() => {
                deleteGroup(group.group_id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
        <div id={group.group_id} className="hidden">
          {group.links.map((links) => (
            <ul className="pl-0 list-disc " key={links.link_id}>
              <LinksCars links={links} group_id={group.group_id}/>
            </ul>
          ))}
          <li className="pl-11 pt-1 cursor-pointer">
            <a
              onClick={() => {
                navigate(`/add-link/${group.group_id}`);
              }}
            >
              Add link
            </a>
          </li>
        </div>
      </header>
    </div>
  );
}

export default GroupCars;
