/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Tax information in the Line Item data within the Level 3.
 */
export class LineItemTax extends SpeakeasyBase {
    /**
     * The amount added to the transaction for taxes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lineItemTaxAmount" })
    lineItemTaxAmount?: number;

    /**
     * Specifies the ratio of the tax levied by a governmental authority on a product or service.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taxPercent" })
    taxPercent?: string;

    /**
     * Codifies the form of tax applied to a transaction (e.g., 01 = Federal/National Sales Tax, 11 = Goods and Services Tax (GST), VA = Value Added Tax (VAT)).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taxTypeCode" })
    taxTypeCode?: string;
}
