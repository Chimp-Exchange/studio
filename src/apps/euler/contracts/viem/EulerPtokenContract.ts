/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { getContract, GetContractReturnType, PublicClient } from 'viem';

export const eulerPtokenContractAbi = [
  {
    inputs: [
      {
        name: 'euler_',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'underlying_',
        type: 'address',
        internalType: 'address',
      },
    ],
    type: 'constructor',
    stateMutability: 'nonpayable',
  },
  {
    anonymous: false,
    name: 'Approval',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        internalType: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        indexed: true,
        internalType: 'address',
        type: 'address',
      },
      {
        name: 'value',
        internalType: 'uint256',
        indexed: false,
        type: 'uint256',
      },
    ],
    type: 'event',
  },
  {
    inputs: [
      {
        name: 'from',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'to',
        indexed: true,
        internalType: 'address',
        type: 'address',
      },
      {
        name: 'value',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    type: 'event',
    name: 'Transfer',
    anonymous: false,
  },
  {
    name: 'allowance',
    stateMutability: 'view',
    outputs: [
      {
        type: 'uint256',
        internalType: 'uint256',
        name: '',
      },
    ],
    inputs: [
      {
        internalType: 'address',
        type: 'address',
        name: 'holder',
      },
      {
        internalType: 'address',
        type: 'address',
        name: 'spender',
      },
    ],
    type: 'function',
  },
  {
    stateMutability: 'nonpayable',
    name: 'approve',
    type: 'function',
    inputs: [
      {
        type: 'address',
        internalType: 'address',
        name: 'spender',
      },
      {
        internalType: 'uint256',
        type: 'uint256',
        name: 'amount',
      },
    ],
    outputs: [
      {
        internalType: 'bool',
        type: 'bool',
        name: '',
      },
    ],
  },
  {
    name: 'balanceOf',
    stateMutability: 'view',
    outputs: [
      {
        internalType: 'uint256',
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [
      {
        name: 'who',
        type: 'address',
        internalType: 'address',
      },
    ],
    type: 'function',
  },
  {
    name: 'claimSurplus',
    stateMutability: 'nonpayable',
    inputs: [
      {
        name: 'who',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    type: 'function',
  },
  {
    inputs: [],
    outputs: [
      {
        type: 'uint8',
        internalType: 'uint8',
        name: '',
      },
    ],
    type: 'function',
    name: 'decimals',
    stateMutability: 'view',
  },
  {
    name: 'forceUnwrap',
    stateMutability: 'nonpayable',
    inputs: [
      {
        type: 'address',
        internalType: 'address',
        name: 'who',
      },
      {
        name: 'amount',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    type: 'function',
  },
  {
    name: 'name',
    stateMutability: 'view',
    inputs: [],
    outputs: [
      {
        name: '',
        internalType: 'string',
        type: 'string',
      },
    ],
    type: 'function',
  },
  {
    stateMutability: 'view',
    name: 'symbol',
    type: 'function',
    inputs: [],
    outputs: [
      {
        name: '',
        internalType: 'string',
        type: 'string',
      },
    ],
  },
  {
    stateMutability: 'view',
    name: 'totalSupply',
    type: 'function',
    outputs: [
      {
        internalType: 'uint256',
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [],
  },
  {
    inputs: [
      {
        name: 'recipient',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        internalType: 'bool',
        type: 'bool',
      },
    ],
    type: 'function',
    name: 'transfer',
    stateMutability: 'nonpayable',
  },
  {
    inputs: [
      {
        internalType: 'address',
        type: 'address',
        name: 'from',
      },
      {
        internalType: 'address',
        type: 'address',
        name: 'recipient',
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        internalType: 'bool',
        type: 'bool',
        name: '',
      },
    ],
    type: 'function',
    name: 'transferFrom',
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    outputs: [
      {
        name: '',
        internalType: 'address',
        type: 'address',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    name: 'underlying',
  },
  {
    outputs: [],
    inputs: [
      {
        internalType: 'uint256',
        type: 'uint256',
        name: 'amount',
      },
    ],
    type: 'function',
    name: 'unwrap',
    stateMutability: 'nonpayable',
  },
  {
    name: 'wrap',
    stateMutability: 'nonpayable',
    inputs: [
      {
        type: 'uint256',
        internalType: 'uint256',
        name: 'amount',
      },
    ],
    outputs: [],
    type: 'function',
  },
] as const;

export type EulerPtokenContract = typeof eulerPtokenContractAbi;
export type EulerPtokenContractContract = GetContractReturnType<EulerPtokenContract, PublicClient>;

export class EulerPtokenContract__factory {
  static connect(address: string, client: PublicClient) {
    return getContract({ address, abi: eulerPtokenContractAbi, publicClient: client });
  }
}