# FraudCard

Card payment instrument for fraud checking


## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `accountNumber`                                      | *string*                                             | :heavy_check_mark:                                   | Identifies a unique occurrence of a payment account. |
| `expiry`                                             | [shared.Expiry](../../models/shared/expiry.md)       | :heavy_minus_sign:                                   | Expiration date                                      |