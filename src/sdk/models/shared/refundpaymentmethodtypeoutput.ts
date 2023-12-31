/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AchOutput } from "./achoutput";
import { RefundCardOutput } from "./refundcardoutput";
import { TransactionReference } from "./transactionreference";
import { Expose, Type } from "class-transformer";

/**
 * Object with one of the payment method type applicable for refund processing
 */
export class RefundPaymentMethodTypeOutput extends SpeakeasyBase {
    /**
     * Object for ACH (Automated Clearing House) payment method which occurs whenever someone instructs the ACH network to ?push? money from their account to someone else's. This is mostly used in USA.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ach" })
    @Type(() => AchOutput)
    ach?: AchOutput;

    /**
     * Card payment instrument for refund
     */
    @SpeakeasyMetadata()
    @Expose({ name: "card" })
    @Type(() => RefundCardOutput)
    card?: RefundCardOutput;

    /**
     * Object for refund transaction reference
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transactionReference" })
    @Type(() => TransactionReference)
    transactionReference?: TransactionReference;
}
