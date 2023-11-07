/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountType } from "./accounttype";
import { PaymentType } from "./paymenttype";
import { Expose } from "class-transformer";

/**
 * Object for ACH (Automated Clearing House) payment method which occurs whenever someone instructs the ACH network to ?push? money from their account to someone else's. This is mostly used in USA.
 */
export class Ach extends SpeakeasyBase {
    /**
     * Identifies a unique occurrence of a payment account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountNumber" })
    accountNumber: string;

    /**
     * Type of banking account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountType" })
    accountType?: AccountType;

    /**
     * Identifies the routing and transit number. In the United  States it's 8-9 numeric characters.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "financialInstitutionRoutingNumber" })
    financialInstitutionRoutingNumber: string;

    /**
     * Indicates If a Micro-Entry  is used for account validation purposes. *Micro-Entries are defined as ACH credits of less than $1 and any offsetting ACH debits to verify a Receiver?s account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isTransactionMicroEntry" })
    isTransactionMicroEntry?: boolean;

    /**
     * Identifies how accountholders  initiated debits to their accounts .
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paymentType" })
    paymentType?: PaymentType;
}

/**
 * Object for ACH (Automated Clearing House) payment method which occurs whenever someone instructs the ACH network to ?push? money from their account to someone else's. This is mostly used in USA.
 */
export class AchOutput extends SpeakeasyBase {
    /**
     * Type of banking account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountType" })
    accountType?: AccountType;

    /**
     * Identifies the routing and transit number. In the United  States it's 8-9 numeric characters.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "financialInstitutionRoutingNumber" })
    financialInstitutionRoutingNumber: string;

    /**
     * Indicates If a Micro-Entry  is used for account validation purposes. *Micro-Entries are defined as ACH credits of less than $1 and any offsetting ACH debits to verify a Receiver?s account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isTransactionMicroEntry" })
    isTransactionMicroEntry?: boolean;

    /**
     * Identifies a concealed number associated with the card number recognized by various payment systems. This is typically concealed by storing only the first 6 and/or last 4 digits of the payment account number or some variation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "maskedAccountNumber" })
    maskedAccountNumber?: string;

    /**
     * Identifies how accountholders  initiated debits to their accounts .
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paymentType" })
    paymentType?: PaymentType;

    /**
     * Identifies a unique occurrence of a payment account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unmaskedAccountNumber" })
    unmaskedAccountNumber?: string;
}
