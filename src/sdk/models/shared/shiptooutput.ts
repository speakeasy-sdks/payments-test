/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Object containing information about the recipients
 */
export class ShipToOutput extends SpeakeasyBase {
    /**
     * Description of shipping or delivery method
     */
    @SpeakeasyMetadata()
    @Expose({ name: "shippingDescription" })
    shippingDescription?: string;
}
