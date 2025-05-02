const { buildModule } = require("@nomicfoundation/ignition-core");

const AwesomeModule = buildModule("AwesomeModule", (m) => {
  const awesomeGame = m.contract("AwesomeGame");
  return { awesomeGame };
});

module.exports = AwesomeModule;
