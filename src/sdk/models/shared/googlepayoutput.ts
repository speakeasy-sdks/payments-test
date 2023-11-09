/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Use is for encrypted bundles for web or Internet acceptance of digital device wallets such as Google Pay
 */
export class GooglepayOutput extends SpeakeasyBase {
    /**
     * Identifies the latitude and longitude coordinates of the digital device when it is being provisioned. Information is expressed in the order of latitude then longitude with values rounded to the nearest whole digit.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "latLong" })
    latLong?: string;
}