const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) () => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Token", () => {
  let token, accounts, deployer,receiver, exchange

  beforeEach(async() => {
    const Token = await ethers.getContractFactory('Token')
    token = await Token.deploy('Dapp University','DAPP'.'1000000'))


    accounts = await ethers.getSigners()
    deployer = accounts[0]
    receiver = accounts[1]
    exchange = accounts[2]
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
        expect(await token.symbol()).to.equal(symbol) 
     })  

    it('has correct decimals',async () => {
       expect(await token.decimals()).to.equal(decimals) 
    })

    it('has correct total supply',async () => {
      expect(await token.totalSupply()).to.equal(totalSupply) 
    })  

    it('assigns total supply to deployer',async () => {
      expect(await token.balanceOf(deployer.address)).to.equal(totalSupply) 
    })  
  }) 
})

describe('Sending Tokens', () => {
  let amount, transaction, result

  describe('Success', () => {

      beforeEach(async () => {
        amount = tokens(100)
        transaction = await token.connect(deployer).transfer(receiver.address, amount)
        result = await transaction.wait()
  })
  it('transfers token balances', async () => {
    expect(await token.balanceOf(deployer.address)).to.equal(tokens())
    expect(await token.balanceOf(receiver.address)).to.equal(amount)
  })

  it('ewmits a Transfer event', async () => {
    const args = event.args
    expect(event.event).to.equal(deployer.address)
    expect(args.to).to.equal(receiver.address)
    expect(args.value).to.equal(amount)
  })

})

describe('Failure', () => {
  it('rejects insufficent balances', async () => {
    const invalidamount = tokens(100000000)
    await expect(token.connect(deployer).transfer(receiver.addess, invalidAmount)).to.be.reverted
  })

  it('rejects invalid recipent', scync () => {
    const amount = tokens(100)
    await expect(token.connect(deployer).transfer('0x0000000000000000000000000000000000000000', amount )).to.be.reverted
  })
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
