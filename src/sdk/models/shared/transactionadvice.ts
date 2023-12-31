/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Transaction advice information for Amex transaction
 */
export class TransactionAdvice extends SpeakeasyBase {
    /**
     * Textual information containing Level 3 data for American Express Advice Addendum
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transactionAdviceText" })
    transactionAdviceText?: string;
}
