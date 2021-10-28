const Tea = artifacts.require("Tea");

contract("Tea", accounts => {
  const owner = accounts[0];

  it("should allow the house to create tokens", async () => {
    const instance = await Tea.deployed();
    console.log(instance);
    await instance.brewTea(owner, "tokenURI", { from: owner});
    console.log("Created the token");
    const tokenOwner = await instance.ownerOf.call(1);
    console.log("Owner of");
    assert.equal(tokenOwner, owner);
    const tokenURI = await instance.tokenURI.call(1);
    assert.equal(tokenURI, "tokenURI");
  });
  
})
