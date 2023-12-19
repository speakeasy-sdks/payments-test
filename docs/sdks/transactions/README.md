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

async function run() {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.transactions.v2CaptureByIdGet({
    id: "12cc0270-7bed-11e9-a188-1763956dd7f6",
    merchantId: "991234567890",
    minorVersion: "1",
    requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.V2CaptureByIdGetRequest](../../sdk/models/operations/v2capturebyidgetrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.V2CaptureByIdGetResponse](../../sdk/models/operations/v2capturebyidgetresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.Messages                 | 400,401,403,404,412,500,503,504 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## v2CaptureGet

Request capture details for a specific capture request

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";

async function run() {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.transactions.v2CaptureGet({
    merchantId: "991234567890",
    minorVersion: "1",
    requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
    requestIdentifier: "10cc0270-7bed-11e9-a188-1763956dd7f6",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.V2CaptureGetRequest](../../sdk/models/operations/v2capturegetrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.V2CaptureGetResponse](../../sdk/models/operations/v2capturegetresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.Messages                 | 400,401,403,404,412,500,503,504 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## v2CapturePost

Capture a payment request for existing authorized transaction

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import {
  AccountNumberType,
  AccountOnFile,
  CaptureMethod,
  Currency,
  InitiatorType,
  MerchantPreferredRouting,
  MerchantSalesChannelName,
  PartialAuthorizationSupport,
  PreferredPaymentNetworkName,
  RecurringSequence,
  SCAExemptionReason,
  ThreeDSPAResStatus,
  ThreeDSTransactionStatus,
  ThreeDSVEResEnrolled,
  WalletProvider,
} from "testingPayments/dist/sdk/models/shared";
import { RFCDate } from "testingPayments/dist/sdk/types";

async function run() {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.transactions.v2CapturePost({
    captureRequest: {
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
          phoneNumber: "string",
        },
        phone: {
          countryCode: 1,
          phoneNumber: "string",
        },
        referenceId: "AB12345678",
      },
      accountOnFile: AccountOnFile.NotStored,
      amount: 1234,
      initiatorType: InitiatorType.Cardholder,
      installment: {
        planId: "BANORTE_WITHOUT_INTEREST",
      },
      merchant: {
        merchantCategoryCode: "4819",
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
        },
      },
      merchantOrderNumber: "X1234",
      multiCapture: {},
      paymentMethodType: {
        card: {
          accountNumber: "string",
          accountUpdater: {
            requestAccountUpdater: true,
          },
          authentication: {
            electronicCommerceIndicator: "05",
            threeDS: {
              threeDSProgramProtocol: "2",
              version1: {},
              version2: {
                threeDSTransactionStatusReasonCode: "01",
              },
            },
          },
          expiry: {
            month: 5,
            year: 2020,
          },
          originalNetworkTransactionId: "1c4b1100-4017-11e9-b649-8de064224186",
          preferredPaymentNetworkNameList: [
            PreferredPaymentNetworkName.PulsePinless,
          ],
        },
      },
      recurring: {
        paymentAgreementExpiryDate: new RFCDate("2020-09-20"),
      },
      retailAddenda: {
        gratuityAmount: 234,
        level3: {
          lineItems: [
            {
              lineItemTaxes: [
                {},
              ],
            },
          ],
          transactionAdvices: [
            {},
          ],
        },
        taxAmount: 1234,
      },
      risk: {
        tokenRiskScore: 42,
        transactionRiskScore: 42,
      },
      shipTo: {
        email: "john.doe@email.xyz",
        fullName: "Jane Doe",
        mobile: {
          countryCode: 1,
          phoneNumber: "string",
        },
        phone: {
          countryCode: 1,
          phoneNumber: "string",
        },
        shippingAddress: {
          city: "Nowhere",
          countryCode: "USA",
          line1: "123 Some Street",
          line2: "Apartment 3b",
          postalCode: "99999",
          state: "FL",
        },
      },
    },
    id: "12cc0270-7bed-11e9-a188-1763956dd7f6",
    merchantId: "991234567890",
    minorVersion: "1",
    requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.V2CapturePostRequest](../../sdk/models/operations/v2capturepostrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.V2CapturePostResponse](../../sdk/models/operations/v2capturepostresponse.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Messages             | 400,401,403,412,500,503,504 | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## v2PaymentByIdGet

Get a specific payment transaction by transaction Id

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";

async function run() {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.transactions.v2PaymentByIdGet({
    id: "12cc0270-7bed-11e9-a188-1763956dd7f6",
    merchantId: "991234567890",
    minorVersion: "1",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.V2PaymentByIdGetRequest](../../sdk/models/operations/v2paymentbyidgetrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.V2PaymentByIdGetResponse](../../sdk/models/operations/v2paymentbyidgetresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.Messages                 | 400,401,403,404,412,500,503,504 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## v2PaymentGet

Request Original Authorization Transaction details

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";

async function run() {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.transactions.v2PaymentGet({
    merchantId: "991234567890",
    minorVersion: "1",
    requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
    requestIdentifier: "12cc0270-7bed-11e9-a188-1763956dd7f6",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.V2PaymentGetRequest](../../sdk/models/operations/v2paymentgetrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.V2PaymentGetResponse](../../sdk/models/operations/v2paymentgetresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.Messages                 | 400,401,403,404,412,500,503,504 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## v2PaymentPatch

Update an existing payment 1.Capture a payment for settlement. 2. Void a payment and authorization. The transaction will not settle. 3. Update a payment.

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import { CaptureMethod } from "testingPayments/dist/sdk/models/shared";

async function run() {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.transactions.v2PaymentPatch({
    id: "12cc0270-7bed-11e9-a188-1763956dd7f6",
    merchantId: "991234567890",
    minorVersion: "1",
    paymentPatch: {
      amount: 1234,
      gratuityAmount: 234,
      isVoid: false,
      taxAmount: 1234,
    },
    requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.V2PaymentPatchRequest](../../sdk/models/operations/v2paymentpatchrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.V2PaymentPatchResponse](../../sdk/models/operations/v2paymentpatchresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.Messages                 | 400,401,403,404,412,500,503,504 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## v2PaymentPost

Create a payment request with a specified payment instrument. Authorization and Sale (Authorization and capture).

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import {
  AccountNumberType,
  AccountOnFile,
  AccountType,
  BankCode,
  CaptureMethod,
  Currency,
  InitiatorType,
  MerchantPreferredRouting,
  MerchantSalesChannelName,
  PartialAuthorizationSupport,
  PaymentType,
  PreferredPaymentNetworkName,
  RecurringSequence,
  SCAExemptionReason,
  ThreeDSPAResStatus,
  ThreeDSTransactionStatus,
  ThreeDSVEResEnrolled,
  TransactionRoutingOverrideList,
  TypeT,
  WalletProvider,
} from "testingPayments/dist/sdk/models/shared";
import { RFCDate } from "testingPayments/dist/sdk/types";

async function run() {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.transactions.v2PaymentPost({
    merchantId: "991234567890",
    minorVersion: "1",
    payment: {
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
          phoneNumber: "string",
        },
        phone: {
          countryCode: 1,
          phoneNumber: "string",
        },
        referenceId: "AB12345678",
      },
      accountOnFile: AccountOnFile.NotStored,
      amount: 1234,
      currency: Currency.Lrd,
      initiatorType: InitiatorType.Cardholder,
      installment: {
        planId: "BANORTE_WITHOUT_INTEREST",
      },
      merchant: {
        merchantCategoryCode: "4819",
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
        },
      },
      merchantOrderNumber: "X1234",
      paymentMethodType: {
        ach: {
          accountNumber: "string",
          financialInstitutionRoutingNumber: "string",
        },
        applepay: {
          encryptedPaymentBundle: {
            encryptedPayload: "IzxSm6YWehmlLvk5HY/rsl4hhWuorOG7R6ERP0fqzTokMhS5JtyAU8ajPIu/aHcbOxYQOhvk/K+3n6N7SbEKgSuT100YFmeIKh3IkSLa4u1/1Y4Z9y5bqZFPxd8IcQnuR8HZKgJDHCXQzDDYP4JBMtqZQzRztzsIfa4eoOnGuZCc2s+WxGap4iv92vPj8tAHonvSE9t0ByUCBLgfvu25GR0eJb6UM8nBvxP2/qBSElOuyLo80enrZ6tlp3xtpBEV8oeOc9iLSmalayfD7JQxZXd2cWA/sZPWn4VGIj7Dt05NYE/iFZrw2VOa2hOJ4/4dOGS1KJzhw+RPRufhadAF96k7O3LwbMphcM9sZLN/Y/LSqVFGzIq6ZlrnOwcxzvjNqw4ccNl4v3eehL4TRRgfF3LirV56BeADzJmq0pB3W/vu",
            encryptedPaymentHeader: {
              publicKeyHash: "MUwkjyUBpyRiZTVMUrIzA6+SIrr9mV8nNct6YO0rGNg=",
            },
          },
          latLong: "1,1",
        },
        boleto: {
          bankCode: BankCode.Jpm,
          documentNumber: "string",
          dueDate: new RFCDate("2020-09-20"),
          expiryDate: new RFCDate("2020-09-20"),
          paidAmount: "string",
          paidDate: "2018-12-21T09:30:15.987Z",
          ticketInstructions: "Pay to maturity",
          type: TypeT.Bdp,
          uniqueNumber: "string",
        },
        card: {
          accountNumber: "string",
          accountUpdater: {
            requestAccountUpdater: true,
          },
          authentication: {
            electronicCommerceIndicator: "05",
            threeDS: {
              threeDSProgramProtocol: "2",
              version1: {},
              version2: {
                threeDSTransactionStatusReasonCode: "01",
              },
            },
          },
          expiry: {
            month: 5,
            year: 2020,
          },
          originalNetworkTransactionId: "1c4b1100-4017-11e9-b649-8de064224186",
          preferredPaymentNetworkNameList: [
            PreferredPaymentNetworkName.StarPinless,
          ],
        },
        googlepay: {
          encryptedPaymentBundle: {
            encryptedPayload: "IzxSm6YWehmlLvk5HY/rsl4hhWuorOG7R6ERP0fqzTokMhS5JtyAU8ajPIu/aHcbOxYQOhvk/K+3n6N7SbEKgSuT100YFmeIKh3IkSLa4u1/1Y4Z9y5bqZFPxd8IcQnuR8HZKgJDHCXQzDDYP4JBMtqZQzRztzsIfa4eoOnGuZCc2s+WxGap4iv92vPj8tAHonvSE9t0ByUCBLgfvu25GR0eJb6UM8nBvxP2/qBSElOuyLo80enrZ6tlp3xtpBEV8oeOc9iLSmalayfD7JQxZXd2cWA/sZPWn4VGIj7Dt05NYE/iFZrw2VOa2hOJ4/4dOGS1KJzhw+RPRufhadAF96k7O3LwbMphcM9sZLN/Y/LSqVFGzIq6ZlrnOwcxzvjNqw4ccNl4v3eehL4TRRgfF3LirV56BeADzJmq0pB3W/vu",
            encryptedPaymentHeader: {
              publicKeyHash: "MUwkjyUBpyRiZTVMUrIzA6+SIrr9mV8nNct6YO0rGNg=",
            },
          },
          latLong: "1,1",
        },
      },
      recurring: {
        paymentAgreementExpiryDate: new RFCDate("2020-09-20"),
      },
      retailAddenda: {
        gratuityAmount: 234,
        level3: {
          lineItems: [
            {
              lineItemTaxes: [
                {},
              ],
            },
          ],
          transactionAdvices: [
            {},
          ],
        },
        taxAmount: 1234,
      },
      risk: {
        tokenRiskScore: 42,
        transactionRiskScore: 42,
      },
      shipTo: {
        email: "john.doe@email.xyz",
        fullName: "Jane Doe",
        mobile: {
          countryCode: 1,
          phoneNumber: "string",
        },
        phone: {
          countryCode: 1,
          phoneNumber: "string",
        },
        shippingAddress: {
          city: "Nowhere",
          countryCode: "USA",
          line1: "123 Some Street",
          line2: "Apartment 3b",
          postalCode: "99999",
          state: "FL",
        },
      },
      transactionRoutingOverrideList: [
        TransactionRoutingOverrideList.Redecard,
      ],
    },
    requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.V2PaymentPostRequest](../../sdk/models/operations/v2paymentpostrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.V2PaymentPostResponse](../../sdk/models/operations/v2paymentpostresponse.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Messages             | 400,401,403,412,500,503,504 | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## v2RefundByIdGet

Get a specific refund transaction by transaction Id

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";

async function run() {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.transactions.v2RefundByIdGet({
    id: "12cc0270-7bed-11e9-a188-1763956dd7f6",
    merchantId: "991234567890",
    minorVersion: "1",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.V2RefundByIdGetRequest](../../sdk/models/operations/v2refundbyidgetrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.V2RefundByIdGetResponse](../../sdk/models/operations/v2refundbyidgetresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.Messages                 | 400,401,403,404,412,500,503,504 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## v2RefundGet

Creates a refund request and returns funds to the consumer. 1. For refund associated with a previous payment, send transactionReferenceId. 2. For standalone refunds, send order and payment objects.

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";

async function run() {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.transactions.v2RefundGet({
    merchantId: "991234567890",
    minorVersion: "1",
    requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
    requestIdentifier: "12cc0270-7bed-11e9-a188-1763956dd7f6",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.V2RefundGetRequest](../../sdk/models/operations/v2refundgetrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.V2RefundGetResponse](../../sdk/models/operations/v2refundgetresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.Messages                 | 400,401,403,404,412,500,503,504 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## v2RefundPost

Creates a refund request and returns funds to the consumer. 1. For refund associated with a previous payment, send transactionReferenceId. 2. For standalone refunds, send order and payment objects.

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
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

async function run() {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.transactions.v2RefundPost({
    merchantId: "991234567890",
    minorVersion: "1",
    refund: {
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
          phoneNumber: "string",
        },
        phone: {
          countryCode: 1,
          phoneNumber: "string",
        },
        referenceId: "AB12345678",
      },
      accountOnFile: AccountOnFile.NotStored,
      amount: 1234,
      initiatorType: InitiatorType.Cardholder,
      merchant: {
        merchantCategoryCode: "4819",
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
        },
      },
      merchantOrderNumber: "X1234",
      paymentMethodType: {
        ach: {
          accountNumber: "string",
          financialInstitutionRoutingNumber: "string",
        },
        card: {
          accountNumber: "string",
          authentication: {
            electronicCommerceIndicator: "05",
          },
          expiry: {
            month: 5,
            year: 2020,
          },
          originalNetworkTransactionId: "1c4b1100-4017-11e9-b649-8de064224186",
          preferredPaymentNetworkNameList: [
            PreferredPaymentNetworkName.StarPinless,
          ],
        },
        transactionReference: {
          transactionReferenceId: "6b4c7800-4017-11e9-b649-8de064224186",
        },
      },
      retailAddenda: {
        gratuityAmount: 234,
        level3: {
          lineItems: [
            {
              lineItemTaxes: [
                {},
              ],
            },
          ],
          transactionAdvices: [
            {},
          ],
        },
        taxAmount: 1234,
      },
    },
    requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.V2RefundPostRequest](../../sdk/models/operations/v2refundpostrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.V2RefundPostResponse](../../sdk/models/operations/v2refundpostresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.Messages                 | 400,401,403,404,412,500,503,504 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## v2VerificationByIdGet

Request Original Authorization Transaction details for an incoming notification subscription

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";

async function run() {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.transactions.v2VerificationByIdGet({
    id: "12cc0270-7bed-11e9-a188-1763956dd7f6",
    merchantId: "991234567890",
    minorVersion: "1",
    requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.V2VerificationByIdGetRequest](../../sdk/models/operations/v2verificationbyidgetrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.V2VerificationByIdGetResponse](../../sdk/models/operations/v2verificationbyidgetresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.Messages                 | 400,401,403,404,412,500,503,504 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## v2VerificationGet

Creates a refund request and returns funds to the consumer. 1. For refund associated with a previous payment, send transactionReferenceId. 2. For standalone refunds, send order and payment objects.

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";

async function run() {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.transactions.v2VerificationGet({
    merchantId: "991234567890",
    minorVersion: "1",
    requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
    requestIdentifier: "12cc0270-7bed-11e9-a188-1763956dd7f6",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.V2VerificationGetRequest](../../sdk/models/operations/v2verificationgetrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.V2VerificationGetResponse](../../sdk/models/operations/v2verificationgetresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.Messages                 | 400,401,403,404,412,500,503,504 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## v2VerificationPost

Validate a payment instrument with cardholder information without placing a funds hold on the consumer account (Not supported by all payment methods)

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import {
  AccountOnFile,
  AccountType,
  AchVerificationType,
  ConsumerVerificationIdType,
  Currency,
  InitiatorType,
  PaymentType,
  RecurringSequence,
  SCAExemptionReason,
  ThreeDSPAResStatus,
  ThreeDSTransactionStatus,
  ThreeDSVEResEnrolled,
  TransactionRoutingOverrideList,
  VerificationCardAccountNumberType,
  VerificationCardWalletProvider,
} from "testingPayments/dist/sdk/models/shared";
import { RFCDate } from "testingPayments/dist/sdk/types";

async function run() {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.transactions.v2VerificationPost({
    merchantId: "991234567890",
    minorVersion: "1",
    requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
    verification: {
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
          phoneNumber: "string",
        },
        phone: {
          countryCode: 1,
          phoneNumber: "string",
        },
        referenceId: "AB12345678",
      },
      accountOnFile: AccountOnFile.NotStored,
      currency: Currency.Wst,
      initiatorType: InitiatorType.Cardholder,
      merchant: {
        merchantCategoryCode: "4819",
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
        },
      },
      merchantOrderNumber: "X1234",
      paymentMethodType: {
        ach: {
          consumerVerificationIdState: "FL",
          individualBirthDate: new RFCDate("2000-09-20"),
          last4SSN: "1234",
        },
        card: {
          authentication: {
            electronicCommerceIndicator: "05",
            threeDS: {
              threeDSProgramProtocol: "2",
              version1: {},
              version2: {
                threeDSTransactionStatusReasonCode: "01",
              },
            },
          },
          expiry: {
            month: 5,
            year: 2020,
          },
          originalNetworkTransactionId: "1c4b1100-4017-11e9-b649-8de064224186",
        },
      },
      transactionRoutingOverrideList: [
        TransactionRoutingOverrideList.Redecard,
      ],
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.V2VerificationPostRequest](../../sdk/models/operations/v2verificationpostrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.V2VerificationPostResponse](../../sdk/models/operations/v2verificationpostresponse.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Messages             | 400,401,403,412,500,503,504 | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |
