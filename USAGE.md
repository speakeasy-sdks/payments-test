<!-- Start SDK Example Usage -->


```typescript
import { TestingPayments } from "testingPayments";

(async () => {
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
<!-- End SDK Example Usage -->