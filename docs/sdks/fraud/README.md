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

(async() => {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "",
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
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.V2FraudCheckByIdGetRequest](../../models/operations/v2fraudcheckbyidgetrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.V2FraudCheckByIdGetResponse](../../models/operations/v2fraudcheckbyidgetresponse.md)>**


## v2FraudCheckPost

Validate a payment instrument with cardholder information without placing a funds hold on the consumer account (Not supported by all payment methods)

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import { Currency } from "testingPayments/dist/sdk/models/shared";
import { RFCDate } from "testingPayments/dist/sdk/types";

(async() => {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "",
    },
  });

  const res = await sdk.fraud.v2FraudCheckPost({
    fraudCheckRequestInput: {
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
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.V2FraudCheckPostRequest](../../models/operations/v2fraudcheckpostrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.V2FraudCheckPostResponse](../../models/operations/v2fraudcheckpostresponse.md)>**


## v2FraudCheckget

Retrieve fraud score of a payment instrument with cardholder information without placing a funds hold on the consumer account (Not supported by all payment methods)

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";

(async() => {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "",
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
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.V2FraudCheckgetRequest](../../models/operations/v2fraudcheckgetrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.V2FraudCheckgetResponse](../../models/operations/v2fraudcheckgetresponse.md)>**

