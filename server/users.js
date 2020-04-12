const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );
  //searches for duplicate user and kickout if duplicate exists
  if (existingUser) {
    return { error: "Username is taken" };
  }

  const user = { id, name, room };
  users.push(user);

  return { user };
};

//removes user from existing array
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

//find and returns a user
const getUser = (id) => users.find((user) => user.id === id);
//returns all users from a specific room
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
