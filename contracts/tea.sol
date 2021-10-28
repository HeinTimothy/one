pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

contract Tea is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  address internal house;

  constructor() ERC721("Tea", "TEA") {
    house = msg.sender;
  }

  modifier isHouse() {
    require(msg.sender == house, "Not approved to be brewing tea");
    _;
  }

  event Brew(uint256 tokenId);

  function brewTea(address owner, string memory tokenURI) public isHouse returns(uint256) {
    _tokenIds.increment();

    uint256 newTokenId = _tokenIds.current();
    _mint(owner, newTokenId);
    _setTokenURI(newTokenId, tokenURI);
    emit Brew(newTokenId);
    return newTokenId;
  }

}
