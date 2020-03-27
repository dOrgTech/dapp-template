import { BigNumber } from 'utils/bignumber';
import { ValidationStatus } from './utils/validators';

export interface BigNumberMap {
    [index: string]: BigNumber;
}

export interface StringMap {
    [index: string]: string;
}

export interface NumberMap {
    [index: string]: number;
}

export interface MarketAssetMap {
    [index: string]: MarketAsset;
}

export interface MarketAsset {
    id: string;
    symbol: string;
    name: string;
    price?: MarketAssetPrice;
}

export interface MarketAssetPrice {
    value: BigNumber;
    currency: string;
}

// Indexed by Symbol
export interface MarketAssetPriceMap {
    [index: string]: MarketAssetPrice;
}

// Token Address -> checked
export interface CheckboxMap {
    [index: string]: Checkbox;
}

// Token -> amount
export interface InputMap {
    [index: string]: Input;
}

export interface Input {
    value: string;
    touched: boolean;
    validation: ValidationStatus;
}

export interface Checkbox {
    checked: boolean;
    touched: boolean;
}
