import { Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { ZERO_ADDRESS } from '~app-toolkit/constants/address';
import { AppTokenTemplatePositionFetcher } from '~position/template/app-token.template.position-fetcher';

import { StargateViemContractFactory } from '../contracts';
import { StargateEth } from '../contracts/viem';

export abstract class StargateEthTokenFetcher extends AppTokenTemplatePositionFetcher<StargateEth> {
  abstract stargateEthAddress: string;

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(StargateViemContractFactory) protected readonly contractFactory: StargateViemContractFactory,
  ) {
    super(appToolkit);
  }

  getContract(address: string) {
    return this.contractFactory.stargateEth({ address, network: this.network });
  }

  getAddresses() {
    return [this.stargateEthAddress];
  }

  async getUnderlyingTokenDefinitions() {
    return [{ address: ZERO_ADDRESS, network: this.network }];
  }

  async getPricePerShare() {
    return [1];
  }
}
