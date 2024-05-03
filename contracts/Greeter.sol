// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
contract Greeter {
    // State variable to store the greeting
    string public greeting;
    // Constructor to set the initial greeting
    constructor(string memory _greeting) {
        greeting = _greeting;
    }
    function getGreeting() public view returns (string memory) {
        return greeting;
    }
    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}