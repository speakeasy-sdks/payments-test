/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Contains response information related to account updater request
 */
export class AccountUpdater extends SpeakeasyBase {
    /**
     * Enrolled merchants may request real-time Account Updater service by indicating TRUE for eligible recurring or stored transactions and bypass service by indicating FALSE.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requestAccountUpdater" })
    requestAccountUpdater?: boolean;
}
