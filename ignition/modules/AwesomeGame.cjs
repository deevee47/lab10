// ignition/modules/AwesomeGame.cjs
const { buildModule } = require("@nomicfoundation/ignition-core");

module.exports = buildModule("AwesomeModule", (m) => {
  const awesomeGame = m.contract("AwesomeGame");
  return { awesomeGame };
});
