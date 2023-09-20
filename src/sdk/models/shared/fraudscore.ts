/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Object for Fraud Score Information
 */
export class FraudScore extends SpeakeasyBase {
    /**
     * A locator whose value identifies the formatted numeric address for routing voice or data communications via telephony, to reach a party. NOTE: Telephone number formats may vary; this field can include domestic and international telephone numbers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "aNITelephoneNumber" })
    aNITelephoneNumber?: string;

    /**
     * The label for a web browser which is used to access and view websites for the merchant's products and services by consumer who is making a purchase.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cardholderBrowserInformation" })
    cardholderBrowserInformation?: string;

    /**
     * The monetary value of items that are typically locked or stored behind the counter and aren't available for general selection on store shelves by customers.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fencibleItemAmount" })
    fencibleItemAmount?: number;

    /**
     * Provides textual information about the purchase of a product or service via an online retailer that is stored via a digital basket tha enables consumers to select products, review what they selected and make modifications before finalizing the purchase.  Supplemental: In this context, User (merchant) defined information may be included such as fraud rule values. Examples of fraud rules value may be a maximum basket value, a maximum product quantity, etc.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fraudCheckShoppingCart" })
    fraudCheckShoppingCart?: string;

    /**
     * Indicates the fraud checking rules that flagged the payment transaction as potentially fraudulent are returned to the merchant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isFraudRuleReturn" })
    isFraudRuleReturn?: boolean;

    /**
     * Identifies an interaction between a customer and a representative with the Firm within a given application tool.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sessionId" })
    sessionId?: string;

    /**
     * The label given to combination of the Web Address Top Level and the Web Address Second Level domain identfiers. This is commonly referred to as the website name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "websiteRootDomainName" })
    websiteRootDomainName?: string;
}