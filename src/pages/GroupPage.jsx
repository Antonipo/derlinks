import { useEffect } from "react";
import { useGroup } from "../context/LinkContext";
import GroupCars from "../components/GroupCars";
import { Link } from "react-router-dom";

function GroupPage() {
  const { getGroups, group } = useGroup();

  useEffect(() => {
    getGroups();
  }, []);
  if (group.length == 0)
    return (
      <div>
        <h1>No Groups</h1>
        <li>
          <Link to="/add-group">Add group</Link>
        </li>
      </div>
    );
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        {group.map((group) => (
          <GroupCars group={group} key={group.group_id} />
        ))}
      </div>
      <li>
        <Link to="/add-group">Add group</Link>
      </li>
    </div>
  );
}

export default GroupPage;
