/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Source Account Information
 */
export class SourceAccountInformation extends SpeakeasyBase {
    /**
     * The label given to a financial institution authorized by a government to accept deposits, make loans, pay interest, clear checks, and provide other financial services to its customers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bankName" })
    bankName?: string;

    /**
     * Codifies the unique value that identifies a particular bank in the worldwide economy. The 8 to 11 digit code is based on ISO 9362 standards. This code has several aliases including SWIFT Code, SWIFT Bank Code and Bank Identification Code (BIC). ISO 9362:2014 specifies the elements and structure of a universal identifier code for financial and non-financial institutions where an international identifier is required to facilitate automated processing of information for financial services.  The BIC is used for addressing messages, routing business transactions and identifying business parties. This Standard applies to organizations and excludes individual persons.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "internationalBusinessIdentifierCode" })
    internationalBusinessIdentifierCode?: string;
}
