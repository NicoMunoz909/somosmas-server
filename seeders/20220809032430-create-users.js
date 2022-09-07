"use strict";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

var password = "$2a$10$xuyIkqKznI3hEE4N/i0SI.2PASpjFGgHhRHy2zP2AT9Kj6gIMjFAS"

const image =
  "https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png";
const values = [
  ["John", "Doe", "johndoe@test.com", password, 4, image],
  ["Ziaja", "Berg", "ziajaberg@test.com", password, 14, image]
];
const users = values.map((val) => ({
  firstName: val[0],
  lastName: val[1],
  email: val[2],
  password: val[3],
  roleId: val[4],
  image: val[5],
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [...users], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", {
      [Op.or]: { email: { [Op.like]: "%@test.com" } },
    });
  },
};
