/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Response information for transactions
 */
export class RiskInput extends SpeakeasyBase {
    /**
     * Indicates the true/false value of whether or not the transaction need to be assessed for fraud check.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requestFraudScore" })
    requestFraudScore?: boolean;

    /**
     * Risk score for token
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tokenRiskScore" })
    tokenRiskScore?: number;

    /**
     * Risk score for transaction
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transactionRiskScore" })
    transactionRiskScore?: number;
}