import { Link } from "react-router-dom";
import { useGroup } from "../context/LinkContext";
import { useState } from "react";
import ModalFormLink from "./ModalFormLink";

function linksCars({ links, group_id }) {
  const { deleteLink } = useGroup();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex justify-between pt-1 border-b-2 border-zinc-700">
      <li className="flex flex-row overflow-hidden h-7 ">
        <img
          className="h-5 pt-2 pr-1"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAVUlEQVR4nO3NuQ3AIBQEUTrH4e96nVgCcSXeQQRMAfNSuh2fpKABoYhKQQMMor6gAS+ieUEDHkTrMgnk3/MF4JlPAN98AHjnDeCfVwAz/4AHm9+29AJS4hc5tBT7uAAAAABJRU5ErkJggg=="
        ></img>
        <Link to={links.url} target="_blank" className="overflow-hidden">
          {links.name} - {links.url}
        </Link>
      </li>
      <div className="flex flex-row pr-4">
        <img
          src="/icons/edit.svg"
          className="h-5 min-w-10 cursor-pointer pr-3"
          onClick={() => setOpenModal(true)}
        />
        <img
          src="/icons/delete.svg"
          className="h-5 fill-red-600 cursor-pointer"
          onClick={() => {
            deleteLink(links.link_id, group_id);
          }}
        />
      </div>
      <ModalFormLink
        open={openModal}
        onClose={() => setOpenModal(false)}
        link={links}
      />
    </div>
  );
}

export default linksCars;
