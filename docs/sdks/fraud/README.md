# Fraud
(*fraud*)

## Overview

Fraud check for a payment

### Available Operations

* [v2FraudCheckByIdGet](#v2fraudcheckbyidget) - Retrieve fraud response
* [v2FraudCheckPost](#v2fraudcheckpost) - Fraud check
* [v2FraudCheckget](#v2fraudcheckget) - Retrieve fraud response

## v2FraudCheckByIdGet

Retrieve fraud score of a payment instrument with cardholder information without placing a funds hold on the consumer account (Not supported by all payment methods)

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";

async function run() {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.fraud.v2FraudCheckByIdGet({
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

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.V2FraudCheckByIdGetRequest](../../sdk/models/operations/v2fraudcheckbyidgetrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.V2FraudCheckByIdGetResponse](../../sdk/models/operations/v2fraudcheckbyidgetresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.Messages                 | 400,401,403,404,412,500,503,504 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

## v2FraudCheckPost

Validate a payment instrument with cardholder information without placing a funds hold on the consumer account (Not supported by all payment methods)

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import { Currency } from "testingPayments/dist/sdk/models/shared";
import { RFCDate } from "testingPayments/dist/sdk/types";

async function run() {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.fraud.v2FraudCheckPost({
    fraudCheckRequest: {
      accountHolder: {
        billingAddress: {
          city: "Nowhere",
          countryCode: "USA",
          line1: "123 Some Street",
          line2: "Apartment 3b",
          postalCode: "99999",
          state: "FL",
        },
        birthDate: new RFCDate("2000-09-20"),
        email: "john.doe@email.xyz",
        fullName: "Jane Doe",
        phone: {
          countryCode: 1,
          phoneNumber: "string",
        },
        referenceId: "AB12345678",
      },
      amount: 1234,
      currency: Currency.Mur,
      fraudScore: {},
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
      paymentMethodType: {
        card: {
          accountNumber: "string",
          expiry: {
            month: 5,
            year: 2020,
          },
        },
      },
      shipTo: {
        fullName: "Jane Doe",
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
| `request`                                                                                    | [operations.V2FraudCheckPostRequest](../../sdk/models/operations/v2fraudcheckpostrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.V2FraudCheckPostResponse](../../sdk/models/operations/v2fraudcheckpostresponse.md)>**
### Errors

| Error Object                | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.Messages             | 400,401,403,412,500,503,504 | application/json            |
| errors.SDKError             | 4xx-5xx                     | */*                         |

## v2FraudCheckget

Retrieve fraud score of a payment instrument with cardholder information without placing a funds hold on the consumer account (Not supported by all payment methods)

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";

async function run() {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.fraud.v2FraudCheckget({
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

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.V2FraudCheckgetRequest](../../sdk/models/operations/v2fraudcheckgetrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.V2FraudCheckgetResponse](../../sdk/models/operations/v2fraudcheckgetresponse.md)>**
### Errors

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.Messages                 | 400,401,403,404,412,500,503,504 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |
