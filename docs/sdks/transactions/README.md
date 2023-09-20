# Transactions

## Overview

Initiating and processing a payment

### Available Operations

* [v2CaptureByIdGet](#v2capturebyidget) - Retrieve Payment Details by transaction Id
* [v2CaptureGet](#v2captureget) - Retrieve Payment Details
* [v2CapturePost](#v2capturepost) - Capture a payment
* [v2PaymentByIdGet](#v2paymentbyidget) - Get a specific payment transaction by transaction Id
* [v2PaymentGet](#v2paymentget) - Get a specific payment transaction by request Id
* [v2PaymentPatch](#v2paymentpatch) - Update payment transaction by transaction Id
* [v2PaymentPost](#v2paymentpost) - Create a payment
* [v2RefundByIdGet](#v2refundbyidget) - Get a specific refund transaction by transaction Id
* [v2RefundGet](#v2refundget) - Get a specific refund transaction by request Id
* [v2RefundPost](#v2refundpost) - Create a refund
* [v2VerificationByIdGet](#v2verificationbyidget) - Get a specific verification transaction by transaction Id
* [v2VerificationGet](#v2verificationget) - Get a specific verification transaction by request Id
* [v2VerificationPost](#v2verificationpost) - Verify a payment instrument

## v2CaptureByIdGet

Request capture details for a specific capture request by captureId

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import { V2CaptureByIdGetResponse } from "testingPayments/dist/sdk/models/operations";

const sdk = new TestingPayments();

sdk.transactions.v2CaptureByIdGet({
  id: "12cc0270-7bed-11e9-a188-1763956dd7f6",
  merchantId: "991234567890",
  minorVersion: "1",
  requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
}).then((res: V2CaptureByIdGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.V2CaptureByIdGetRequest](../../models/operations/v2capturebyidgetrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.V2CaptureByIdGetResponse](../../models/operations/v2capturebyidgetresponse.md)>**


## v2CaptureGet

Request capture details for a specific capture request

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import { V2CaptureGetResponse } from "testingPayments/dist/sdk/models/operations";

const sdk = new TestingPayments();

sdk.transactions.v2CaptureGet({
  merchantId: "991234567890",
  minorVersion: "1",
  requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
  requestIdentifier: "10cc0270-7bed-11e9-a188-1763956dd7f6",
}).then((res: V2CaptureGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.V2CaptureGetRequest](../../models/operations/v2capturegetrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.V2CaptureGetResponse](../../models/operations/v2capturegetresponse.md)>**


## v2CapturePost

Capture a payment request for existing authorized transaction

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import { V2CapturePostResponse } from "testingPayments/dist/sdk/models/operations";
import {
  AccountOnFile,
  AuthenticationSCAExemptionReason,
  CaptureMethod,
  CardAccountNumberType,
  CardWalletProvider,
  Currency,
  InitiatorType,
  MerchantPreferredRouting,
  MerchantSalesChannelName,
  PartialAuthorizationSupport,
  PreferredPaymentNetworkName,
  RecurringSequence,
  Version1ThreeDSPAResStatus,
  Version1ThreeDSVEResEnrolled,
  Version2ThreeDSTransactionStatus,
} from "testingPayments/dist/sdk/models/shared";
import { RFCDate } from "testingPayments/dist/sdk/types";

const sdk = new TestingPayments();

sdk.transactions.v2CapturePost({
  captureRequestInput: {
    accountHolder: {
      ipAddress: "127.0.0.1",
      billingAddress: {
        city: "Nowhere",
        countryCode: "USA",
        line1: "123 Some Street",
        line2: "Apartment 3b",
        postalCode: "99999",
        state: "FL",
      },
      consumerIdCreationDate: new RFCDate("2020-09-20"),
      email: "john.doe@email.xyz",
      fullName: "Jane Doe",
      mobile: {
        countryCode: 1,
        phoneNumber: "esse",
      },
      nationalId: "totam",
      phone: {
        countryCode: 1,
        phoneNumber: "porro",
      },
      referenceId: "AB12345678",
    },
    accountOnFile: AccountOnFile.NotStored,
    amount: 1234,
    captureMethod: CaptureMethod.Manual,
    currency: Currency.Zar,
    initiatorType: InitiatorType.Cardholder,
    installment: {
      installmentCount: 720633,
      numberOfDeferrals: 639921,
      planId: "BANORTE_WITHOUT_INTEREST",
    },
    isAmountFinal: false,
    merchant: {
      merchantCategoryCode: "4819",
      merchantLogoUrl: "occaecati",
      merchantSoftware: {
        companyName: "Payment Company",
        productName: "Application Name",
        version: "1.235",
      },
      softMerchant: {
        address: {
          city: "Nowhere",
          countryCode: "USA",
          line1: "123 Some Street",
          line2: "Apartment 3b",
          postalCode: "99999",
          state: "FL",
        },
        email: "Kale_Welch10@gmail.com",
        merchantPurchaseDescription: "commodi",
        name: "Pauline Dibbert",
        phone: "351.236.1626 x399",
        url: "fuga",
      },
    },
    merchantOrderNumber: "X1234",
    multiCapture: {
      isFinalCapture: false,
      multiCaptureRecordCount: 449950,
      multiCaptureSequenceNumber: "corporis",
    },
    originalTransactionId: "iste",
    partialAuthorizationSupport: PartialAuthorizationSupport.Supported,
    paymentMethodType: {
      card: {
        accountNumber: "saepe",
        accountNumberType: CardAccountNumberType.SafetechEncryption,
        accountUpdater: {
          requestAccountUpdater: true,
        },
        authentication: {
          scaExemptionReason: AuthenticationSCAExemptionReason.TrustedMerchant,
          electronicCommerceIndicator: "05",
          threeDS: {
            authenticationTransactionId: "ipsa",
            authenticationValue: "reiciendis",
            threeDSProgramProtocol: "2",
            version1: {
              threeDSPAResStatus: Version1ThreeDSPAResStatus.U,
              threeDSVEResEnrolled: Version1ThreeDSVEResEnrolled.U,
            },
            version2: {
              threeDSTransactionStatus: Version2ThreeDSTransactionStatus.U,
              threeDSTransactionStatusReasonCode: "01",
            },
          },
          tokenAuthenticationValue: "dolores",
        },
        cvv: "dolorem",
        encryptionIntegrityCheck: "corporis",
        expiry: {
          month: 5,
          year: 2020,
        },
        isBillPayment: false,
        merchantPreferredRouting: MerchantPreferredRouting.Pinless,
        merchantSalesChannelName: MerchantSalesChannelName.InteractiveVoiceResponse,
        originalNetworkTransactionId: "1c4b1100-4017-11e9-b649-8de064224186",
        preferredPaymentNetworkNameList: [
          PreferredPaymentNetworkName.PulsePinless,
        ],
        walletProvider: CardWalletProvider.GooglePay,
      },
    },
    paymentRequestId: "nemo",
    recurring: {
      agreementId: "minima",
      paymentAgreementExpiryDate: new RFCDate("2020-09-20"),
      recurringSequence: RecurringSequence.Subsequent,
    },
    retailAddenda: {
      gratuityAmount: 234,
      isTaxable: false,
      level3: {
        alternateTaxAmount: 38425,
        dutyAmount: 438601,
        lineItems: [
          {
            itemComodityCode: "culpa",
            lineItemDescriptionText: "doloribus",
            lineItemDetailCode: "sapiente",
            lineItemDiscountIndicator: false,
            lineItemDiscountTreatmentCode: "architecto",
            lineItemTaxIndicator: false,
            lineItemTaxes: [
              {
                lineItemTaxAmount: 652790,
                taxPercent: "dolorem",
                taxTypeCode: "culpa",
              },
            ],
            lineItemUnitQuantity: "consequuntur",
            lineItemUnitofMeasureCode: "repellat",
            merchantProductIdentifier: "mollitia",
            purchaseTransactionDiscountPercent: "occaecati",
            taxInclusiveLineItemTotalAmount: 253291,
            transactionDiscountAmount: 414369,
            unitPriceAmount: 466311,
          },
        ],
        orderDiscountTreatmentCode: "molestiae",
        partyTaxGovernmentIssuedIdentifier: "velit",
        shipFromAddressPostalCode: "error",
        shipToAddressCountryCode: "quia",
        shipToAddressPostalCode: "quis",
        shippingValueAddedTaxAmount: 110375,
        shippingValueAddedTaxPercent: "laborum",
        totalShippingAmount: 656330,
        totalTransactionDiscountAmount: 317202,
        transactionAdvices: [
          {
            transactionAdviceText: "odit",
          },
        ],
        valueAddedTaxAmount: 778346,
        valueAddedTaxInvoiceReferenceNumber: "sequi",
        valueAddedTaxPercent: "tenetur",
      },
      orderDate: "ipsam",
      purchaseOrderNumber: "id",
      taxAmount: 1234,
    },
    risk: {
      requestFraudScore: false,
      tokenRiskScore: 42,
      transactionRiskScore: 42,
    },
    shipTo: {
      email: "john.doe@email.xyz",
      fullName: "Jane Doe",
      mobile: {
        countryCode: 1,
        phoneNumber: "possimus",
      },
      phone: {
        countryCode: 1,
        phoneNumber: "aut",
      },
      shippingAddress: {
        city: "Nowhere",
        countryCode: "USA",
        line1: "123 Some Street",
        line2: "Apartment 3b",
        postalCode: "99999",
        state: "FL",
      },
      shippingDescription: "quasi",
    },
    statementDescriptor: "error",
  },
  id: "12cc0270-7bed-11e9-a188-1763956dd7f6",
  merchantId: "991234567890",
  minorVersion: "1",
  requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
}).then((res: V2CapturePostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.V2CapturePostRequest](../../models/operations/v2capturepostrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.V2CapturePostResponse](../../models/operations/v2capturepostresponse.md)>**


## v2PaymentByIdGet

Get a specific payment transaction by transaction Id

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import { V2PaymentByIdGetResponse } from "testingPayments/dist/sdk/models/operations";

const sdk = new TestingPayments();

sdk.transactions.v2PaymentByIdGet({
  id: "12cc0270-7bed-11e9-a188-1763956dd7f6",
  merchantId: "991234567890",
  minorVersion: "1",
}).then((res: V2PaymentByIdGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.V2PaymentByIdGetRequest](../../models/operations/v2paymentbyidgetrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.V2PaymentByIdGetResponse](../../models/operations/v2paymentbyidgetresponse.md)>**


## v2PaymentGet

Request Original Authorization Transaction details

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import { V2PaymentGetResponse } from "testingPayments/dist/sdk/models/operations";

const sdk = new TestingPayments();

sdk.transactions.v2PaymentGet({
  merchantId: "991234567890",
  minorVersion: "1",
  requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
  requestIdentifier: "12cc0270-7bed-11e9-a188-1763956dd7f6",
}).then((res: V2PaymentGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.V2PaymentGetRequest](../../models/operations/v2paymentgetrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.V2PaymentGetResponse](../../models/operations/v2paymentgetresponse.md)>**


## v2PaymentPatch

Update an existing payment 1.Capture a payment for settlement. 2. Void a payment and authorization. The transaction will not settle. 3. Update a payment.

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import { V2PaymentPatchResponse } from "testingPayments/dist/sdk/models/operations";
import { CaptureMethod } from "testingPayments/dist/sdk/models/shared";

const sdk = new TestingPayments();

sdk.transactions.v2PaymentPatch({
  id: "12cc0270-7bed-11e9-a188-1763956dd7f6",
  merchantId: "991234567890",
  minorVersion: "1",
  paymentPatch: {
    amount: 1234,
    captureMethod: CaptureMethod.Manual,
    gratuityAmount: 234,
    isCapture: false,
    isTaxable: false,
    isVoid: false,
    taxAmount: 1234,
  },
  requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
}).then((res: V2PaymentPatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.V2PaymentPatchRequest](../../models/operations/v2paymentpatchrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.V2PaymentPatchResponse](../../models/operations/v2paymentpatchresponse.md)>**


## v2PaymentPost

Create a payment request with a specified payment instrument. Authorization and Sale (Authorization and capture).

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import { V2PaymentPostResponse } from "testingPayments/dist/sdk/models/operations";
import {
  AccountOnFile,
  AccountType,
  AuthenticationSCAExemptionReason,
  BoletoBankCode,
  BoletoType,
  CaptureMethod,
  CardAccountNumberType,
  CardWalletProvider,
  Currency,
  InitiatorType,
  MerchantPreferredRouting,
  MerchantSalesChannelName,
  PartialAuthorizationSupport,
  PaymentType,
  PreferredPaymentNetworkName,
  RecurringSequence,
  TransactionRoutingOverrideList,
  Version1ThreeDSPAResStatus,
  Version1ThreeDSVEResEnrolled,
  Version2ThreeDSTransactionStatus,
} from "testingPayments/dist/sdk/models/shared";
import { RFCDate } from "testingPayments/dist/sdk/types";

const sdk = new TestingPayments();

sdk.transactions.v2PaymentPost({
  merchantId: "991234567890",
  minorVersion: "1",
  paymentInput: {
    accountHolder: {
      ipAddress: "127.0.0.1",
      billingAddress: {
        city: "Nowhere",
        countryCode: "USA",
        line1: "123 Some Street",
        line2: "Apartment 3b",
        postalCode: "99999",
        state: "FL",
      },
      consumerIdCreationDate: new RFCDate("2020-09-20"),
      email: "john.doe@email.xyz",
      fullName: "Jane Doe",
      mobile: {
        countryCode: 1,
        phoneNumber: "laborum",
      },
      nationalId: "quasi",
      phone: {
        countryCode: 1,
        phoneNumber: "reiciendis",
      },
      referenceId: "AB12345678",
    },
    accountOnFile: AccountOnFile.NotStored,
    amount: 1234,
    captureMethod: CaptureMethod.Manual,
    currency: Currency.Lkr,
    initiatorType: InitiatorType.Cardholder,
    installment: {
      installmentCount: 468651,
      numberOfDeferrals: 509624,
      planId: "BANORTE_WITHOUT_INTEREST",
    },
    isAmountFinal: false,
    isCapture: false,
    merchant: {
      merchantCategoryCode: "4819",
      merchantLogoUrl: "voluptatibus",
      merchantSoftware: {
        companyName: "Payment Company",
        productName: "Application Name",
        version: "1.235",
      },
      softMerchant: {
        address: {
          city: "Nowhere",
          countryCode: "USA",
          line1: "123 Some Street",
          line2: "Apartment 3b",
          postalCode: "99999",
          state: "FL",
        },
        email: "Lelah.Klein3@gmail.com",
        merchantPurchaseDescription: "reprehenderit",
        name: "Shawna Carter",
        phone: "263.949.0265 x582",
        url: "praesentium",
      },
    },
    merchantOrderNumber: "X1234",
    originalTransactionId: "rem",
    partialAuthorizationSupport: PartialAuthorizationSupport.NotSupported,
    paymentMethodType: {
      ach: {
        accountNumber: "quasi",
        accountType: AccountType.CorporateChecking,
        financialInstitutionRoutingNumber: "sint",
        isTransactionMicroEntry: false,
        paymentType: PaymentType.Web,
      },
      applepay: {
        encryptedPaymentBundle: {
          encryptedPayload: "IzxSm6YWehmlLvk5HY/rsl4hhWuorOG7R6ERP0fqzTokMhS5JtyAU8ajPIu/aHcbOxYQOhvk/K+3n6N7SbEKgSuT100YFmeIKh3IkSLa4u1/1Y4Z9y5bqZFPxd8IcQnuR8HZKgJDHCXQzDDYP4JBMtqZQzRztzsIfa4eoOnGuZCc2s+WxGap4iv92vPj8tAHonvSE9t0ByUCBLgfvu25GR0eJb6UM8nBvxP2/qBSElOuyLo80enrZ6tlp3xtpBEV8oeOc9iLSmalayfD7JQxZXd2cWA/sZPWn4VGIj7Dt05NYE/iFZrw2VOa2hOJ4/4dOGS1KJzhw+RPRufhadAF96k7O3LwbMphcM9sZLN/Y/LSqVFGzIq6ZlrnOwcxzvjNqw4ccNl4v3eehL4TRRgfF3LirV56BeADzJmq0pB3W/vu",
          encryptedPaymentHeader: {
            ephemeralPublicKey: "itaque",
            publicKeyHash: "MUwkjyUBpyRiZTVMUrIzA6+SIrr9mV8nNct6YO0rGNg=",
          },
          protocolVersion: "incidunt",
          signature: "enim",
        },
        latLong: "1,1",
      },
      boleto: {
        bankCode: BoletoBankCode.Jpm,
        documentNumber: "consequatur",
        dueDate: new RFCDate("2020-09-20"),
        expiryDate: new RFCDate("2020-09-20"),
        paidAmount: "est",
        paidDate: "2018-12-21T09:30:15.987Z",
        ticketInstructions: "Pay to maturity",
        type: BoletoType.Bdp,
        uniqueNumber: "explicabo",
      },
      card: {
        accountNumber: "deserunt",
        accountNumberType: CardAccountNumberType.SafetechEncryption,
        accountUpdater: {
          requestAccountUpdater: true,
        },
        authentication: {
          scaExemptionReason: AuthenticationSCAExemptionReason.RecurringPayment,
          electronicCommerceIndicator: "05",
          threeDS: {
            authenticationTransactionId: "labore",
            authenticationValue: "modi",
            threeDSProgramProtocol: "2",
            version1: {
              threeDSPAResStatus: Version1ThreeDSPAResStatus.Y,
              threeDSVEResEnrolled: Version1ThreeDSVEResEnrolled.N,
            },
            version2: {
              threeDSTransactionStatus: Version2ThreeDSTransactionStatus.U,
              threeDSTransactionStatusReasonCode: "01",
            },
          },
          tokenAuthenticationValue: "quos",
        },
        cvv: "perferendis",
        encryptionIntegrityCheck: "magni",
        expiry: {
          month: 5,
          year: 2020,
        },
        isBillPayment: false,
        merchantPreferredRouting: MerchantPreferredRouting.Credit,
        merchantSalesChannelName: MerchantSalesChannelName.Internet,
        originalNetworkTransactionId: "1c4b1100-4017-11e9-b649-8de064224186",
        preferredPaymentNetworkNameList: [
          PreferredPaymentNetworkName.StarPinless,
        ],
        walletProvider: CardWalletProvider.ApplePay,
      },
      googlepay: {
        encryptedPaymentBundle: {
          encryptedPayload: "IzxSm6YWehmlLvk5HY/rsl4hhWuorOG7R6ERP0fqzTokMhS5JtyAU8ajPIu/aHcbOxYQOhvk/K+3n6N7SbEKgSuT100YFmeIKh3IkSLa4u1/1Y4Z9y5bqZFPxd8IcQnuR8HZKgJDHCXQzDDYP4JBMtqZQzRztzsIfa4eoOnGuZCc2s+WxGap4iv92vPj8tAHonvSE9t0ByUCBLgfvu25GR0eJb6UM8nBvxP2/qBSElOuyLo80enrZ6tlp3xtpBEV8oeOc9iLSmalayfD7JQxZXd2cWA/sZPWn4VGIj7Dt05NYE/iFZrw2VOa2hOJ4/4dOGS1KJzhw+RPRufhadAF96k7O3LwbMphcM9sZLN/Y/LSqVFGzIq6ZlrnOwcxzvjNqw4ccNl4v3eehL4TRRgfF3LirV56BeADzJmq0pB3W/vu",
          encryptedPaymentHeader: {
            ephemeralPublicKey: "dolorum",
            publicKeyHash: "MUwkjyUBpyRiZTVMUrIzA6+SIrr9mV8nNct6YO0rGNg=",
          },
          protocolVersion: "excepturi",
          signature: "tempora",
        },
        latLong: "1,1",
      },
    },
    recurring: {
      agreementId: "facilis",
      paymentAgreementExpiryDate: new RFCDate("2020-09-20"),
      recurringSequence: RecurringSequence.Subsequent,
    },
    retailAddenda: {
      gratuityAmount: 234,
      isTaxable: false,
      level3: {
        alternateTaxAmount: 288476,
        dutyAmount: 962189,
        lineItems: [
          {
            itemComodityCode: "eum",
            lineItemDescriptionText: "non",
            lineItemDetailCode: "eligendi",
            lineItemDiscountIndicator: false,
            lineItemDiscountTreatmentCode: "sint",
            lineItemTaxIndicator: false,
            lineItemTaxes: [
              {
                lineItemTaxAmount: 396098,
                taxPercent: "provident",
                taxTypeCode: "necessitatibus",
              },
            ],
            lineItemUnitQuantity: "sint",
            lineItemUnitofMeasureCode: "officia",
            merchantProductIdentifier: "dolor",
            purchaseTransactionDiscountPercent: "debitis",
            taxInclusiveLineItemTotalAmount: 952749,
            transactionDiscountAmount: 680056,
            unitPriceAmount: 447125,
          },
        ],
        orderDiscountTreatmentCode: "in",
        partyTaxGovernmentIssuedIdentifier: "illum",
        shipFromAddressPostalCode: "maiores",
        shipToAddressCountryCode: "rerum",
        shipToAddressPostalCode: "dicta",
        shippingValueAddedTaxAmount: 297437,
        shippingValueAddedTaxPercent: "cumque",
        totalShippingAmount: 813798,
        totalTransactionDiscountAmount: 411820,
        transactionAdvices: [
          {
            transactionAdviceText: "aliquid",
          },
        ],
        valueAddedTaxAmount: 675439,
        valueAddedTaxInvoiceReferenceNumber: "accusamus",
        valueAddedTaxPercent: "non",
      },
      orderDate: "occaecati",
      purchaseOrderNumber: "enim",
      taxAmount: 1234,
    },
    risk: {
      requestFraudScore: false,
      tokenRiskScore: 42,
      transactionRiskScore: 42,
    },
    shipTo: {
      email: "john.doe@email.xyz",
      fullName: "Jane Doe",
      mobile: {
        countryCode: 1,
        phoneNumber: "accusamus",
      },
      phone: {
        countryCode: 1,
        phoneNumber: "delectus",
      },
      shippingAddress: {
        city: "Nowhere",
        countryCode: "USA",
        line1: "123 Some Street",
        line2: "Apartment 3b",
        postalCode: "99999",
        state: "FL",
      },
      shippingDescription: "quidem",
    },
    statementDescriptor: "provident",
    transactionRoutingOverrideList: [
      TransactionRoutingOverrideList.Getnet,
    ],
  },
  requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
}).then((res: V2PaymentPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.V2PaymentPostRequest](../../models/operations/v2paymentpostrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.V2PaymentPostResponse](../../models/operations/v2paymentpostresponse.md)>**


## v2RefundByIdGet

Get a specific refund transaction by transaction Id

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import { V2RefundByIdGetResponse } from "testingPayments/dist/sdk/models/operations";

const sdk = new TestingPayments();

sdk.transactions.v2RefundByIdGet({
  id: "12cc0270-7bed-11e9-a188-1763956dd7f6",
  merchantId: "991234567890",
  minorVersion: "1",
}).then((res: V2RefundByIdGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.V2RefundByIdGetRequest](../../models/operations/v2refundbyidgetrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.V2RefundByIdGetResponse](../../models/operations/v2refundbyidgetresponse.md)>**


## v2RefundGet

Creates a refund request and returns funds to the consumer. 1. For refund associated with a previous payment, send transactionReferenceId. 2. For standalone refunds, send order and payment objects.

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import { V2RefundGetResponse } from "testingPayments/dist/sdk/models/operations";

const sdk = new TestingPayments();

sdk.transactions.v2RefundGet({
  merchantId: "991234567890",
  minorVersion: "1",
  requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
  requestIdentifier: "12cc0270-7bed-11e9-a188-1763956dd7f6",
}).then((res: V2RefundGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.V2RefundGetRequest](../../models/operations/v2refundgetrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.V2RefundGetResponse](../../models/operations/v2refundgetresponse.md)>**


## v2RefundPost

Creates a refund request and returns funds to the consumer. 1. For refund associated with a previous payment, send transactionReferenceId. 2. For standalone refunds, send order and payment objects.

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import { V2RefundPostResponse } from "testingPayments/dist/sdk/models/operations";
import {
  AccountOnFile,
  AccountType,
  Currency,
  InitiatorType,
  MerchantPreferredRouting,
  MerchantSalesChannelName,
  PaymentType,
  PreferredPaymentNetworkName,
  RefundCardWalletProvider,
} from "testingPayments/dist/sdk/models/shared";
import { RFCDate } from "testingPayments/dist/sdk/types";

const sdk = new TestingPayments();

sdk.transactions.v2RefundPost({
  merchantId: "991234567890",
  minorVersion: "1",
  refundInput: {
    accountHolder: {
      ipAddress: "127.0.0.1",
      billingAddress: {
        city: "Nowhere",
        countryCode: "USA",
        line1: "123 Some Street",
        line2: "Apartment 3b",
        postalCode: "99999",
        state: "FL",
      },
      consumerIdCreationDate: new RFCDate("2020-09-20"),
      email: "john.doe@email.xyz",
      fullName: "Jane Doe",
      mobile: {
        countryCode: 1,
        phoneNumber: "id",
      },
      nationalId: "blanditiis",
      phone: {
        countryCode: 1,
        phoneNumber: "deleniti",
      },
      referenceId: "AB12345678",
    },
    accountOnFile: AccountOnFile.NotStored,
    amount: 1234,
    currency: Currency.Uyu,
    initiatorType: InitiatorType.Cardholder,
    merchant: {
      merchantCategoryCode: "4819",
      merchantLogoUrl: "amet",
      merchantSoftware: {
        companyName: "Payment Company",
        productName: "Application Name",
        version: "1.235",
      },
      softMerchant: {
        address: {
          city: "Nowhere",
          countryCode: "USA",
          line1: "123 Some Street",
          line2: "Apartment 3b",
          postalCode: "99999",
          state: "FL",
        },
        email: "Golda_Kassulke@yahoo.com",
        merchantPurchaseDescription: "molestiae",
        name: "Marcia Gutkowski",
        phone: "436-748-1120 x535",
        url: "quos",
      },
    },
    merchantOrderNumber: "X1234",
    paymentMethodType: {
      ach: {
        accountNumber: "sint",
        accountType: AccountType.Checking,
        financialInstitutionRoutingNumber: "mollitia",
        isTransactionMicroEntry: false,
        paymentType: PaymentType.Recurring,
      },
      card: {
        accountNumber: "mollitia",
        authentication: {
          electronicCommerceIndicator: "05",
          tokenAuthenticationValue: "ad",
        },
        expiry: {
          month: 5,
          year: 2020,
        },
        isBillPayment: false,
        merchantPreferredRouting: MerchantPreferredRouting.Pinless,
        merchantSalesChannelName: MerchantSalesChannelName.MailOrderTelephoneOrder,
        originalNetworkTransactionId: "1c4b1100-4017-11e9-b649-8de064224186",
        preferredPaymentNetworkNameList: [
          PreferredPaymentNetworkName.AccelPinless,
        ],
        walletProvider: RefundCardWalletProvider.ApplePay,
      },
      transactionReference: {
        transactionReferenceId: "6b4c7800-4017-11e9-b649-8de064224186",
      },
    },
    retailAddenda: {
      gratuityAmount: 234,
      isTaxable: false,
      level3: {
        alternateTaxAmount: 367562,
        dutyAmount: 97260,
        lineItems: [
          {
            itemComodityCode: "iure",
            lineItemDescriptionText: "doloribus",
            lineItemDetailCode: "debitis",
            lineItemDiscountIndicator: false,
            lineItemDiscountTreatmentCode: "eius",
            lineItemTaxIndicator: false,
            lineItemTaxes: [
              {
                lineItemTaxAmount: 806194,
                taxPercent: "deleniti",
                taxTypeCode: "facilis",
              },
            ],
            lineItemUnitQuantity: "in",
            lineItemUnitofMeasureCode: "architecto",
            merchantProductIdentifier: "architecto",
            purchaseTransactionDiscountPercent: "repudiandae",
            taxInclusiveLineItemTotalAmount: 352312,
            transactionDiscountAmount: 714242,
            unitPriceAmount: 469249,
          },
        ],
        orderDiscountTreatmentCode: "repellat",
        partyTaxGovernmentIssuedIdentifier: "quibusdam",
        shipFromAddressPostalCode: "sed",
        shipToAddressCountryCode: "saepe",
        shipToAddressPostalCode: "pariatur",
        shippingValueAddedTaxAmount: 37559,
        shippingValueAddedTaxPercent: "consequuntur",
        totalShippingAmount: 508315,
        totalTransactionDiscountAmount: 615560,
        transactionAdvices: [
          {
            transactionAdviceText: "magni",
          },
        ],
        valueAddedTaxAmount: 123820,
        valueAddedTaxInvoiceReferenceNumber: "quo",
        valueAddedTaxPercent: "illum",
      },
      orderDate: "pariatur",
      purchaseOrderNumber: "maxime",
      taxAmount: 1234,
    },
    statementDescriptor: "ea",
  },
  requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
}).then((res: V2RefundPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.V2RefundPostRequest](../../models/operations/v2refundpostrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.V2RefundPostResponse](../../models/operations/v2refundpostresponse.md)>**


## v2VerificationByIdGet

Request Original Authorization Transaction details for an incoming notification subscription

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import { V2VerificationByIdGetResponse } from "testingPayments/dist/sdk/models/operations";

const sdk = new TestingPayments();

sdk.transactions.v2VerificationByIdGet({
  id: "12cc0270-7bed-11e9-a188-1763956dd7f6",
  merchantId: "991234567890",
  minorVersion: "1",
  requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
}).then((res: V2VerificationByIdGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.V2VerificationByIdGetRequest](../../models/operations/v2verificationbyidgetrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.V2VerificationByIdGetResponse](../../models/operations/v2verificationbyidgetresponse.md)>**


## v2VerificationGet

Creates a refund request and returns funds to the consumer. 1. For refund associated with a previous payment, send transactionReferenceId. 2. For standalone refunds, send order and payment objects.

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import { V2VerificationGetResponse } from "testingPayments/dist/sdk/models/operations";

const sdk = new TestingPayments();

sdk.transactions.v2VerificationGet({
  merchantId: "991234567890",
  minorVersion: "1",
  requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
  requestIdentifier: "12cc0270-7bed-11e9-a188-1763956dd7f6",
}).then((res: V2VerificationGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.V2VerificationGetRequest](../../models/operations/v2verificationgetrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.V2VerificationGetResponse](../../models/operations/v2verificationgetresponse.md)>**


## v2VerificationPost

Validate a payment instrument with cardholder information without placing a funds hold on the consumer account (Not supported by all payment methods)

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import { V2VerificationPostResponse } from "testingPayments/dist/sdk/models/operations";
import {
  AccountOnFile,
  AccountType,
  AuthenticationSCAExemptionReason,
  Currency,
  InitiatorType,
  PaymentType,
  RecurringSequence,
  TransactionRoutingOverrideList,
  VerificationACHACHVerificationType,
  VerificationACHConsumerVerificationIdType,
  VerificationCardAccountNumberType,
  VerificationCardWalletProvider,
  Version1ThreeDSPAResStatus,
  Version1ThreeDSVEResEnrolled,
  Version2ThreeDSTransactionStatus,
} from "testingPayments/dist/sdk/models/shared";
import { RFCDate } from "testingPayments/dist/sdk/types";

const sdk = new TestingPayments();

sdk.transactions.v2VerificationPost({
  merchantId: "991234567890",
  minorVersion: "1",
  requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
  verificationInput: {
    accountHolder: {
      ipAddress: "127.0.0.1",
      billingAddress: {
        city: "Nowhere",
        countryCode: "USA",
        line1: "123 Some Street",
        line2: "Apartment 3b",
        postalCode: "99999",
        state: "FL",
      },
      consumerIdCreationDate: new RFCDate("2020-09-20"),
      email: "john.doe@email.xyz",
      fullName: "Jane Doe",
      mobile: {
        countryCode: 1,
        phoneNumber: "excepturi",
      },
      nationalId: "odit",
      phone: {
        countryCode: 1,
        phoneNumber: "ea",
      },
      referenceId: "AB12345678",
    },
    accountOnFile: AccountOnFile.NotStored,
    currency: Currency.Nzd,
    initiatorType: InitiatorType.Cardholder,
    merchant: {
      merchantCategoryCode: "4819",
      merchantLogoUrl: "ab",
      merchantSoftware: {
        companyName: "Payment Company",
        productName: "Application Name",
        version: "1.235",
      },
      softMerchant: {
        address: {
          city: "Nowhere",
          countryCode: "USA",
          line1: "123 Some Street",
          line2: "Apartment 3b",
          postalCode: "99999",
          state: "FL",
        },
        email: "Max.Hintz@hotmail.com",
        merchantPurchaseDescription: "nam",
        name: "Meredith Hickle PhD",
        phone: "273.977.1354",
        url: "eaque",
      },
    },
    merchantOrderNumber: "X1234",
    paymentMethodType: {
      ach: {
        accountNumber: "quis",
        accountType: AccountType.Checking,
        achVerificationType: VerificationACHACHVerificationType.Basic,
        consumerVerificationId: "perferendis",
        consumerVerificationIdState: "FL",
        consumerVerificationIdType: VerificationACHConsumerVerificationIdType.UsMilitary,
        financialInstitutionRoutingNumber: "minus",
        individualBirthDate: new RFCDate("2000-09-20"),
        last4SSN: "1234",
        paymentType: PaymentType.Tel,
      },
      card: {
        accountNumber: "dolor",
        accountNumberType: VerificationCardAccountNumberType.SafetechEncryption,
        authentication: {
          scaExemptionReason: AuthenticationSCAExemptionReason.TransactionRiskAnalysis,
          electronicCommerceIndicator: "05",
          threeDS: {
            authenticationTransactionId: "hic",
            authenticationValue: "recusandae",
            threeDSProgramProtocol: "2",
            version1: {
              threeDSPAResStatus: Version1ThreeDSPAResStatus.U,
              threeDSVEResEnrolled: Version1ThreeDSVEResEnrolled.U,
            },
            version2: {
              threeDSTransactionStatus: Version2ThreeDSTransactionStatus.U,
              threeDSTransactionStatusReasonCode: "01",
            },
          },
          tokenAuthenticationValue: "voluptatem",
        },
        cvv: "porro",
        encryptionIntegrityCheck: "consequuntur",
        expiry: {
          month: 5,
          year: 2020,
        },
        isBillPayment: false,
        originalNetworkTransactionId: "1c4b1100-4017-11e9-b649-8de064224186",
        walletProvider: VerificationCardWalletProvider.GooglePay,
      },
    },
    recurringSequence: RecurringSequence.Subsequent,
    transactionRoutingOverrideList: [
      TransactionRoutingOverrideList.Stone,
    ],
    websiteShortMerchantUniversalResourceLocatorText: "occaecati",
  },
}).then((res: V2VerificationPostResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.V2VerificationPostRequest](../../models/operations/v2verificationpostrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.V2VerificationPostResponse](../../models/operations/v2verificationpostresponse.md)>**

