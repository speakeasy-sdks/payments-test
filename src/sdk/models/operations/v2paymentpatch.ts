/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class V2PaymentPatchRequest extends SpeakeasyBase {
    /**
     * Identifier for the transaction
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

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
     * The payment update request.
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    paymentPatch: shared.PaymentPatch;

    /**
     * Merchant identifier for the request. The value must be unique.
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=request-id" })
    requestId: string;
}

export class V2PaymentPatchResponse extends SpeakeasyBase {
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
    rawResponse?: AxiosResponse;

    /**
     * Success
     */
    @SpeakeasyMetadata()
    paymentResponse?: shared.PaymentResponse;
}
