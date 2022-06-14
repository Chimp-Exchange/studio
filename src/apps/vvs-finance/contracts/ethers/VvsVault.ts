/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export interface VvsVaultInterface extends utils.Interface {
  functions: {
    'MAX_CALL_FEE()': FunctionFragment;
    'MAX_PERFORMANCE_FEE()': FunctionFragment;
    'MAX_WITHDRAW_FEE()': FunctionFragment;
    'MAX_WITHDRAW_FEE_PERIOD()': FunctionFragment;
    'admin()': FunctionFragment;
    'available()': FunctionFragment;
    'balanceOf()': FunctionFragment;
    'calculateHarvestVVSRewards()': FunctionFragment;
    'calculateTotalPendingVVSRewards()': FunctionFragment;
    'callFee()': FunctionFragment;
    'craftsman()': FunctionFragment;
    'deposit(uint256)': FunctionFragment;
    'emergencyWithdraw()': FunctionFragment;
    'getPricePerFullShare()': FunctionFragment;
    'harvest()': FunctionFragment;
    'inCaseTokensGetStuck(address)': FunctionFragment;
    'lastHarvestedTime()': FunctionFragment;
    'owner()': FunctionFragment;
    'pause()': FunctionFragment;
    'paused()': FunctionFragment;
    'performanceFee()': FunctionFragment;
    'receiptToken()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setAdmin(address)': FunctionFragment;
    'setCallFee(uint256)': FunctionFragment;
    'setPerformanceFee(uint256)': FunctionFragment;
    'setTreasury(address)': FunctionFragment;
    'setWithdrawFee(uint256)': FunctionFragment;
    'setWithdrawFeePeriod(uint256)': FunctionFragment;
    'token()': FunctionFragment;
    'totalShares()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'treasury()': FunctionFragment;
    'unpause()': FunctionFragment;
    'userInfo(address)': FunctionFragment;
    'withdraw(uint256)': FunctionFragment;
    'withdrawAll()': FunctionFragment;
    'withdrawFee()': FunctionFragment;
    'withdrawFeePeriod()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'MAX_CALL_FEE'
      | 'MAX_PERFORMANCE_FEE'
      | 'MAX_WITHDRAW_FEE'
      | 'MAX_WITHDRAW_FEE_PERIOD'
      | 'admin'
      | 'available'
      | 'balanceOf'
      | 'calculateHarvestVVSRewards'
      | 'calculateTotalPendingVVSRewards'
      | 'callFee'
      | 'craftsman'
      | 'deposit'
      | 'emergencyWithdraw'
      | 'getPricePerFullShare'
      | 'harvest'
      | 'inCaseTokensGetStuck'
      | 'lastHarvestedTime'
      | 'owner'
      | 'pause'
      | 'paused'
      | 'performanceFee'
      | 'receiptToken'
      | 'renounceOwnership'
      | 'setAdmin'
      | 'setCallFee'
      | 'setPerformanceFee'
      | 'setTreasury'
      | 'setWithdrawFee'
      | 'setWithdrawFeePeriod'
      | 'token'
      | 'totalShares'
      | 'transferOwnership'
      | 'treasury'
      | 'unpause'
      | 'userInfo'
      | 'withdraw'
      | 'withdrawAll'
      | 'withdrawFee'
      | 'withdrawFeePeriod',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'MAX_CALL_FEE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MAX_PERFORMANCE_FEE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MAX_WITHDRAW_FEE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MAX_WITHDRAW_FEE_PERIOD', values?: undefined): string;
  encodeFunctionData(functionFragment: 'admin', values?: undefined): string;
  encodeFunctionData(functionFragment: 'available', values?: undefined): string;
  encodeFunctionData(functionFragment: 'balanceOf', values?: undefined): string;
  encodeFunctionData(functionFragment: 'calculateHarvestVVSRewards', values?: undefined): string;
  encodeFunctionData(functionFragment: 'calculateTotalPendingVVSRewards', values?: undefined): string;
  encodeFunctionData(functionFragment: 'callFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'craftsman', values?: undefined): string;
  encodeFunctionData(functionFragment: 'deposit', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'emergencyWithdraw', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPricePerFullShare', values?: undefined): string;
  encodeFunctionData(functionFragment: 'harvest', values?: undefined): string;
  encodeFunctionData(functionFragment: 'inCaseTokensGetStuck', values: [string]): string;
  encodeFunctionData(functionFragment: 'lastHarvestedTime', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pause', values?: undefined): string;
  encodeFunctionData(functionFragment: 'paused', values?: undefined): string;
  encodeFunctionData(functionFragment: 'performanceFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'receiptToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setAdmin', values: [string]): string;
  encodeFunctionData(functionFragment: 'setCallFee', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setPerformanceFee', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setTreasury', values: [string]): string;
  encodeFunctionData(functionFragment: 'setWithdrawFee', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'setWithdrawFeePeriod', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'token', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalShares', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
  encodeFunctionData(functionFragment: 'treasury', values?: undefined): string;
  encodeFunctionData(functionFragment: 'unpause', values?: undefined): string;
  encodeFunctionData(functionFragment: 'userInfo', values: [string]): string;
  encodeFunctionData(functionFragment: 'withdraw', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'withdrawAll', values?: undefined): string;
  encodeFunctionData(functionFragment: 'withdrawFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'withdrawFeePeriod', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'MAX_CALL_FEE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MAX_PERFORMANCE_FEE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MAX_WITHDRAW_FEE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MAX_WITHDRAW_FEE_PERIOD', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'admin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'available', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'calculateHarvestVVSRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'calculateTotalPendingVVSRewards', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'callFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'craftsman', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emergencyWithdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPricePerFullShare', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'harvest', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'inCaseTokensGetStuck', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastHarvestedTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pause', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'performanceFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'receiptToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAdmin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setCallFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPerformanceFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setTreasury', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setWithdrawFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setWithdrawFeePeriod', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'token', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalShares', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'treasury', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unpause', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawFeePeriod', data: BytesLike): Result;

  events: {
    'Deposit(address,uint256,uint256,uint256)': EventFragment;
    'Harvest(address,uint256,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Pause()': EventFragment;
    'Paused(address)': EventFragment;
    'SetAdmin(address)': EventFragment;
    'SetCallFee(uint256)': EventFragment;
    'SetPerformanceFee(uint256)': EventFragment;
    'SetTreasury(address)': EventFragment;
    'SetWithdrawFee(uint256)': EventFragment;
    'SetWithdrawFeePeriod(uint256)': EventFragment;
    'Unpause()': EventFragment;
    'Unpaused(address)': EventFragment;
    'Withdraw(address,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Deposit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Harvest'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Pause'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetAdmin'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetCallFee'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetPerformanceFee'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetTreasury'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetWithdrawFee'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetWithdrawFeePeriod'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Unpause'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Unpaused'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Withdraw'): EventFragment;
}

export interface DepositEventObject {
  sender: string;
  amount: BigNumber;
  shares: BigNumber;
  lastDepositedTime: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber, BigNumber, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface HarvestEventObject {
  sender: string;
  performanceFee: BigNumber;
  callFee: BigNumber;
}
export type HarvestEvent = TypedEvent<[string, BigNumber, BigNumber], HarvestEventObject>;

export type HarvestEventFilter = TypedEventFilter<HarvestEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface PauseEventObject {}
export type PauseEvent = TypedEvent<[], PauseEventObject>;

export type PauseEventFilter = TypedEventFilter<PauseEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface SetAdminEventObject {
  admin: string;
}
export type SetAdminEvent = TypedEvent<[string], SetAdminEventObject>;

export type SetAdminEventFilter = TypedEventFilter<SetAdminEvent>;

export interface SetCallFeeEventObject {
  callFee: BigNumber;
}
export type SetCallFeeEvent = TypedEvent<[BigNumber], SetCallFeeEventObject>;

export type SetCallFeeEventFilter = TypedEventFilter<SetCallFeeEvent>;

export interface SetPerformanceFeeEventObject {
  performanceFee: BigNumber;
}
export type SetPerformanceFeeEvent = TypedEvent<[BigNumber], SetPerformanceFeeEventObject>;

export type SetPerformanceFeeEventFilter = TypedEventFilter<SetPerformanceFeeEvent>;

export interface SetTreasuryEventObject {
  treasury: string;
}
export type SetTreasuryEvent = TypedEvent<[string], SetTreasuryEventObject>;

export type SetTreasuryEventFilter = TypedEventFilter<SetTreasuryEvent>;

export interface SetWithdrawFeeEventObject {
  withdrawFee: BigNumber;
}
export type SetWithdrawFeeEvent = TypedEvent<[BigNumber], SetWithdrawFeeEventObject>;

export type SetWithdrawFeeEventFilter = TypedEventFilter<SetWithdrawFeeEvent>;

export interface SetWithdrawFeePeriodEventObject {
  withdrawFeePeriod: BigNumber;
}
export type SetWithdrawFeePeriodEvent = TypedEvent<[BigNumber], SetWithdrawFeePeriodEventObject>;

export type SetWithdrawFeePeriodEventFilter = TypedEventFilter<SetWithdrawFeePeriodEvent>;

export interface UnpauseEventObject {}
export type UnpauseEvent = TypedEvent<[], UnpauseEventObject>;

export type UnpauseEventFilter = TypedEventFilter<UnpauseEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface WithdrawEventObject {
  sender: string;
  amount: BigNumber;
  shares: BigNumber;
}
export type WithdrawEvent = TypedEvent<[string, BigNumber, BigNumber], WithdrawEventObject>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface VvsVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VvsVaultInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    MAX_CALL_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_PERFORMANCE_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_WITHDRAW_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_WITHDRAW_FEE_PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    available(overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceOf(overrides?: CallOverrides): Promise<[BigNumber]>;

    calculateHarvestVVSRewards(overrides?: CallOverrides): Promise<[BigNumber]>;

    calculateTotalPendingVVSRewards(overrides?: CallOverrides): Promise<[BigNumber]>;

    callFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    craftsman(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    emergencyWithdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    getPricePerFullShare(overrides?: CallOverrides): Promise<[BigNumber]>;

    harvest(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    inCaseTokensGetStuck(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    lastHarvestedTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    performanceFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    receiptToken(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    setAdmin(_admin: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    setCallFee(
      _callFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setPerformanceFee(
      _performanceFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setTreasury(
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setWithdrawFee(
      _withdrawFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setWithdrawFeePeriod(
      _withdrawFeePeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    totalShares(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    unpause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        shares: BigNumber;
        lastDepositedTime: BigNumber;
        vvsAtLastUserAction: BigNumber;
        lastUserActionTime: BigNumber;
      }
    >;

    withdraw(
      _shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    withdrawAll(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    withdrawFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdrawFeePeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  MAX_CALL_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_PERFORMANCE_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_WITHDRAW_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_WITHDRAW_FEE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  admin(overrides?: CallOverrides): Promise<string>;

  available(overrides?: CallOverrides): Promise<BigNumber>;

  balanceOf(overrides?: CallOverrides): Promise<BigNumber>;

  calculateHarvestVVSRewards(overrides?: CallOverrides): Promise<BigNumber>;

  calculateTotalPendingVVSRewards(overrides?: CallOverrides): Promise<BigNumber>;

  callFee(overrides?: CallOverrides): Promise<BigNumber>;

  craftsman(overrides?: CallOverrides): Promise<string>;

  deposit(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  emergencyWithdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  getPricePerFullShare(overrides?: CallOverrides): Promise<BigNumber>;

  harvest(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  inCaseTokensGetStuck(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  lastHarvestedTime(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  performanceFee(overrides?: CallOverrides): Promise<BigNumber>;

  receiptToken(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  setAdmin(_admin: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  setCallFee(
    _callFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setPerformanceFee(
    _performanceFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setTreasury(
    _treasury: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setWithdrawFee(
    _withdrawFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setWithdrawFeePeriod(
    _withdrawFeePeriod: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  totalShares(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  treasury(overrides?: CallOverrides): Promise<string>;

  unpause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  userInfo(
    arg0: string,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      shares: BigNumber;
      lastDepositedTime: BigNumber;
      vvsAtLastUserAction: BigNumber;
      lastUserActionTime: BigNumber;
    }
  >;

  withdraw(
    _shares: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  withdrawAll(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;

  withdrawFeePeriod(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    MAX_CALL_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_PERFORMANCE_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_WITHDRAW_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_WITHDRAW_FEE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<string>;

    available(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(overrides?: CallOverrides): Promise<BigNumber>;

    calculateHarvestVVSRewards(overrides?: CallOverrides): Promise<BigNumber>;

    calculateTotalPendingVVSRewards(overrides?: CallOverrides): Promise<BigNumber>;

    callFee(overrides?: CallOverrides): Promise<BigNumber>;

    craftsman(overrides?: CallOverrides): Promise<string>;

    deposit(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    emergencyWithdraw(overrides?: CallOverrides): Promise<void>;

    getPricePerFullShare(overrides?: CallOverrides): Promise<BigNumber>;

    harvest(overrides?: CallOverrides): Promise<void>;

    inCaseTokensGetStuck(_token: string, overrides?: CallOverrides): Promise<void>;

    lastHarvestedTime(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    performanceFee(overrides?: CallOverrides): Promise<BigNumber>;

    receiptToken(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setAdmin(_admin: string, overrides?: CallOverrides): Promise<void>;

    setCallFee(_callFee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setPerformanceFee(_performanceFee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setTreasury(_treasury: string, overrides?: CallOverrides): Promise<void>;

    setWithdrawFee(_withdrawFee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setWithdrawFeePeriod(_withdrawFeePeriod: BigNumberish, overrides?: CallOverrides): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    treasury(overrides?: CallOverrides): Promise<string>;

    unpause(overrides?: CallOverrides): Promise<void>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        shares: BigNumber;
        lastDepositedTime: BigNumber;
        vvsAtLastUserAction: BigNumber;
        lastUserActionTime: BigNumber;
      }
    >;

    withdraw(_shares: BigNumberish, overrides?: CallOverrides): Promise<void>;

    withdrawAll(overrides?: CallOverrides): Promise<void>;

    withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawFeePeriod(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    'Deposit(address,uint256,uint256,uint256)'(
      sender?: string | null,
      amount?: null,
      shares?: null,
      lastDepositedTime?: null,
    ): DepositEventFilter;
    Deposit(sender?: string | null, amount?: null, shares?: null, lastDepositedTime?: null): DepositEventFilter;

    'Harvest(address,uint256,uint256)'(
      sender?: string | null,
      performanceFee?: null,
      callFee?: null,
    ): HarvestEventFilter;
    Harvest(sender?: string | null, performanceFee?: null, callFee?: null): HarvestEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;

    'Pause()'(): PauseEventFilter;
    Pause(): PauseEventFilter;

    'Paused(address)'(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    'SetAdmin(address)'(admin?: null): SetAdminEventFilter;
    SetAdmin(admin?: null): SetAdminEventFilter;

    'SetCallFee(uint256)'(callFee?: null): SetCallFeeEventFilter;
    SetCallFee(callFee?: null): SetCallFeeEventFilter;

    'SetPerformanceFee(uint256)'(performanceFee?: null): SetPerformanceFeeEventFilter;
    SetPerformanceFee(performanceFee?: null): SetPerformanceFeeEventFilter;

    'SetTreasury(address)'(treasury?: null): SetTreasuryEventFilter;
    SetTreasury(treasury?: null): SetTreasuryEventFilter;

    'SetWithdrawFee(uint256)'(withdrawFee?: null): SetWithdrawFeeEventFilter;
    SetWithdrawFee(withdrawFee?: null): SetWithdrawFeeEventFilter;

    'SetWithdrawFeePeriod(uint256)'(withdrawFeePeriod?: null): SetWithdrawFeePeriodEventFilter;
    SetWithdrawFeePeriod(withdrawFeePeriod?: null): SetWithdrawFeePeriodEventFilter;

    'Unpause()'(): UnpauseEventFilter;
    Unpause(): UnpauseEventFilter;

    'Unpaused(address)'(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    'Withdraw(address,uint256,uint256)'(sender?: string | null, amount?: null, shares?: null): WithdrawEventFilter;
    Withdraw(sender?: string | null, amount?: null, shares?: null): WithdrawEventFilter;
  };

  estimateGas: {
    MAX_CALL_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_PERFORMANCE_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_WITHDRAW_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_WITHDRAW_FEE_PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    available(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(overrides?: CallOverrides): Promise<BigNumber>;

    calculateHarvestVVSRewards(overrides?: CallOverrides): Promise<BigNumber>;

    calculateTotalPendingVVSRewards(overrides?: CallOverrides): Promise<BigNumber>;

    callFee(overrides?: CallOverrides): Promise<BigNumber>;

    craftsman(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(_amount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    emergencyWithdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    getPricePerFullShare(overrides?: CallOverrides): Promise<BigNumber>;

    harvest(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    inCaseTokensGetStuck(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    lastHarvestedTime(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    performanceFee(overrides?: CallOverrides): Promise<BigNumber>;

    receiptToken(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setAdmin(_admin: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setCallFee(_callFee: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setPerformanceFee(
      _performanceFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setTreasury(_treasury: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setWithdrawFee(
      _withdrawFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setWithdrawFeePeriod(
      _withdrawFeePeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    userInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(_shares: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    withdrawAll(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawFeePeriod(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_CALL_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_PERFORMANCE_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_WITHDRAW_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_WITHDRAW_FEE_PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    available(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculateHarvestVVSRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculateTotalPendingVVSRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    craftsman(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    getPricePerFullShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    harvest(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    inCaseTokensGetStuck(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    lastHarvestedTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    performanceFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    receiptToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    setAdmin(
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setCallFee(
      _callFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setPerformanceFee(
      _performanceFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setTreasury(
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setWithdrawFee(
      _withdrawFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setWithdrawFeePeriod(
      _withdrawFeePeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpause(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    userInfo(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    withdrawAll(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    withdrawFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawFeePeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}