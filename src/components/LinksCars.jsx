import { Link } from "react-router-dom";
import { useGroup } from "../context/LinkContext";

function linksCars({links,group_id}) {
  const { deleteLink } = useGroup();
    return (
      <div className="flex justify-between pt-1 pl-11 pr-7">
        <li className="flex flex-row overflow-hidden h-7">
          <img className="h-5 pt-2 pr-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAVUlEQVR4nO3NuQ3AIBQEUTrH4e96nVgCcSXeQQRMAfNSuh2fpKABoYhKQQMMor6gAS+ieUEDHkTrMgnk3/MF4JlPAN98AHjnDeCfVwAz/4AHm9+29AJS4hc5tBT7uAAAAABJRU5ErkJggg=="></img>
          <Link to={links.url} target="_blank" className="flex overflow-hidden">
            {links.name} - {links.url}
          </Link>
        </li>
        <img src="/icons/delete.svg"  className="h-5 fill-red-600 cursor-pointer"  onClick={() => {
            deleteLink(links.link_id, group_id);
          }}/>
        
      </div>
    );
}

export default linksCars;
