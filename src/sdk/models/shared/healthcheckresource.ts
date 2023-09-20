/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * General status of all resources
 */
export enum HealthCheckResourceStatus {
    Pass = "PASS",
    Fail = "FAIL",
    Warn = "WARN",
}

/**
 * Contains health check information about a resource
 */
export class HealthCheckResource extends SpeakeasyBase {
    /**
     * General status of all resources
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: HealthCheckResourceStatus;
}
