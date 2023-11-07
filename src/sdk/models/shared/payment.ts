/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountHolder } from "./accountholder";
import { AccountOnFile } from "./accountonfile";
import { CaptureMethod } from "./capturemethod";
import { Currency } from "./currency";
import { InitiatorType } from "./initiatortype";
import { Installment } from "./installment";
import { Merchant } from "./merchant";
import { PartialAuthorizationSupport } from "./partialauthorizationsupport";
import { PaymentMethodType } from "./paymentmethodtype";
import { Recurring } from "./recurring";
import { RetailAddenda } from "./retailaddenda";
import { RiskInput } from "./risk";
import { ShipTo } from "./shipto";
import { TransactionRoutingOverrideList } from "./transactionroutingoverridelist";
import { Expose, Type } from "class-transformer";

/**
 * Request information for payment endpoint
 */
export class Payment extends SpeakeasyBase {
    /**
     * Card owner properties
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountHolder" })
    @Type(() => AccountHolder)
    accountHolder?: AccountHolder;

    /**
     * The label given to indicate if the account number is stored, not stored, or is going to be stored by a merchant. Valid values: STORED NOT_STORED TO_BE_STORED
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountOnFile" })
    accountOnFile?: AccountOnFile;

    /**
     * Specifies the monetary value of the transaction performed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: number;

    /**
     * To capture via separate API call, send captureMethod= ?Manual.? For immediate capture, send captureMethod= ?Now.? For automated delayed capture based on merchant profile setting (default is 120 minutes), send captureMethod= ?Delayed.?
     */
    @SpeakeasyMetadata()
    @Expose({ name: "captureMethod" })
    captureMethod?: CaptureMethod;

    /**
     * Describes the currency type of the transaction
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency: Currency;

    /**
     * Describes the initiator of the transaction for the stored credential framework (MIT/CIT)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "initiatorType" })
    initiatorType?: InitiatorType;

    /**
     * Object containing information in the file
     */
    @SpeakeasyMetadata()
    @Expose({ name: "installment" })
    @Type(() => Installment)
    installment?: Installment;

    /**
     * Indicates if the amount is final and will not change
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isAmountFinal" })
    isAmountFinal?: boolean;

    /**
     * (Deprecated) For auth only, send isCapture=false. For sale or update an authorized payment to capture, send isCapture=true.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isCapture" })
    isCapture?: boolean;

    /**
     * Information about the merchant
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchant" })
    @Type(() => Merchant)
    merchant: Merchant;

    /**
     * A unique merchant assigned identifier for the confirmation of goods and/or services purchased. The merchant order provides the merchant a reference to the prices, quantity and description of goods and/or services to be delivered for all transactions included in the sale.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchantOrderNumber" })
    merchantOrderNumber?: string;

    /**
     * Identifies a unique occurrence of a transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "originalTransactionId" })
    originalTransactionId?: string;

    /**
     * Indicates that the issuer has provided the merchant an authorization for a portion of the amount requested. This service provides an alternative to receiving a decline when the available card balance is not sufficient to approve a transaction in full.In this context, this indicate if merchant support parial authorization.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "partialAuthorizationSupport" })
    partialAuthorizationSupport?: PartialAuthorizationSupport;

    /**
     * paymentType
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paymentMethodType" })
    @Type(() => PaymentMethodType)
    paymentMethodType: PaymentMethodType;

    /**
     * Recurring Payment Object
     */
    @SpeakeasyMetadata()
    @Expose({ name: "recurring" })
    @Type(() => Recurring)
    recurring?: Recurring;

    /**
     * Retail inductry specific attributes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "retailAddenda" })
    @Type(() => RetailAddenda)
    retailAddenda?: RetailAddenda;

    /**
     * Response information for transactions
     */
    @SpeakeasyMetadata()
    @Expose({ name: "risk" })
    @Type(() => RiskInput)
    risk?: RiskInput;

    /**
     * Object containing information about the recipients
     */
    @SpeakeasyMetadata()
    @Expose({ name: "shipTo" })
    @Type(() => ShipTo)
    shipTo?: ShipTo;

    /**
     * Provides textual information about charges or payments on statements. Using clear and accurate statement descriptors can reduce chargebacks and disputes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "statementDescriptor" })
    statementDescriptor?: string;

    /**
     * List of transaction routing providers where the transaction be routed preferred by the merchant .
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transactionRoutingOverrideList" })
    transactionRoutingOverrideList?: TransactionRoutingOverrideList[];
}
