# Transactions
(*transactions*)

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

const sdk = new TestingPayments({
  security: {
    bearerAuth: "",
  },
});

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

const sdk = new TestingPayments({
  security: {
    bearerAuth: "",
  },
});

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

const sdk = new TestingPayments({
  security: {
    bearerAuth: "",
  },
});

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
        phoneNumber: "Tesla Persistent",
      },
      nationalId: "generation Concrete",
      phone: {
        countryCode: 1,
        phoneNumber: "jovially pascal Potassium",
      },
      referenceId: "AB12345678",
    },
    accountOnFile: AccountOnFile.NotStored,
    amount: 1234,
    captureMethod: CaptureMethod.Now,
    currency: Currency.Hrk,
    initiatorType: InitiatorType.Cardholder,
    installment: {
      installmentCount: 789869,
      numberOfDeferrals: 103473,
      planId: "BANORTE_WITHOUT_INTEREST",
    },
    isAmountFinal: false,
    merchant: {
      merchantCategoryCode: "4819",
      merchantLogoUrl: "Incredible vortals Bicycle",
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
        email: "Jimmy28@gmail.com",
        merchantPurchaseDescription: "plum",
        name: "Director ah",
        phone: "(970) 777-0638 x6696",
        url: "http://remarkable-madam.org",
      },
    },
    merchantOrderNumber: "X1234",
    multiCapture: {
      isFinalCapture: false,
      multiCaptureRecordCount: 566103,
      multiCaptureSequenceNumber: "local SAS",
    },
    originalTransactionId: "Research green",
    partialAuthorizationSupport: PartialAuthorizationSupport.NotSupported,
    paymentMethodType: {
      card: {
        accountNumber: "innovate copy",
        accountNumberType: CardAccountNumberType.DeviceToken,
        accountUpdater: {
          requestAccountUpdater: true,
        },
        authentication: {
          scaExemptionReason: AuthenticationSCAExemptionReason.LowValuePayment,
          electronicCommerceIndicator: "05",
          threeDS: {
            authenticationTransactionId: "field",
            authenticationValue: "management Reunion Home",
            threeDSProgramProtocol: "2",
            version1: {
              threeDSPAResStatus: Version1ThreeDSPAResStatus.Y,
              threeDSVEResEnrolled: Version1ThreeDSVEResEnrolled.A,
            },
            version2: {
              threeDSTransactionStatus: Version2ThreeDSTransactionStatus.N,
              threeDSTransactionStatusReasonCode: "01",
            },
          },
          tokenAuthenticationValue: "system Maine South",
        },
        cvv: "Corporate flame",
        encryptionIntegrityCheck: "World",
        expiry: {
          month: 5,
          year: 2020,
        },
        isBillPayment: false,
        merchantPreferredRouting: MerchantPreferredRouting.Pinless,
        merchantSalesChannelName: MerchantSalesChannelName.Internet,
        originalNetworkTransactionId: "1c4b1100-4017-11e9-b649-8de064224186",
        preferredPaymentNetworkNameList: [
          PreferredPaymentNetworkName.StarPinless,
        ],
        walletProvider: CardWalletProvider.GooglePay,
      },
    },
    paymentRequestId: "facilitate Coast",
    recurring: {
      agreementId: "Wauwatosa throughout",
      paymentAgreementExpiryDate: new RFCDate("2020-09-20"),
      recurringSequence: RecurringSequence.Subsequent,
    },
    retailAddenda: {
      gratuityAmount: 234,
      isTaxable: false,
      level3: {
        alternateTaxAmount: 699991,
        dutyAmount: 718116,
        lineItems: [
          {
            itemComodityCode: "Unbranded Cis male",
            lineItemDescriptionText: "Astatine canoodle ROI",
            lineItemDetailCode: "up black Orchestrator",
            lineItemDiscountIndicator: false,
            lineItemDiscountTreatmentCode: "Baht Cambridgeshire Cyclocross",
            lineItemTaxIndicator: false,
            lineItemTaxes: [
              {
                lineItemTaxAmount: 996588,
                taxPercent: "angel Grocery",
                taxTypeCode: "Barium benchmark optimistically",
              },
            ],
            lineItemUnitQuantity: "Branding SQL",
            lineItemUnitofMeasureCode: "Avon blight",
            merchantProductIdentifier: "Electric",
            purchaseTransactionDiscountPercent: "Technician",
            taxInclusiveLineItemTotalAmount: 394964,
            transactionDiscountAmount: 378959,
            unitPriceAmount: 568107,
          },
        ],
        orderDiscountTreatmentCode: "XML quantify orange",
        partyTaxGovernmentIssuedIdentifier: "redefine Lamborghini methodologies",
        shipFromAddressPostalCode: "24/365 Salad",
        shipToAddressCountryCode: "deed athletic",
        shipToAddressPostalCode: "Rupiah Tungsten",
        shippingValueAddedTaxAmount: 260429,
        shippingValueAddedTaxPercent: "netball meh male",
        totalShippingAmount: 235767,
        totalTransactionDiscountAmount: 876155,
        transactionAdvices: [
          {
            transactionAdviceText: "IP auxiliary including",
          },
        ],
        valueAddedTaxAmount: 657391,
        valueAddedTaxInvoiceReferenceNumber: "array olive indigo",
        valueAddedTaxPercent: "Industrial Southeast",
      },
      orderDate: "24/7",
      purchaseOrderNumber: "violet Kuna",
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
        phoneNumber: "by challenge Hybrid",
      },
      phone: {
        countryCode: 1,
        phoneNumber: "Hat ivory",
      },
      shippingAddress: {
        city: "Nowhere",
        countryCode: "USA",
        line1: "123 Some Street",
        line2: "Apartment 3b",
        postalCode: "99999",
        state: "FL",
      },
      shippingDescription: "Senegal District",
    },
    statementDescriptor: "Credit Electric",
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

