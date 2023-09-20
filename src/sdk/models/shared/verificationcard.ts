/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AuthenticationInput, AuthenticationOutput } from "./authentication";
import { CardType } from "./cardtype";
import { CardTypeIndicators } from "./cardtypeindicators";
import { CardTypeName } from "./cardtypename";
import { Expiry } from "./expiry";
import { NetworkResponse } from "./networkresponse";
import { PaymentToken } from "./paymenttoken";
import { Expose, Type } from "class-transformer";

/**
 * Codifies the type of payment method account number used for the payment transaction.
 */
export enum VerificationCardAccountNumberType {
    Pan = "PAN",
    NetworkToken = "NETWORK_TOKEN",
    DeviceToken = "DEVICE_TOKEN",
    SafetechToken = "SAFETECH_TOKEN",
    SafetechEncryption = "SAFETECH_ENCRYPTION",
}

/**
 * Identifies the organization who manages the e-wallet for a consumer. The actual e-wallet management responsibilities may include hosting, accessing, communicating, and/or updating all or some of the customer data associated with the e-wallet.  An E-wallet is an application that is created on the mobile device to interact with the Point of Sale (POS) device as a catalyst for a transaction. This value may be sent to the Firm (as in Visa Tokenization) or created by the Firm.
 */
export enum VerificationCardWalletProvider {
    ApplePay = "APPLE_PAY",
    GooglePay = "GOOGLE_PAY",
}

/**
 * Card payment instrument for card verification
 */
export class VerificationCardInput extends SpeakeasyBase {
    /**
     * Identifies a unique occurrence of a payment account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountNumber" })
    accountNumber?: string;

    /**
     * Codifies the type of payment method account number used for the payment transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountNumberType" })
    accountNumberType?: VerificationCardAccountNumberType;

    /**
     * The authentication object allows you to opt in to additional security features like 3-D Secure
     */
    @SpeakeasyMetadata()
    @Expose({ name: "authentication" })
    @Type(() => AuthenticationInput)
    authentication?: AuthenticationInput;

    /**
     * Card verification value (CVV/CV2)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cvv" })
    cvv?: string;

    /**
     * The alphanumeric string generated by voltage to verify the soundness of the encrypted key used by merchant and payment process. The merchant passed this in the API call. The backend process validates the subscriber id and format matches - between the merchant request for a key and the UPG request
     */
    @SpeakeasyMetadata()
    @Expose({ name: "encryptionIntegrityCheck" })
    encryptionIntegrityCheck?: string;

    /**
     * Expiration date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expiry" })
    @Type(() => Expiry)
    expiry?: Expiry;

    /**
     * Indicates whether or not the transaction is identified as a bill payment, prearranged between the cardholder and the merchant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isBillPayment" })
    isBillPayment?: boolean;

    /**
     * Reference to a previous transaction. For merchant initiated transactions (MIT), the network transaction identifier from the original transaction must be sent in this field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "originalNetworkTransactionId" })
    originalNetworkTransactionId?: string;

    /**
     * Identifies the organization who manages the e-wallet for a consumer. The actual e-wallet management responsibilities may include hosting, accessing, communicating, and/or updating all or some of the customer data associated with the e-wallet.  An E-wallet is an application that is created on the mobile device to interact with the Point of Sale (POS) device as a catalyst for a transaction. This value may be sent to the Firm (as in Visa Tokenization) or created by the Firm.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "walletProvider" })
    walletProvider?: VerificationCardWalletProvider;
}

/**
 * Card payment instrument for card verification
 */
export class VerificationCardOutput extends SpeakeasyBase {
    /**
     * Codifies the type of payment method account number used for the payment transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountNumberType" })
    accountNumberType?: VerificationCardAccountNumberType;

    /**
     * The authentication object allows you to opt in to additional security features like 3-D Secure
     */
    @SpeakeasyMetadata()
    @Expose({ name: "authentication" })
    @Type(() => AuthenticationOutput)
    authentication?: AuthenticationOutput;

    /**
     * Abbreviation of card name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cardType" })
    cardType?: CardType;

    /**
     * The card type indicators provide additional information about the card. For example, if the card is a prepaid card and thus less likely to         support recurring payments or if the card is a healthcare or commercial  card.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cardTypeIndicators" })
    @Type(() => CardTypeIndicators)
    cardTypeIndicators?: CardTypeIndicators;

    /**
     * Card name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cardTypeName" })
    cardTypeName?: CardTypeName;

    /**
     * Indicates whether or not the transaction is identified as a bill payment, prearranged between the cardholder and the merchant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isBillPayment" })
    isBillPayment?: boolean;

    /**
     * Identifies a concealed number associated with the card number recognized by various payment systems. This is typically concealed by storing only the first 6 and/or last 4 digits of the payment account number or some variation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "maskedAccountNumber" })
    maskedAccountNumber?: string;

    /**
     * Response information from payment network
     */
    @SpeakeasyMetadata()
    @Expose({ name: "networkResponse" })
    @Type(() => NetworkResponse)
    networkResponse?: NetworkResponse;

    /**
     * Reference to a previous transaction. For merchant initiated transactions (MIT), the network transaction identifier from the original transaction must be sent in this field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "originalNetworkTransactionId" })
    originalNetworkTransactionId?: string;

    /**
     * List of payment tokens for the transaction
     */
    @SpeakeasyMetadata({ elemType: PaymentToken })
    @Expose({ name: "paymentTokens" })
    @Type(() => PaymentToken)
    paymentTokens?: PaymentToken[];

    /**
     * Identifies the organization who manages the e-wallet for a consumer. The actual e-wallet management responsibilities may include hosting, accessing, communicating, and/or updating all or some of the customer data associated with the e-wallet.  An E-wallet is an application that is created on the mobile device to interact with the Point of Sale (POS) device as a catalyst for a transaction. This value may be sent to the Firm (as in Visa Tokenization) or created by the Firm.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "walletProvider" })
    walletProvider?: VerificationCardWalletProvider;
}