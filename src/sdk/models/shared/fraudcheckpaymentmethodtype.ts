/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FraudCard } from "./fraudcard";
import { Expose, Type } from "class-transformer";

/**
 * Object with information for Payment Method Type for  Fraud Check
 */
export class FraudCheckPaymentMethodType extends SpeakeasyBase {
    /**
     * Card payment instrument for fraud checking
     */
    @SpeakeasyMetadata()
    @Expose({ name: "card" })
    @Type(() => FraudCard)
    card?: FraudCard;
}
