# HealthCheck
(*healthCheck*)

## Overview

Check if a particular service is available

### Available Operations

* [v2PaymentHealthGet](#v2paymenthealthget) - Health check for payments
* [v2RefundHealthGet](#v2refundhealthget) - Health check for refunds
* [v2VerificationHealthGet](#v2verificationhealthget) - Health check for verifications

## v2PaymentHealthGet

Health check for payments

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";

async function run() {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.healthCheck.v2PaymentHealthGet();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.V2PaymentHealthGetResponse](../../sdk/models/operations/v2paymenthealthgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HealthCheckResource | 429,503                    | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## v2RefundHealthGet

Health check for refunds

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";

async function run() {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.healthCheck.v2RefundHealthGet();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.V2RefundHealthGetResponse](../../sdk/models/operations/v2refundhealthgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HealthCheckResource | 429,503                    | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## v2VerificationHealthGet

Health check for verifications

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";

async function run() {
  const sdk = new TestingPayments({
    security: {
      bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    },
  });

  const res = await sdk.healthCheck.v2VerificationHealthGet();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.V2VerificationHealthGetResponse](../../sdk/models/operations/v2verificationhealthgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HealthCheckResource | 429,503                    | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |
