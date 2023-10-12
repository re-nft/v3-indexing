import { type DataHandlerContext, type Log } from "@subsquid/evm-processor";

import * as spec from "../abi/rental-factory";
import { type Fields, type NETWORK } from "../consts";
import { type Store } from "../db";
import { EntityBuffer } from "../entityBuffer";
import { RentalFactoryEventRentalSafeDeployment } from "../model";

export function parseEvent(
  ctx: DataHandlerContext<Store>,
  log: Log<Fields>,
  chain: NETWORK,
): void {
  try {
    switch (log.topics[0]) {
      case spec.events.RentalSafeDeployment.topic: {
        const e = spec.events.RentalSafeDeployment.decode(log);
        EntityBuffer.add(
          new RentalFactoryEventRentalSafeDeployment({
            id: log.id,
            network: chain,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transactionHash,
            contract: log.address,
            eventName: "RentalSafeDeployment",
            safe: e[0],
            rentalManager: e[1],
            guard: e[2],
            owner: e[3],
            nonce: e[4],
          }),
        );
        break;
      }
    }
    // TODO: worth logging network too
  } catch (error) {
    ctx.log.error(
      {
        error,
        blockNumber: log.block.height,
        blockHash: log.block.hash,
        address: log.address,
      },
      `Unable to decode event "${log.topics[0]}"`,
    );
  }
}
