import {getUsers} from "./service";

export const getUsersHandler = async () => {
  return await getUsers();
};