const sdk = new TestingPayments({
  security: {
    bearerAuth: "",
  },
});

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

const sdk = new TestingPayments({
  security: {
    bearerAuth: "",
  },
});

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

const sdk = new TestingPayments({
  security: {
    bearerAuth: "",
  },
});

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

const sdk = new TestingPayments({
  security: {
    bearerAuth: "",
  },
});

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
        phoneNumber: "acidly Smart",
      },
      nationalId: "program Producer",
      phone: {
        countryCode: 1,
        phoneNumber: "Rubber throughout API",
      },
      referenceId: "AB12345678",
    },
    accountOnFile: AccountOnFile.NotStored,
    amount: 1234,
    captureMethod: CaptureMethod.Manual,
    currency: Currency.Pgk,
    initiatorType: InitiatorType.Cardholder,
    installment: {
      installmentCount: 94875,
      numberOfDeferrals: 458674,
      planId: "BANORTE_WITHOUT_INTEREST",
    },
    isAmountFinal: false,
    isCapture: false,
    merchant: {
      merchantCategoryCode: "4819",
      merchantLogoUrl: "driver Cotton orchid",
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
        email: "Mateo_Schoen@hotmail.com",
        merchantPurchaseDescription: "bypass incidunt fuchsia",
        name: "bachelor Forward",
        phone: "490.368.6504",
        url: "https://weary-clearance.org",
      },
    },
    merchantOrderNumber: "X1234",
    originalTransactionId: "Group parse yippee",
    partialAuthorizationSupport: PartialAuthorizationSupport.Supported,
    paymentMethodType: {
      ach: {
        accountNumber: "Male Brand",
        accountType: AccountType.CorporateChecking,
        financialInstitutionRoutingNumber: "Reduced",
        isTransactionMicroEntry: false,
        paymentType: PaymentType.Tel,
      },
      applepay: {
        encryptedPaymentBundle: {
          encryptedPayload: "IzxSm6YWehmlLvk5HY/rsl4hhWuorOG7R6ERP0fqzTokMhS5JtyAU8ajPIu/aHcbOxYQOhvk/K+3n6N7SbEKgSuT100YFmeIKh3IkSLa4u1/1Y4Z9y5bqZFPxd8IcQnuR8HZKgJDHCXQzDDYP4JBMtqZQzRztzsIfa4eoOnGuZCc2s+WxGap4iv92vPj8tAHonvSE9t0ByUCBLgfvu25GR0eJb6UM8nBvxP2/qBSElOuyLo80enrZ6tlp3xtpBEV8oeOc9iLSmalayfD7JQxZXd2cWA/sZPWn4VGIj7Dt05NYE/iFZrw2VOa2hOJ4/4dOGS1KJzhw+RPRufhadAF96k7O3LwbMphcM9sZLN/Y/LSqVFGzIq6ZlrnOwcxzvjNqw4ccNl4v3eehL4TRRgfF3LirV56BeADzJmq0pB3W/vu",
          encryptedPaymentHeader: {
            ephemeralPublicKey: "blue South Lilangeni",
            publicKeyHash: "MUwkjyUBpyRiZTVMUrIzA6+SIrr9mV8nNct6YO0rGNg=",
          },
          protocolVersion: "West Diesel",
          signature: "Bentley",
        },
        latLong: "1,1",
      },
      boleto: {
        bankCode: BoletoBankCode.Jpm,
        documentNumber: "Automotive systems upon",
        dueDate: new RFCDate("2020-09-20"),
        expiryDate: new RFCDate("2020-09-20"),
        paidAmount: "Otha",
        paidDate: "2018-12-21T09:30:15.987Z",
        ticketInstructions: "Pay to maturity",
        type: BoletoType.Bdp,
        uniqueNumber: "infrastructures Chair",
      },
      card: {
        accountNumber: "ah networks blue",
        accountNumberType: CardAccountNumberType.NetworkToken,
        accountUpdater: {
          requestAccountUpdater: true,
        },
        authentication: {
          scaExemptionReason: AuthenticationSCAExemptionReason.TransactionRiskAnalysis,
          electronicCommerceIndicator: "05",
          threeDS: {
            authenticationTransactionId: "henry COM Fe",
            authenticationValue: "beset",
            threeDSProgramProtocol: "2",
            version1: {
              threeDSPAResStatus: Version1ThreeDSPAResStatus.U,
              threeDSVEResEnrolled: Version1ThreeDSVEResEnrolled.Y,
            },
            version2: {
              threeDSTransactionStatus: Version2ThreeDSTransactionStatus.A,
              threeDSTransactionStatusReasonCode: "01",
            },
          },
          tokenAuthenticationValue: "Market Clothing",
        },
        cvv: "purple Chile",
        encryptionIntegrityCheck: "Sausages blockchains beautifully",
        expiry: {
          month: 5,
          year: 2020,
        },
        isBillPayment: false,
        merchantPreferredRouting: MerchantPreferredRouting.Credit,
        merchantSalesChannelName: MerchantSalesChannelName.MailOrderTelephoneOrder,
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
            ephemeralPublicKey: "Omnigender",
            publicKeyHash: "MUwkjyUBpyRiZTVMUrIzA6+SIrr9mV8nNct6YO0rGNg=",
          },
          protocolVersion: "under Jewelery",
          signature: "East",
        },
        latLong: "1,1",
      },
    },
    recurring: {
      agreementId: "Escudo Graphical",
      paymentAgreementExpiryDate: new RFCDate("2020-09-20"),
      recurringSequence: RecurringSequence.Subsequent,
    },
    retailAddenda: {
      gratuityAmount: 234,
      isTaxable: false,
      level3: {
        alternateTaxAmount: 100598,
        dutyAmount: 58617,
        lineItems: [
          {
            itemComodityCode: "plum whose",
            lineItemDescriptionText: "female Argentina until",
            lineItemDetailCode: "Hortense Garden",
            lineItemDiscountIndicator: false,
            lineItemDiscountTreatmentCode: "Cambridgeshire hopelessly Gasoline",
            lineItemTaxIndicator: false,
            lineItemTaxes: [
              {
                lineItemTaxAmount: 208660,
                taxPercent: "line",
                taxTypeCode: "henry application",
              },
            ],
            lineItemUnitQuantity: "solid",
            lineItemUnitofMeasureCode: "Facilitator moderate",
            merchantProductIdentifier: "encryption corrupt",
            purchaseTransactionDiscountPercent: "Handmade",
            taxInclusiveLineItemTotalAmount: 245423,
            transactionDiscountAmount: 899802,
            unitPriceAmount: 117363,
          },
        ],
        orderDiscountTreatmentCode: "input maximize generating",
        partyTaxGovernmentIssuedIdentifier: "mope Borders Promethium",
        shipFromAddressPostalCode: "Samoa spanish Chicken",
        shipToAddressCountryCode: "commodi Plastic",
        shipToAddressPostalCode: "Frozen",
        shippingValueAddedTaxAmount: 641611,
        shippingValueAddedTaxPercent: "SCSI",
        totalShippingAmount: 829514,
        totalTransactionDiscountAmount: 989915,
        transactionAdvices: [
          {
            transactionAdviceText: "Shoes",
          },
        ],
        valueAddedTaxAmount: 465099,
        valueAddedTaxInvoiceReferenceNumber: "generating Diesel Account",
        valueAddedTaxPercent: "hence architectures Southwest",
      },
      orderDate: "Peso state",
      purchaseOrderNumber: "Fresh",
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
        phoneNumber: "BMW placeat",
      },
      phone: {
        countryCode: 1,
        phoneNumber: "payment Recumbent",
      },
      shippingAddress: {
        city: "Nowhere",
        countryCode: "USA",
        line1: "123 Some Street",
        line2: "Apartment 3b",
        postalCode: "99999",
        state: "FL",
      },
      shippingDescription: "Southfield Minnesota Cadillac",
    },
    statementDescriptor: "wireless Global Granite",
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

