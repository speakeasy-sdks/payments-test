<!-- Start SDK Example Usage -->


```typescript
import { TestingPayments } from "testingPayments";
import { V2FraudCheckByIdGetResponse } from "testingPayments/dist/sdk/models/operations";

const sdk = new TestingPayments();

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