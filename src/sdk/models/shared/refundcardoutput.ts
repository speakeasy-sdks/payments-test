/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CardType } from "./cardtype";
import { CardTypeIndicators } from "./cardtypeindicators";
import { CardTypeName } from "./cardtypename";
import { Expiry } from "./expiry";
import { MerchantPreferredRouting } from "./merchantpreferredrouting";
import { MerchantSalesChannelName } from "./merchantsaleschannelname";
import { NetworkResponse } from "./networkresponse";
import { PaymentToken } from "./paymenttoken";
import { PreferredPaymentNetworkName } from "./preferredpaymentnetworkname";
import { RefundAuthentication } from "./refundauthentication";
import { RefundAuthenticationOutput } from "./refundauthenticationoutput";
import { Expose, Type } from "class-transformer";

/**
 * Identifies the organization who manages the e-wallet for a consumer. The actual e-wallet management responsibilities may include hosting, accessing, communicating, and/or updating all or some of the customer data associated with the e-wallet.  An E-wallet is an application that is created on the mobile device to interact with the Point of Sale (POS) device as a catalyst for a transaction. This value may be sent to the Firm (as in Visa Tokenization) or created by the Firm.
 */
export enum RefundCardWalletProvider {
    ApplePay = "APPLE_PAY",
    GooglePay = "GOOGLE_PAY",
}

/**
 * Card payment instrument for refund
 */
export class RefundCardOutput extends SpeakeasyBase {
    /**
     * The authentication object allows you to opt in to additional security features specific for refund
     */
    @SpeakeasyMetadata()
    @Expose({ name: "authentication" })
    @Type(() => RefundAuthenticationOutput)
    authentication?: RefundAuthenticationOutput;

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
     * Codifies the routing model used to route the transaction as preferred by merchant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchantPreferredRouting" })
    merchantPreferredRouting?: MerchantPreferredRouting;

    /**
     * Label given to a merchant client of the Firm's medium for reaching its customers and facilitating and/or performing sales of its merchandise or services.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchantSalesChannelName" })
    merchantSalesChannelName?: MerchantSalesChannelName;

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
     * Define the list of Payment Network Name preferred by merchant.  Payment Network Name is the label for primary transactions processing network through which card's (Debit or credit) account transactions are processed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "preferredPaymentNetworkNameList" })
    preferredPaymentNetworkNameList?: PreferredPaymentNetworkName[];

    /**
     * Identifies the organization who manages the e-wallet for a consumer. The actual e-wallet management responsibilities may include hosting, accessing, communicating, and/or updating all or some of the customer data associated with the e-wallet.  An E-wallet is an application that is created on the mobile device to interact with the Point of Sale (POS) device as a catalyst for a transaction. This value may be sent to the Firm (as in Visa Tokenization) or created by the Firm.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "walletProvider" })
    walletProvider?: RefundCardWalletProvider;
}

/**
 * Card payment instrument for refund
 */
export class RefundCard extends SpeakeasyBase {
    /**
     * Identifies a unique occurrence of a payment account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountNumber" })
    accountNumber: string;

    /**
     * The authentication object allows you to opt in to additional security features specific for refund
     */
    @SpeakeasyMetadata()
    @Expose({ name: "authentication" })
    @Type(() => RefundAuthentication)
    authentication?: RefundAuthentication;

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
     * Codifies the routing model used to route the transaction as preferred by merchant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchantPreferredRouting" })
    merchantPreferredRouting?: MerchantPreferredRouting;

    /**
     * Label given to a merchant client of the Firm's medium for reaching its customers and facilitating and/or performing sales of its merchandise or services.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "merchantSalesChannelName" })
    merchantSalesChannelName?: MerchantSalesChannelName;

    /**
     * Reference to a previous transaction. For merchant initiated transactions (MIT), the network transaction identifier from the original transaction must be sent in this field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "originalNetworkTransactionId" })
    originalNetworkTransactionId?: string;

    /**
     * Define the list of Payment Network Name preferred by merchant.  Payment Network Name is the label for primary transactions processing network through which card's (Debit or credit) account transactions are processed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "preferredPaymentNetworkNameList" })
    preferredPaymentNetworkNameList?: PreferredPaymentNetworkName[];

    /**
     * Identifies the organization who manages the e-wallet for a consumer. The actual e-wallet management responsibilities may include hosting, accessing, communicating, and/or updating all or some of the customer data associated with the e-wallet.  An E-wallet is an application that is created on the mobile device to interact with the Point of Sale (POS) device as a catalyst for a transaction. This value may be sent to the Firm (as in Visa Tokenization) or created by the Firm.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "walletProvider" })
    walletProvider?: RefundCardWalletProvider;
}
