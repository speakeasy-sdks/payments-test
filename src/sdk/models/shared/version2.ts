/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Contains value returned in Authentication Response Message (ARes). Y=Authentication successful ; N=Authentication failed ; U=Authentication unavailable ; A=Attempted authentication ;
 */
export enum Version2ThreeDSTransactionStatus {
    Y = "Y",
    N = "N",
    U = "U",
    A = "A",
}

/**
 * Contains information about payer authentication using 3-D Secure authentication version 2
 */
export class Version2 extends SpeakeasyBase {
    /**
     * Contains value returned in Authentication Response Message (ARes). Y=Authentication successful ; N=Authentication failed ; U=Authentication unavailable ; A=Attempted authentication ;
     */
    @SpeakeasyMetadata()
    @Expose({ name: "threeDSTransactionStatus" })
    threeDSTransactionStatus?: Version2ThreeDSTransactionStatus;

    /**
     * Contains code indicating the reason for the transaction status in threeDSTransactionStatus.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "threeDSTransactionStatusReasonCode" })
    threeDSTransactionStatusReasonCode?: string;
}