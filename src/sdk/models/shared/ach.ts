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
