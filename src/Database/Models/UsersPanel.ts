export default {
  id: String,
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  create: {
    type: Date,
    default: Date.now,
  },
};
