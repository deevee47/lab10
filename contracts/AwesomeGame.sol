// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract AwesomeGame is ERC1155 {
    uint256 public constant GOLD = 0;
    uint256 public constant SILVER = 1;
    uint256 public constant SWORD = 2;
    uint256 public constant SHIELD = 3;
    uint256 public constant CROWN = 4;

    constructor() ERC1155("https://ipfs.io/ipfs/bafybeie63kkbx55uc6izhwmge7eymovpwz6af6lxc7ogrlyhoxvns4emsy.json") {
        _mint(msg.sender, GOLD, 10 ** 18, "");
        _mint(msg.sender, SILVER, 10 ** 18, "");
        _mint(msg.sender, SWORD, 1000, "");
        _mint(msg.sender, SHIELD, 1000, "");
        _mint(msg.sender, CROWN, 1, "");
    }
}
