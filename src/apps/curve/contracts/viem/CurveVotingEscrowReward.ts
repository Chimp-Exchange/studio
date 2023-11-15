/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { getContract, GetContractReturnType, PublicClient } from 'viem';

export const curveVotingEscrowRewardAbi = [
  {
    name: 'CommitAdmin',
    inputs: [
      {
        type: 'address',
        name: 'admin',
        indexed: false,
      },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'ApplyAdmin',
    inputs: [
      {
        type: 'address',
        name: 'admin',
        indexed: false,
      },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'ToggleAllowCheckpointToken',
    inputs: [
      {
        type: 'bool',
        name: 'toggle_flag',
        indexed: false,
      },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'CheckpointToken',
    inputs: [
      {
        type: 'uint256',
        name: 'time',
        indexed: false,
      },
      {
        type: 'uint256',
        name: 'tokens',
        indexed: false,
      },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'Claimed',
    inputs: [
      {
        type: 'address',
        name: 'recipient',
        indexed: true,
      },
      {
        type: 'uint256',
        name: 'amount',
        indexed: false,
      },
      {
        type: 'uint256',
        name: 'claim_epoch',
        indexed: false,
      },
      {
        type: 'uint256',
        name: 'max_epoch',
        indexed: false,
      },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    outputs: [],
    inputs: [
      {
        type: 'address',
        name: '_voting_escrow',
      },
      {
        type: 'uint256',
        name: '_start_time',
      },
      {
        type: 'address',
        name: '_token',
      },
      {
        type: 'address',
        name: '_admin',
      },
      {
        type: 'address',
        name: '_emergency_return',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    name: 'checkpoint_token',
    outputs: [],
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    name: 've_for_at',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [
      {
        type: 'address',
        name: '_user',
      },
      {
        type: 'uint256',
        name: '_timestamp',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'checkpoint_total_supply',
    outputs: [],
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    name: 'claim',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    name: 'claim',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [
      {
        type: 'address',
        name: '_addr',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    name: 'claim_many',
    outputs: [
      {
        type: 'bool',
        name: '',
      },
    ],
    inputs: [
      {
        type: 'address[20]',
        name: '_receivers',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    name: 'burn',
    outputs: [
      {
        type: 'bool',
        name: '',
      },
    ],
    inputs: [
      {
        type: 'address',
        name: '_coin',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    name: 'commit_admin',
    outputs: [],
    inputs: [
      {
        type: 'address',
        name: '_addr',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    name: 'apply_admin',
    outputs: [],
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    name: 'toggle_allow_checkpoint_token',
    outputs: [],
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    name: 'kill_me',
    outputs: [],
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    name: 'recover_balance',
    outputs: [
      {
        type: 'bool',
        name: '',
      },
    ],
    inputs: [
      {
        type: 'address',
        name: '_coin',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    name: 'start_time',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'time_cursor',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'time_cursor_of',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [
      {
        type: 'address',
        name: 'arg0',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'user_epoch_of',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [
      {
        type: 'address',
        name: 'arg0',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'last_token_time',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'tokens_per_week',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [
      {
        type: 'uint256',
        name: 'arg0',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'voting_escrow',
    outputs: [
      {
        type: 'address',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'token',
    outputs: [
      {
        type: 'address',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'total_received',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'token_last_balance',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 've_supply',
    outputs: [
      {
        type: 'uint256',
        name: '',
      },
    ],
    inputs: [
      {
        type: 'uint256',
        name: 'arg0',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'admin',
    outputs: [
      {
        type: 'address',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'future_admin',
    outputs: [
      {
        type: 'address',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'can_checkpoint_token',
    outputs: [
      {
        type: 'bool',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'emergency_return',
    outputs: [
      {
        type: 'address',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'is_killed',
    outputs: [
      {
        type: 'bool',
        name: '',
      },
    ],
    inputs: [],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export type CurveVotingEscrowReward = typeof curveVotingEscrowRewardAbi;
export type CurveVotingEscrowRewardContract = GetContractReturnType<CurveVotingEscrowReward, PublicClient>;

export class CurveVotingEscrowReward__factory {
  static connect(address: string, client: PublicClient) {
    return getContract({ address, abi: curveVotingEscrowRewardAbi, publicClient: client });
  }
}