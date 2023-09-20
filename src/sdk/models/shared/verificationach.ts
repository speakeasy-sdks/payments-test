/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { AccountType } from "./accounttype";
import { PaymentType } from "./paymenttype";
import { Expose, Transform } from "class-transformer";

/**
 * Indicates the type of ACH verification being performed.
 */
export enum VerificationACHACHVerificationType {
    Basic = "BASIC",
    AccountStatus = "ACCOUNT_STATUS",
    AccountOwner = "ACCOUNT_OWNER",
    PreNoteCredit = "PRE_NOTE_CREDIT",
    PreNoteDebit = "PRE_NOTE_DEBIT",
}

/**
 * Classifies the type of identifier.
 */
export enum VerificationACHConsumerVerificationIdType {
    UsDl = "US_DL",
    UsMilitary = "US_MILITARY",
    Passport = "PASSPORT",
    ResAlienId = "RES_ALIEN_ID",
    StateId = "STATE_ID",
    StudentId = "STUDENT_ID",
    ForeignDl = "FOREIGN_DL",
    CanDl = "CAN_DL",
    MexDl = "MEX_DL",
    OthPrimId = "OTH_PRIM_ID",
    MatConsularId = "MAT_CONSULAR_ID",
}

/**
 * Verification of ACH account
 */
export class VerificationACHInput extends SpeakeasyBase {
    /**
     * Identifies a unique occurrence of a payment account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountNumber" })
    accountNumber?: string;

    /**
     * Type of banking account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountType" })
    accountType?: AccountType;

    /**
     * Indicates the type of ACH verification being performed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "achVerificationType" })
    achVerificationType?: VerificationACHACHVerificationType;

    /**
     * A unique identifier assigned by a government agency. Examples include Driver's License number, green card id, and Passport number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "consumerVerificationId" })
    consumerVerificationId?: string;

    /**
     * Classifies a geographic area that represents a first level, legal and political subdivision of a country; for example, Virginia, Bavaria.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "consumerVerificationIdState" })
    consumerVerificationIdState?: string;

    /**
     * Classifies the type of identifier.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "consumerVerificationIdType" })
    consumerVerificationIdType?: VerificationACHConsumerVerificationIdType;

    /**
     * Identifies the routing and transit number. In the United  States it's 8-9 numeric characters.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "financialInstitutionRoutingNumber" })
    financialInstitutionRoutingNumber?: string;

    /**
     * Specifies the year month and day on which the individual was born.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "individualBirthDate" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    individualBirthDate?: RFCDate;

    /**
     * Identifies the last four digits of the government issued (SSN, EIN, TIN).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last4SSN" })
    last4SSN?: string;

    /**
     * Identifies how accountholders  initiated debits to their accounts .
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paymentType" })
    paymentType?: PaymentType;
}

/**
 * Verification of ACH account
 */
export class VerificationACHOutput extends SpeakeasyBase {
    /**
     * Type of banking account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountType" })
    accountType?: AccountType;

    /**
     * Indicates the type of ACH verification being performed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "achVerificationType" })
    achVerificationType?: VerificationACHACHVerificationType;

    /**
     * A unique identifier assigned by a government agency. Examples include Driver's License number, green card id, and Passport number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "consumerVerificationId" })
    consumerVerificationId?: string;

    /**
     * Classifies a geographic area that represents a first level, legal and political subdivision of a country; for example, Virginia, Bavaria.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "consumerVerificationIdState" })
    consumerVerificationIdState?: string;

    /**
     * Classifies the type of identifier.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "consumerVerificationIdType" })
    consumerVerificationIdType?: VerificationACHConsumerVerificationIdType;

    /**
     * Identifies the routing and transit number. In the United  States it's 8-9 numeric characters.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "financialInstitutionRoutingNumber" })
    financialInstitutionRoutingNumber?: string;

    /**
     * Specifies the year month and day on which the individual was born.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "individualBirthDate" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    individualBirthDate?: RFCDate;

    /**
     * Identifies the last four digits of the government issued (SSN, EIN, TIN).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last4SSN" })
    last4SSN?: string;

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
}
