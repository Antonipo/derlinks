import { Link, useParams } from "react-router-dom";
import LinkCars from "../components/LinkCars";
import { useEffect } from "react";
import { useGroup } from "../context/LinkContext";

function LinksPage() {
  const params = useParams();
  const { getLinks, links } = useGroup();
  useEffect(() => {
    getLinks(params.id);
  }, []);
  if (links.length == 0)
    return (
      <div>
        <div>
          <Link to={"/group"}>Go back</Link>
        </div>
        <h1>No Links</h1>
        <li>
          <Link to={`/add-link/${params.id}`}>Add link</Link>
        </li>
      </div>
    );

  return (
    <div>
      <div>
        <Link to={"/group"}>Go back</Link>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {links.map((links) => (
          <LinkCars links={links} key={links.link_id} />
        ))}
      </div>
      <li>
        <Link to={`/add-link/${params.id}`}>Add link</Link>
      </li>
    </div>
  );
}

export default LinksPage;
