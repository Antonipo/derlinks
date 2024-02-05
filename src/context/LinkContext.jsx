import { createContext, useContext, useState } from "react";
import {
  getGroupsApi,
  createGroupApi,
  updateGroupApi,
  getGroupApi,
  deleteGroupApi,
  createLinkApi,
  getLinksApi,
  deleteLinkApi,
} from "../api/link";

const LinkContext = createContext();

export const useGroup = () => {
  const context = useContext(LinkContext);

  if (!context) {
    throw new Error("useGroup must be used within a LinkProvider");
  }
  return context;
};

export function LinkProvider({ children }) {
  const [group, setGroup] = useState([]);
  const [links, setLinks] = useState([]);

  const createGroup = async (group) => {
    try {
      await createGroupApi(group);
    } catch (error) {
      console.log(error);
    }
  };

  const getGroups = async () => {
    try {
      const res = await getGroupsApi();
      setGroup(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getGroup = async (id) => {
    try {
      const res = await getGroupApi(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGroup = async (id) => {
    try {
      const resDelete = await deleteGroupApi(id);
      if (resDelete.status == 204)
        setGroup(group.filter((group) => group.group_id != id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateGroup = async (id, data) => {
    try {
      await updateGroupApi(id, data);
    } catch (error) {
      console.log(error);
    }
  };

  const createLink = async (link) => {
    try {
      await createLinkApi(link);
    } catch (error) {
      console.log(error);
    }
  };

  const getLinks = async (id) => {
    try {
      const resLinks = await getLinksApi(id);
      setLinks(resLinks.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLink = async(id) =>{
    try {
      const resDelete = await deleteLinkApi(id);
      if (resDelete.status == 204)
        setLinks(links.filter((links) => links.link_id != id));
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <LinkContext.Provider
      value={{
        group,
        updateGroup,
        createGroup,
        getGroups,
        getGroup,
        deleteGroup,
        links,
        setLinks,
        getLinks,
        createLink,
        deleteLink,
      }}
    >
      {children}
    </LinkContext.Provider>
  );
}
