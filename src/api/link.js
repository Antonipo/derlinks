import axios from "./axios";

// Group-link
export const createGroupApi = (group) => axios.post("/group", group);
export const getGroupsApi = () => axios.get("/group");
export const getGroupApi = (id) => axios.get(`/group/${id}`);
export const deleteGroupApi = (id) => axios.delete(`/group/${id}`);
export const updateGroupApi = (id, group) => axios.put(`/group/${id}`, group);

// Links
export const createLinkApi = (link) => axios.post("/link", link);
export const getLinksApi = (id) => axios.get(`/links/${id}`);
export const deleteLinkApi = (id) => axios.delete(`/link/${id}`)
