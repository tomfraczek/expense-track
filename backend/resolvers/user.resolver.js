import { users } from "../dummyData/data.js";

const userResolver = {
  Query: {
    users: () => users,
    user: (_, { userId }) => users.find((user) => user._id === userId),
  },
  // Mutations: {},
};

export default userResolver;
