import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './stop.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    RentalOrderStopped: new LogEvent<([seaportOrderHash: string, stopper: string] & {seaportOrderHash: string, stopper: string})>(
        abi, '0x93ec3857013e8ed6a6948c31a37c12a335c730d3f5894c07c4474b4fe755c487'
    ),
}

export const functions = {
    ESCRW: new Func<[], {}, string>(
        abi, '0x8dba9561'
    ),
    STORE: new Func<[], {}, string>(
        abi, '0x507f1465'
    ),
    changeKernel: new Func<[newKernel_: string], {newKernel_: string}, []>(
        abi, '0x4657b36c'
    ),
    configureDependencies: new Func<[], {}, Array<string>>(
        abi, '0x9459b875'
    ),
    isActive: new Func<[], {}, boolean>(
        abi, '0x22f3e2d4'
    ),
    kernel: new Func<[], {}, string>(
        abi, '0xd4aae0c4'
    ),
    reclaimRentalOrder: new Func<[rentalOrder: ([seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint] & {seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint})], {rentalOrder: ([seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint] & {seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint})}, []>(
        abi, '0x4b251fe3'
    ),
    requestPermissions: new Func<[], {}, Array<([keycode: string, funcSelector: string] & {keycode: string, funcSelector: string})>>(
        abi, '0x5924be70'
    ),
    setActiveStatus: new Func<[activate_: boolean], {activate_: boolean}, []>(
        abi, '0xec7404b1'
    ),
    setFee: new Func<[feeNumerator: bigint], {feeNumerator: bigint}, []>(
        abi, '0x69fe0e2d'
    ),
    skim: new Func<[token: string, to: string], {token: string, to: string}, []>(
        abi, '0x712b772f'
    ),
    stopRent: new Func<[order: ([seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint] & {seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint})], {order: ([seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint] & {seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint})}, []>(
        abi, '0xf1c9e188'
    ),
    stopRentBatch: new Func<[orders: Array<([seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint] & {seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint})>], {orders: Array<([seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint] & {seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint})>}, []>(
        abi, '0xca540d2f'
    ),
}

export class Contract extends ContractBase {

    ESCRW(): Promise<string> {
        return this.eth_call(functions.ESCRW, [])
    }

    STORE(): Promise<string> {
        return this.eth_call(functions.STORE, [])
    }

    isActive(): Promise<boolean> {
        return this.eth_call(functions.isActive, [])
    }

    kernel(): Promise<string> {
        return this.eth_call(functions.kernel, [])
    }

    requestPermissions(): Promise<Array<([keycode: string, funcSelector: string] & {keycode: string, funcSelector: string})>> {
        return this.eth_call(functions.requestPermissions, [])
    }
}
