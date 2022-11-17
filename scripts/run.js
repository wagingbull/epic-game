const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Merchant", "Pirate", "Swashbuckler"],       // Names
    ["https://i.imgur.com/R1hiu6L.jpg", // Images
    "https://i.imgur.com/AufEo8J.jpg",
    "https://i.imgur.com/RALlCwA.jpg"],
    [200, 100, 150],                    // HP values
    [35, 75, 50],                       // Attack damage values
    [100, 20, 50]                       // Money values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();