const sdk = new TestingPayments({
  security: {
    bearerAuth: "",
  },
});

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

const sdk = new TestingPayments({
  security: {
    bearerAuth: "",
  },
});

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

const sdk = new TestingPayments({
  security: {
    bearerAuth: "",
  },
});

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
        phoneNumber: "Sharable",
      },
      nationalId: "SDD Midwest",
      phone: {
        countryCode: 1,
        phoneNumber: "Beauty Account",
      },
      referenceId: "AB12345678",
    },
    accountOnFile: AccountOnFile.NotStored,
    amount: 1234,
    currency: Currency.Try,
    initiatorType: InitiatorType.Cardholder,
    merchant: {
      merchantCategoryCode: "4819",
      merchantLogoUrl: "tertiary male",
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
        email: "Vernie_Kirlin44@gmail.com",
        merchantPurchaseDescription: "BCEAO Metical vortals",
        name: "Southwest nulla",
        phone: "(575) 493-6713 x3933",
        url: "https://upset-oats.net",
      },
    },
    merchantOrderNumber: "X1234",
    paymentMethodType: {
      ach: {
        accountNumber: "tan lavender juggle",
        accountType: AccountType.Checking,
        financialInstitutionRoutingNumber: "eligendi",
        isTransactionMicroEntry: false,
        paymentType: PaymentType.Web,
      },
      card: {
        accountNumber: "Androgynous Mountain",
        authentication: {
          electronicCommerceIndicator: "05",
          tokenAuthenticationValue: "optical Research",
        },
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
        walletProvider: RefundCardWalletProvider.GooglePay,
      },
      transactionReference: {
        transactionReferenceId: "6b4c7800-4017-11e9-b649-8de064224186",
      },
    },
    retailAddenda: {
      gratuityAmount: 234,
      isTaxable: false,
      level3: {
        alternateTaxAmount: 850204,
        dutyAmount: 332817,
        lineItems: [
          {
            itemComodityCode: "Bicycle",
            lineItemDescriptionText: "Mali",
            lineItemDetailCode: "unlined Regional",
            lineItemDiscountIndicator: false,
            lineItemDiscountTreatmentCode: "Electronic",
            lineItemTaxIndicator: false,
            lineItemTaxes: [
              {
                lineItemTaxAmount: 214654,
                taxPercent: "carpool driver keep",
                taxTypeCode: "lavender",
              },
            ],
            lineItemUnitQuantity: "Oregon Tunnel East",
            lineItemUnitofMeasureCode: "World Fish",
            merchantProductIdentifier: "payment repellat",
            purchaseTransactionDiscountPercent: "Illinois Music Grocery",
            taxInclusiveLineItemTotalAmount: 691496,
            transactionDiscountAmount: 879596,
            unitPriceAmount: 141384,
          },
        ],
        orderDiscountTreatmentCode: "Northwest interactive",
        partyTaxGovernmentIssuedIdentifier: "SUV",
        shipFromAddressPostalCode: "kelvin Industrial",
        shipToAddressCountryCode: "Interactions Dollar",
        shipToAddressPostalCode: "lavender firewall pajamas",
        shippingValueAddedTaxAmount: 655716,
        shippingValueAddedTaxPercent: "Loan parse Checking",
        totalShippingAmount: 145663,
        totalTransactionDiscountAmount: 634077,
        transactionAdvices: [
          {
            transactionAdviceText: "Montana withdrawal Avon",
          },
        ],
        valueAddedTaxAmount: 599471,
        valueAddedTaxInvoiceReferenceNumber: "Lynwood gold",
        valueAddedTaxPercent: "Maine",
      },
      orderDate: "trans intrude",
      purchaseOrderNumber: "Mobility",
      taxAmount: 1234,
    },
    statementDescriptor: "Representative",
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

