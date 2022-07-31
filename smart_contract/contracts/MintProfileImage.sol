// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// OpenZeppelin contracts
import "@openzeppelin/contracts/token/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ProfileImageNft is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter _tokenIds;

    mapping(uint256 => string) _tokenURIs;

    struct RenderToken {
        uint256 id;
        string uri;
        string space;
    };

    constructor() ERC721("ProfileImageNFTs", "PIN") {};

    function _setTokenURI (uint256 tokenId, string _tokenURI) internal {
        _tokenURIs[tokenId] = _tokenURI;
    };

    function tokenURI(uint256 tokenId) public view virtual override returns (string) {
        require(_exists(tokenId), "URI does not exist on that ID");
        string memory _RUri = _tokenURIs[tokenId]
        return _RUri;
    };

};