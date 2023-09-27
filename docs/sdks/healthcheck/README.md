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
import { V2PaymentHealthGetResponse } from "testingPayments/dist/sdk/models/operations";

const sdk = new TestingPayments({
  security: {
    bearerAuth: "",
  },
});

sdk.healthCheck.v2PaymentHealthGet().then((res: V2PaymentHealthGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.V2PaymentHealthGetResponse](../../models/operations/v2paymenthealthgetresponse.md)>**


## v2RefundHealthGet

Health check for refunds

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import { V2RefundHealthGetResponse } from "testingPayments/dist/sdk/models/operations";

const sdk = new TestingPayments({
  security: {
    bearerAuth: "",
  },
});

sdk.healthCheck.v2RefundHealthGet().then((res: V2RefundHealthGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.V2RefundHealthGetResponse](../../models/operations/v2refundhealthgetresponse.md)>**


## v2VerificationHealthGet

Health check for verifications

### Example Usage

```typescript
import { TestingPayments } from "testingPayments";
import { V2VerificationHealthGetResponse } from "testingPayments/dist/sdk/models/operations";

const sdk = new TestingPayments({
  security: {
    bearerAuth: "",
  },
});

sdk.healthCheck.v2VerificationHealthGet().then((res: V2VerificationHealthGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.V2VerificationHealthGetResponse](../../models/operations/v2verificationhealthgetresponse.md)>**