const sdk = new TestingPayments({
  security: {
    bearerAuth: "",
  },
});

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

const sdk = new TestingPayments({
  security: {
    bearerAuth: "",
  },
});

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

const sdk = new TestingPayments({
  security: {
    bearerAuth: "",
  },
});

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
        phoneNumber: "ack ADP World",
      },
      nationalId: "miserly Merced",
      phone: {
        countryCode: 1,
        phoneNumber: "humiliating",
      },
      referenceId: "AB12345678",
    },
    accountOnFile: AccountOnFile.NotStored,
    currency: Currency.Djf,
    initiatorType: InitiatorType.Cardholder,
    merchant: {
      merchantCategoryCode: "4819",
      merchantLogoUrl: "didactic coulomb",
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
        email: "Ezekiel12@gmail.com",
        merchantPurchaseDescription: "bypassing Gloves optical",
        name: "Montgomery Berkshire",
        phone: "1-449-958-7187",
        url: "http://crowded-deformation.net",
      },
    },
    merchantOrderNumber: "X1234",
    paymentMethodType: {
      ach: {
        accountNumber: "deposit",
        accountType: AccountType.Checking,
        achVerificationType: VerificationACHACHVerificationType.AccountOwner,
        consumerVerificationId: "kilogram confess",
        consumerVerificationIdState: "FL",
        consumerVerificationIdType: VerificationACHConsumerVerificationIdType.StateId,
        financialInstitutionRoutingNumber: "revoke",
        individualBirthDate: new RFCDate("2000-09-20"),
        last4SSN: "1234",
        paymentType: PaymentType.Tel,
      },
      card: {
        accountNumber: "Steel",
        accountNumberType: VerificationCardAccountNumberType.SafetechEncryption,
        authentication: {
          scaExemptionReason: AuthenticationSCAExemptionReason.LowValuePayment,
          electronicCommerceIndicator: "05",
          threeDS: {
            authenticationTransactionId: "indigo Lead hack",
            authenticationValue: "bias Identity Avon",
            threeDSProgramProtocol: "2",
            version1: {
              threeDSPAResStatus: Version1ThreeDSPAResStatus.N,
              threeDSVEResEnrolled: Version1ThreeDSVEResEnrolled.Y,
            },
            version2: {
              threeDSTransactionStatus: Version2ThreeDSTransactionStatus.U,
              threeDSTransactionStatusReasonCode: "01",
            },
          },
          tokenAuthenticationValue: "CLI synthesize Northwest",
        },
        cvv: "Aluminium innovate Hip",
        encryptionIntegrityCheck: "Handcrafted North Intelligent",
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
    websiteShortMerchantUniversalResourceLocatorText: "online newton Account",
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

