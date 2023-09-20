# testingPayments

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/payments-test.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/bolt-php/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/payments-test
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/payments-test
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->


```typescript
import { TestingPayments } from "testingPayments";
import { V2FraudCheckByIdGetResponse } from "testingPayments/dist/sdk/models/operations";

const sdk = new TestingPayments({
  security: {
    bearerAuth: "",
  },
});

sdk.fraud.v2FraudCheckByIdGet({
  id: "12cc0270-7bed-11e9-a188-1763956dd7f6",
  merchantId: "991234567890",
  minorVersion: "1",
}).then((res: V2FraudCheckByIdGetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Fraud](docs/sdks/fraud/README.md)

* [v2FraudCheckByIdGet](docs/sdks/fraud/README.md#v2fraudcheckbyidget) - Retrieve fraud response
* [v2FraudCheckPost](docs/sdks/fraud/README.md#v2fraudcheckpost) - Fraud check
* [v2FraudCheckget](docs/sdks/fraud/README.md#v2fraudcheckget) - Retrieve fraud response

### [HealthCheck](docs/sdks/healthcheck/README.md)

* [v2PaymentHealthGet](docs/sdks/healthcheck/README.md#v2paymenthealthget) - Health check for payments
* [v2RefundHealthGet](docs/sdks/healthcheck/README.md#v2refundhealthget) - Health check for refunds
* [v2VerificationHealthGet](docs/sdks/healthcheck/README.md#v2verificationhealthget) - Health check for verifications

### [Transactions](docs/sdks/transactions/README.md)

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
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
