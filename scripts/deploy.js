const { ethers } = require("hardhat");
const { upgrades } = require("hardhat");

async function main() {
  const owners = ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"];
  const quorum = 2;
  const master = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";

  const mltsgContract = await ethers.deployContract(
    "MultiSigMaster",
    [master, owners, quorum]
  );
  const mlstgAddress = await mltsgContract.getAddress()
  console.log("Multi-Sig Master is deployed to:", mlstgAddress);
  const MultiSig = await ethers.getContractFactory("MultiSigMaster");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
