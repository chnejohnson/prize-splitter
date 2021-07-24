/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Splitter } from "./Splitter";

export class SplitterFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _owner: string,
    _payees: string[],
    _shares: BigNumberish[],
    overrides?: Overrides
  ): Promise<Splitter> {
    return super.deploy(
      _owner,
      _payees,
      _shares,
      overrides || {}
    ) as Promise<Splitter>;
  }
  getDeployTransaction(
    _owner: string,
    _payees: string[],
    _shares: BigNumberish[],
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owner,
      _payees,
      _shares,
      overrides || {}
    );
  }
  attach(address: string): Splitter {
    return super.attach(address) as Splitter;
  }
  connect(signer: Signer): SplitterFactory {
    return super.connect(signer) as SplitterFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Splitter {
    return new Contract(address, _abi, signerOrProvider) as Splitter;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_payees",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_shares",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Finalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "PayeeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shares_",
        type: "uint256",
      },
    ],
    name: "addPayee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finalize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isPayee",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "payee",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "account",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "released",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "shares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "state",
    outputs: [
      {
        internalType: "enum Splitter.State",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalPayees",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalReleased",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a06040526000600560006101000a81548160ff0219169083600181111562000051577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055503480156200006357600080fd5b50604051620023e2380380620023e28339818101604052810190620000899190620005bf565b81818051825114620000d2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000c9906200077b565b60405180910390fd5b600082511162000119576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200011090620007bf565b60405180910390fd5b60005b8251811015620001d057620001ba83828151811062000164577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151838381518110620001a6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516200021360201b60201c565b8080620001c7906200096c565b9150506200011c565b5050508273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505050505062000b9c565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000286576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200027d9062000759565b60405180910390fd5b60008111620002cc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002c390620007e1565b60405180910390fd5b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541462000351576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000348906200079d565b60405180910390fd5b6004829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550806000546200040891906200089b565b6000819055507f40c340f65e17194d14ddddb073d3c9f888e3cb52b5aae0c6c7706b4fbc905fac8282604051620004419291906200072c565b60405180910390a15050565b6000620004646200045e846200082c565b62000803565b905080838252602082019050828560208602820111156200048457600080fd5b60005b85811015620004b857816200049d888262000537565b84526020840193506020830192505060018101905062000487565b5050509392505050565b6000620004d9620004d3846200085b565b62000803565b90508083825260208201905082856020860282011115620004f957600080fd5b60005b858110156200052d5781620005128882620005a8565b845260208401935060208301925050600181019050620004fc565b5050509392505050565b600081519050620005488162000b68565b92915050565b600082601f8301126200056057600080fd5b8151620005728482602086016200044d565b91505092915050565b600082601f8301126200058d57600080fd5b81516200059f848260208601620004c2565b91505092915050565b600081519050620005b98162000b82565b92915050565b600080600060608486031215620005d557600080fd5b6000620005e58682870162000537565b935050602084015167ffffffffffffffff8111156200060357600080fd5b62000611868287016200054e565b925050604084015167ffffffffffffffff8111156200062f57600080fd5b6200063d868287016200057b565b9150509250925092565b6200065281620008f8565b82525050565b600062000667602c836200088a565b9150620006748262000a29565b604082019050919050565b60006200068e6032836200088a565b91506200069b8262000a78565b604082019050919050565b6000620006b5602b836200088a565b9150620006c28262000ac7565b604082019050919050565b6000620006dc601a836200088a565b9150620006e98262000b16565b602082019050919050565b600062000703601d836200088a565b9150620007108262000b3f565b602082019050919050565b62000726816200092c565b82525050565b600060408201905062000743600083018562000647565b6200075260208301846200071b565b9392505050565b60006020820190508181036000830152620007748162000658565b9050919050565b6000602082019050818103600083015262000796816200067f565b9050919050565b60006020820190508181036000830152620007b881620006a6565b9050919050565b60006020820190508181036000830152620007da81620006cd565b9050919050565b60006020820190508181036000830152620007fc81620006f4565b9050919050565b60006200080f62000822565b90506200081d828262000936565b919050565b6000604051905090565b600067ffffffffffffffff8211156200084a5762000849620009e9565b5b602082029050602081019050919050565b600067ffffffffffffffff821115620008795762000878620009e9565b5b602082029050602081019050919050565b600082825260208201905092915050565b6000620008a8826200092c565b9150620008b5836200092c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620008ed57620008ec620009ba565b5b828201905092915050565b600062000905826200090c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b620009418262000a18565b810181811067ffffffffffffffff82111715620009635762000962620009e9565b5b80604052505050565b600062000979826200092c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415620009af57620009ae620009ba565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f5061796d656e7453706c69747465723a206163636f756e74206973207468652060008201527f7a65726f20616464726573730000000000000000000000000000000000000000602082015250565b7f5061796d656e7453706c69747465723a2070617965657320616e64207368617260008201527f6573206c656e677468206d69736d617463680000000000000000000000000000602082015250565b7f5061796d656e7453706c69747465723a206163636f756e7420616c726561647960008201527f2068617320736861726573000000000000000000000000000000000000000000602082015250565b7f5061796d656e7453706c69747465723a206e6f20706179656573000000000000600082015250565b7f5061796d656e7453706c69747465723a20736861726573206172652030000000600082015250565b62000b7381620008f8565b811462000b7f57600080fd5b50565b62000b8d816200092c565b811462000b9957600080fd5b50565b60805160601c61181962000bc960003960008181610335015281816108150152610a6101526118196000f3fe6080604052600436106100ab5760003560e01c80638b83209b116100645780638b83209b146101f35780638da5cb5b146102305780639852595c1461025b578063c19d93fb14610298578063ce7c2ac2146102c3578063e33b7de314610300576100f2565b806318f9b023146100f75780631916558714610120578063366653a9146101495780633a98ef39146101865780634bb278f3146101b157806371b5bba6146101c8576100f2565b366100f2577f6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be7706100d961032b565b346040516100e892919061114b565b60405180910390a1005b600080fd5b34801561010357600080fd5b5061011e60048036038101906101199190610ee4565b610333565b005b34801561012c57600080fd5b5061014760048036038101906101429190610ebb565b610493565b005b34801561015557600080fd5b50610170600480360381019061016b9190610e92565b6107bf565b60405161017d9190611174565b60405180910390f35b34801561019257600080fd5b5061019b61080a565b6040516101a891906112ca565b60405180910390f35b3480156101bd57600080fd5b506101c6610813565b005b3480156101d457600080fd5b506101dd6109e4565b6040516101ea91906112ca565b60405180910390f35b3480156101ff57600080fd5b5061021a60048036038101906102159190610f20565b6109f1565b6040516102279190611107565b60405180910390f35b34801561023c57600080fd5b50610245610a5f565b6040516102529190611107565b60405180910390f35b34801561026757600080fd5b50610282600480360381019061027d9190610e92565b610a83565b60405161028f91906112ca565b60405180910390f35b3480156102a457600080fd5b506102ad610acc565b6040516102ba919061118f565b60405180910390f35b3480156102cf57600080fd5b506102ea60048036038101906102e59190610e92565b610adf565b6040516102f791906112ca565b60405180910390f35b34801561030c57600080fd5b50610315610b28565b60405161032291906112ca565b60405180910390f35b600033905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b89061124a565b60405180910390fd5b60008060018111156103fc577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600560009054906101000a900460ff166001811115610444577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610484576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047b906111ea565b60405180910390fd5b61048e8383610b32565b505050565b60018060018111156104ce577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600560009054906101000a900460ff166001811115610516577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610556576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054d906111ea565b60405180910390fd5b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054116105d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105cf9061126a565b60405180910390fd5b6000600154476105e89190611301565b90506000600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600054600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548461067a9190611388565b6106849190611357565b61068e91906113e2565b905060008114156106d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cb906111aa565b60405180910390fd5b80600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461071f9190611301565b600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550806001546107709190611301565b6001819055506107808482610d5f565b7fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b05684826040516107b1929190611122565b60405180910390a150505050565b600080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054119050919050565b60008054905090565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108a1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108989061124a565b60405180910390fd5b60008060018111156108dc577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600560009054906101000a900460ff166001811115610924577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b14610964576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095b906111ea565b60405180910390fd5b6001600560006101000a81548160ff021916908360018111156109b0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b02179055507f6823b073d48d6e3a7d385eeb601452d680e74bb46afe3255a7d778f3a9b1768160405160405180910390a150565b6000600480549050905090565b600060048281548110610a2d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600560009054906101000a900460ff1681565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600154905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ba2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b99906111ca565b60405180910390fd5b60008111610be5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bdc906112aa565b60405180910390fd5b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610c67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5e9061128a565b60405180910390fd5b6004829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600054610d1c9190611301565b6000819055507f40c340f65e17194d14ddddb073d3c9f888e3cb52b5aae0c6c7706b4fbc905fac8282604051610d5392919061114b565b60405180910390a15050565b80471015610da2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d999061122a565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff1682604051610dc8906110f2565b60006040518083038185875af1925050503d8060008114610e05576040519150601f19603f3d011682016040523d82523d6000602084013e610e0a565b606091505b5050905080610e4e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e459061120a565b60405180910390fd5b505050565b600081359050610e628161179e565b92915050565b600081359050610e77816117b5565b92915050565b600081359050610e8c816117cc565b92915050565b600060208284031215610ea457600080fd5b6000610eb284828501610e53565b91505092915050565b600060208284031215610ecd57600080fd5b6000610edb84828501610e68565b91505092915050565b60008060408385031215610ef757600080fd5b6000610f0585828601610e53565b9250506020610f1685828601610e7d565b9150509250929050565b600060208284031215610f3257600080fd5b6000610f4084828501610e7d565b91505092915050565b610f5281611483565b82525050565b610f6181611416565b82525050565b610f708161143a565b82525050565b610f7f81611495565b82525050565b6000610f926024836112f0565b9150610f9d82611558565b604082019050919050565b6000610fb5602c836112f0565b9150610fc0826115a7565b604082019050919050565b6000610fd8601f836112f0565b9150610fe3826115f6565b602082019050919050565b6000610ffb603a836112f0565b91506110068261161f565b604082019050919050565b600061101e601d836112f0565b91506110298261166e565b602082019050919050565b60006110416021836112f0565b915061104c82611697565b604082019050919050565b60006110646000836112e5565b915061106f826116e6565b600082019050919050565b6000611087601f836112f0565b9150611092826116e9565b602082019050919050565b60006110aa602b836112f0565b91506110b582611712565b604082019050919050565b60006110cd601d836112f0565b91506110d882611761565b602082019050919050565b6110ec81611479565b82525050565b60006110fd82611057565b9150819050919050565b600060208201905061111c6000830184610f58565b92915050565b60006040820190506111376000830185610f49565b61114460208301846110e3565b9392505050565b60006040820190506111606000830185610f58565b61116d60208301846110e3565b9392505050565b60006020820190506111896000830184610f67565b92915050565b60006020820190506111a46000830184610f76565b92915050565b600060208201905081810360008301526111c381610f85565b9050919050565b600060208201905081810360008301526111e381610fa8565b9050919050565b6000602082019050818103600083015261120381610fcb565b9050919050565b6000602082019050818103600083015261122381610fee565b9050919050565b6000602082019050818103600083015261124381611011565b9050919050565b6000602082019050818103600083015261126381611034565b9050919050565b600060208201905081810360008301526112838161107a565b9050919050565b600060208201905081810360008301526112a38161109d565b9050919050565b600060208201905081810360008301526112c3816110c0565b9050919050565b60006020820190506112df60008301846110e3565b92915050565b600081905092915050565b600082825260208201905092915050565b600061130c82611479565b915061131783611479565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561134c5761134b6114cb565b5b828201905092915050565b600061136282611479565b915061136d83611479565b92508261137d5761137c6114fa565b5b828204905092915050565b600061139382611479565b915061139e83611479565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156113d7576113d66114cb565b5b828202905092915050565b60006113ed82611479565b91506113f883611479565b92508282101561140b5761140a6114cb565b5b828203905092915050565b600061142182611459565b9050919050565b600061143382611459565b9050919050565b60008115159050919050565b60008190506114548261178a565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061148e826114a7565b9050919050565b60006114a082611446565b9050919050565b60006114b2826114b9565b9050919050565b60006114c482611459565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f53706c69747465723a206163636f756e74206973206e6f74206475652070617960008201527f6d656e7400000000000000000000000000000000000000000000000000000000602082015250565b7f5061796d656e7453706c69747465723a206163636f756e74206973207468652060008201527f7a65726f20616464726573730000000000000000000000000000000000000000602082015250565b7f53706c69747465723a206e6f7420696e20726571756972656420737461746500600082015250565b7f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260008201527f6563697069656e74206d61792068617665207265766572746564000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e6365000000600082015250565b7f53706c69747465723a2063616c6c6572206973206e6f7420746865206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b50565b7f53706c69747465723a206163636f756e7420686173206e6f2073686172657300600082015250565b7f5061796d656e7453706c69747465723a206163636f756e7420616c726561647960008201527f2068617320736861726573000000000000000000000000000000000000000000602082015250565b7f5061796d656e7453706c69747465723a20736861726573206172652030000000600082015250565b6002811061179b5761179a611529565b5b50565b6117a781611416565b81146117b257600080fd5b50565b6117be81611428565b81146117c957600080fd5b50565b6117d581611479565b81146117e057600080fd5b5056fea2646970667358221220f293c1f02c085eb8070b47c7eef9b55aeb5640e96e08d151233735a3e8efcaca64736f6c63430008040033";
