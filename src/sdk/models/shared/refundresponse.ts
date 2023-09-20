/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountHolderOutput } from "./accountholder";
import { AccountOnFile } from "./accountonfile";
import { Currency } from "./currency";
import { Information } from "./information";
import { InitiatorType } from "./initiatortype";
import { MerchantOutput } from "./merchant";
import { PaymentRequest } from "./paymentrequest";
import { RefundPaymentMethodTypeOutput } from "./refundpaymentmethodtype";
import { ResponseStatus } from "./responsestatus";
import { RetailAddenda } from "./retailaddenda";
import { TransactionRoutingOverrideList } from "./transactionroutingoverridelist";
import { TransactionState } from "./transactionstate";
import { Expose, Type } from "class-transformer";

/**
 * Response information for refund API calls
 */
export class RefundResponseOutput extends SpeakeasyBase {
    /**
     * Card owner properties
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountHolder" })
    @Type(() => AccountHolderOutput)
    accountHolder?: AccountHolderOutput;

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
     * Approval code provided by the payment issuer
     */
    @SpeakeasyMetadata()
    @Expose({ name: "approvalCode" })
    approvalCode?: string;

    /**
     * Describes the currency type of the transaction
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency: Currency;

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
     * A list of informational messages
     */
    @SpeakeasyMetadata()
    @Expose({ name: "information" })
    @Type(() => Information)
    information?: Information;

    /**
     * Describes the initiator of the transaction for the stored credential framework (MIT/CIT)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "initiatorType" })
    initiatorType?: InitiatorType;

    /**
     * Information about the merchant
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchant" })
    @Type(() => MerchantOutput)
    merchant?: MerchantOutput;

    /**
     * A unique merchant assigned identifier for the confirmation of goods and/or services purchased. The merchant order provides the merchant a reference to the prices, quantity and description of goods and/or services to be delivered for all transactions included in the sale.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchantOrderNumber" })
    merchantOrderNumber?: string;

    /**
     * Object with one of the payment method type applicable for refund processing
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paymentMethodType" })
    @Type(() => RefundPaymentMethodTypeOutput)
    paymentMethodType?: RefundPaymentMethodTypeOutput;

    /**
     * Payment request information for multi capture order
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paymentRequest" })
    @Type(() => PaymentRequest)
    paymentRequest?: PaymentRequest;

    /**
     * This is the amount of the transaction that is currently available for refunds.  It takes into account the original transaction amount as well as any previous refunds that were applied to the transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "remainingRefundableAmount" })
    remainingRefundableAmount?: number;

    /**
     * Merchant identifier for the request. The value must be unique.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requestId" })
    requestId: string;

    /**
     * Short explanation for response status
     */
    @SpeakeasyMetadata()
    @Expose({ name: "responseCode" })
    responseCode: string;

    /**
     * Long explanation of response code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "responseMessage" })
    responseMessage: string;

    /**
     * The label given to the state of a response to a request submitted by a consumer through the Firm's Application Program Interface (API) that matches a test case. Valid Values: ERROR,SUCCESS, DENIED
     */
    @SpeakeasyMetadata()
    @Expose({ name: "responseStatus" })
    responseStatus: ResponseStatus;

    /**
     * Retail inductry specific attributes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "retailAddenda" })
    @Type(() => RetailAddenda)
    retailAddenda?: RetailAddenda;

    /**
     * Provides textual information about charges or payments on statements. Using clear and accurate statement descriptors can reduce chargebacks and disputes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "statementDescriptor" })
    statementDescriptor?: string;

    /**
     * Designates the hour, minute, seconds and date (if timestamp) or year, month, and date (if date) when the transaction (monetary or non-monetary) occurred.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transactionDate" })
    transactionDate?: string;

    /**
     * Identifier of a resource
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transactionId" })
    transactionId?: string;

    /**
     * Reference to an existing payment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transactionReferenceId" })
    transactionReferenceId?: string;

    /**
     * List of transaction routing providers where the transaction be routed preferred by the merchant .
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transactionRoutingOverrideList" })
    transactionRoutingOverrideList?: TransactionRoutingOverrideList[];

    /**
     * Codifies the current state a transaction may be in. The transaction can only be in one state at a time. The state is based on the current phase a transaction could be in. For example, a transaction that has been received but not captured would be in the A
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transactionState" })
    transactionState: TransactionState;
}
