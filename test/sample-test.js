const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) () => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Token", () => {
  let token

  beforeEach(async() => {
    const Token = await ethers.getContractFactory('Token')
    token = await Token.deploy('Dapp University','DAPP'.'1000000')
  })

  describe('Deployment', () => {
    const name = 'Dapp University'
    const symbol = 'DAPP'
    const decimals = '18'
    const totalSupply = tokens('1000000')
  
  it('has correct name',async () => {
    expect(await token.name()).to.equal(name) 
   })

    it('has correct symbol',async () => {
        expect(await token.symbol()).to.equal(name) 
     })  

    it('has correct decimals',async () => {
       expect(await token.decimals()).to.equal(name) 
    })

    it('has correct total supply',async () => {
      expect(await token.totalSupply()).to.equal(name) 
    })  

  })
})

//  console.log("made it here");
//  it("Should return the new greeting once it's changed", async () => {
//    const Greeter = await ethers.getContractFactory("Greeter");
//    const greeter = await Greeter.deploy("Hello, world!");
//    await greeter.deployed();

//    expect(await greeter.getGreeting()).to.equal("Hello, world!"); //greeter.greet()

//    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//    // wait until the transaction is mined
//    await setGreetingTx.wait();

//    expect(await greeter.getGreeting()).to.equal("Hola, mundo!"); // greeter.greet
//  });
//});
