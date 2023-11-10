/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Version1 } from "./version1";
import { Version2 } from "./version2";
import { Expose, Type } from "class-transformer";

/**
 * Contains information about payer authentication using 3-D Secure authentication
 */
export class ThreeDS extends SpeakeasyBase {
    /**
     * Identifier provided by the merchant plug in system (MPI) or scheme directory server during payer authentication using 3-D Secure authentication.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "authenticationTransactionId" })
    authenticationTransactionId?: string;

    /**
     * Base 64 encoded cryptogram received during authorization to verify that the integrity of data contained within a payment request matches what was originally authorized during authentication. This field is specifically used for card authorizations.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "authenticationValue" })
    authenticationValue?: string;

    /**
     * Indicates 3-D Secure program protocol used in the transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "threeDSProgramProtocol" })
    threeDSProgramProtocol?: string;

    /**
     * Contains information about payer authentication using 3-D Secure authentication version 1
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version1" })
    @Type(() => Version1)
    version1?: Version1;

    /**
     * Contains information about payer authentication using 3-D Secure authentication version 2
     */
    @SpeakeasyMetadata()
    @Expose({ name: "version2" })
    @Type(() => Version2)
    version2?: Version2;
}
