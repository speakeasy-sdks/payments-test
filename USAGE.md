<!-- Start SDK Example Usage [usage] -->
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