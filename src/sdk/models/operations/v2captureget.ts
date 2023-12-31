/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class V2CaptureGetRequest extends SpeakeasyBase {
    /**
     * Identifier for the merchant account
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=merchant-id" })
    merchantId: string;

    /**
     * Identifier for the minor release version
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=minorVersion" })
    minorVersion?: string;

    /**
     * Merchant identifier for the request. The value must be unique.
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=request-id" })
    requestId: string;

    /**
     * Merchant identifier for the request. The value must be unique.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestIdentifier" })
    requestIdentifier: string;
}

export class V2CaptureGetResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * Success
     */
    @SpeakeasyMetadata()
    paymentResponse?: shared.PaymentResponse;
}
