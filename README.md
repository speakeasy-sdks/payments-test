# testingPayments

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/payments-test.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/bolt-php/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/payments-test
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/payments-test
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [transactions](docs/sdks/transactions/README.md)

* [v2CaptureByIdGet](docs/sdks/transactions/README.md#v2capturebyidget) - Retrieve Payment Details by transaction Id
* [v2CaptureGet](docs/sdks/transactions/README.md#v2captureget) - Retrieve Payment Details
* [v2CapturePost](docs/sdks/transactions/README.md#v2capturepost) - Capture a payment
* [v2PaymentByIdGet](docs/sdks/transactions/README.md#v2paymentbyidget) - Get a specific payment transaction by transaction Id
* [v2PaymentGet](docs/sdks/transactions/README.md#v2paymentget) - Get a specific payment transaction by request Id
* [v2PaymentPatch](docs/sdks/transactions/README.md#v2paymentpatch) - Update payment transaction by transaction Id
* [v2PaymentPost](docs/sdks/transactions/README.md#v2paymentpost) - Create a payment
* [v2RefundByIdGet](docs/sdks/transactions/README.md#v2refundbyidget) - Get a specific refund transaction by transaction Id
* [v2RefundGet](docs/sdks/transactions/README.md#v2refundget) - Get a specific refund transaction by request Id
* [v2RefundPost](docs/sdks/transactions/README.md#v2refundpost) - Create a refund
* [v2VerificationByIdGet](docs/sdks/transactions/README.md#v2verificationbyidget) - Get a specific verification transaction by transaction Id
* [v2VerificationGet](docs/sdks/transactions/README.md#v2verificationget) - Get a specific verification transaction by request Id
* [v2VerificationPost](docs/sdks/transactions/README.md#v2verificationpost) - Verify a payment instrument

### [fraud](docs/sdks/fraud/README.md)

* [v2FraudCheckByIdGet](docs/sdks/fraud/README.md#v2fraudcheckbyidget) - Retrieve fraud response
* [v2FraudCheckPost](docs/sdks/fraud/README.md#v2fraudcheckpost) - Fraud check
* [v2FraudCheckget](docs/sdks/fraud/README.md#v2fraudcheckget) - Retrieve fraud response

### [healthCheck](docs/sdks/healthcheck/README.md)

* [v2PaymentHealthGet](docs/sdks/healthcheck/README.md#v2paymenthealthget) - Health check for payments
* [v2RefundHealthGet](docs/sdks/healthcheck/README.md#v2refundhealthget) - Health check for refunds
* [v2VerificationHealthGet](docs/sdks/healthcheck/README.md#v2verificationhealthget) - Health check for verifications
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object                    | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.Messages                 | 400,401,403,404,412,500,503,504 | application/json                |
| errors.SDKError                 | 4xx-5xx                         | */*                             |

Example

```typescript
import { TestingPayments } from "testingPayments";

async function run() {
    const sdk = new TestingPayments({
        security: {
            bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
        },
    });

    let res;
    try {
        res = await sdk.transactions.v2CaptureByIdGet({
            id: "12cc0270-7bed-11e9-a188-1763956dd7f6",
            merchantId: "991234567890",
            minorVersion: "1",
            requestId: "10cc0270-7bed-11e9-a188-1763956dd7f6",
        });
    } catch (err) {
        if (err instanceof errors.Messages) {
            console.error(err); // handle exception
            throw err;
        } else if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api-ms.payments.jpmorgan.com/api/v2` | None |
| 1 | `https://cat-api.merchant.jpmorgan.com/api/v2` | None |

#### Example

```typescript
import { TestingPayments } from "testingPayments";

async function run() {
    const sdk = new TestingPayments({
        serverIdx: 1,
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


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { TestingPayments } from "testingPayments";

async function run() {
    const sdk = new TestingPayments({
        serverURL: "https://api-ms.payments.jpmorgan.com/api/v2",
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
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { testingPayments } from "TestingPayments";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new TestingPayments({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `bearerAuth` | http         | HTTP Bearer  |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
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
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
