# Rupay Protocol

A decentralized stablecoin protocol backed by exogenous collateral (ETH, BTC, USDC).

## Overview

Rupay is an overcollateralized stablecoin with the following properties:

- **Pegged to USD**: 1 RUP = $1
- **Decentralized**: Algorithmic stability mechanism
- **Collateral Types**: 
  - ETH 
  - BTC
  - Other  
- **Minimum Collateral Ratio**: 200%

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Foundry](https://book.getfoundry.sh/)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/rupay.git
cd rupay
```

2. Install dependencies
```bash
forge install
```

3. Build the project
```bash
forge build
```

### Testing

Run all tests:
```bash
forge test
```

Run specific test:
```bash
forge test --mt <test_name>
```

Run with verbosity:
```bash
forge test -vvvv
```

### Deployment

1. Set up environment variables
```bash
cp .env.example .env
# Add your private key and RPC URLs
```

2. Deploy to network
```bash
forge script script/DeployRup.s.sol --rpc-url <your_rpc_url> --broadcast
```

## Project Structure

```
rupay/
├── src/                    # Source contracts
│   ├── Rupay.sol          # Main stablecoin contract
│   └── RupIssuer.sol      # Collateral management & minting
├── test/                   # Tests
│   ├── unit/              # Unit tests
│   └── fuzz/              # Fuzz & invariant tests
└── script/                 # Deployment scripts
```

## Core Mechanics

- **Minting**: Users deposit collateral and mint RUP
- **Burning**: Users burn RUP to redeem collateral
- **Liquidation**: Positions below 150% collateral ratio can be liquidated
- **Oracle**: Uses Chainlink price feeds for collateral valuation

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT