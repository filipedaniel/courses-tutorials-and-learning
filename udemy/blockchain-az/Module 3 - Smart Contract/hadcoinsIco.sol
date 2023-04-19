
pragma solidity >=0.7.0 <0.9.0;

contract hadcoin_ico {
    
    // introducing the total number of hadcoins for sale
    uint public maxHadCoins = 1000000;

    // Intoducing the USD to HadCoins conversion rate
    uint public usdToHadCoins = 1000;

    // Introducing the total number of HadCoins that have been bought by the investors
    uint public totalHadCoinsBought = 0;
    
    // Mapping from the investor address to it's equity in Hadcoins and USD
    mapping(address => uint) equityHadcoins;
    mapping(address => uint) equityUsd;

    // Checking if an investor can buy Hadcoins
    modifier canBuyHadcoins(uint usdInvested) {
        require(usdInvested * usdToHadCoins +  totalHadCoinsBought <= maxHadCoins);
        _;
    }
    
    // Getting the equity in Hadcoins of an investor
    function equityInHadcoins(address investor) external returns (uint) {
        return equityHadcoins[investor];
    }

    // Getting the equity in USD of and investor
    function equityInUsd(address investor) external returns (uint) {
        return equityUsd[investor];
    }

    // Buing Hadcoins
    function buyHadcoins(address investor, uint usdInvested) external canBuyHadcoins(usdInvested) {
        uint hadcoinsBought = usdInvested * usdToHadCoins;
        equityHadcoins[investor] += hadcoinsBought;
        equityUsd[investor] = equityHadcoins[investor] / 1000;
        totalHadCoinsBought += hadcoinsBought;
    }

    // Selling Hadcoins
    function sellHadcoins(address investor, uint hadcoinSold) external {
        equityHadcoins[investor] -= hadcoinSold;
        equityUsd[investor] = equityHadcoins[investor] / 1000;
        totalHadCoinsBought -= hadcoinSold;
    }
    
}