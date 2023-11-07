/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MerchantOutput } from "./merchant";
import { ResponseStatus } from "./responsestatus";
import { RiskDecision } from "./riskdecision";
import { RiskElement } from "./riskelement";
import { Expose, Type } from "class-transformer";

/**
 * Responses for the fraud check
 */
export class FraudCheckResponse extends SpeakeasyBase {
    /**
     * Message received from Issuer, network or processor. Can be blank
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hostMessage" })
    hostMessage?: string;

    /**
     * Identifies unique identifier generated by the acquirer processing system and return to merchant for reference purposes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hostReferenceId" })
    hostReferenceId?: string;

    /**
     * Information about the merchant
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchant" })
    @Type(() => MerchantOutput)
    merchant?: MerchantOutput;

    /**
     * Merchant identifier for the request. The value must be unique.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requestId" })
    requestId?: string;

    /**
     * Short explanation for response status
     */
    @SpeakeasyMetadata()
    @Expose({ name: "responseCode" })
    responseCode?: string;

    /**
     * Long explanation of response code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "responseMessage" })
    responseMessage?: string;

    /**
     * The label given to the state of a response to a request submitted by a consumer through the Firm's Application Program Interface (API) that matches a test case. Valid Values: ERROR,SUCCESS, DENIED
     */
    @SpeakeasyMetadata()
    @Expose({ name: "responseStatus" })
    responseStatus?: ResponseStatus;

    /**
     * Object containing Risk Decision information.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "riskDecision" })
    @Type(() => RiskDecision)
    riskDecision?: RiskDecision;

    /**
     * Object containing Risk Element information
     */
    @SpeakeasyMetadata()
    @Expose({ name: "riskElement" })
    @Type(() => RiskElement)
    riskElement?: RiskElement;

    /**
     * Identifier of a resource
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transactionId" })
    transactionId?: string;
}
