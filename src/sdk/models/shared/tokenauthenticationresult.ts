/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Returned when more information about token authentication is received from the network
 */
export class TokenAuthenticationResult extends SpeakeasyBase {
    /**
     * Token result code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: string;

    /**
     * Token result message
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}