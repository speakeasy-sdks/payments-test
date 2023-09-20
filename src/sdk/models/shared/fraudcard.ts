/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expiry } from "./expiry";
import { Expose, Type } from "class-transformer";

/**
 * Card payment instrument for fraud checking
 */
export class FraudCardInput extends SpeakeasyBase {
    /**
     * Identifies a unique occurrence of a payment account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountNumber" })
    accountNumber: string;

    /**
     * Expiration date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expiry" })
    @Type(() => Expiry)
    expiry?: Expiry;
}