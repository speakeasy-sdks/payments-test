# RiskInput

Response information for transactions


## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           | Example                                                                                               |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `requestFraudScore`                                                                                   | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | Indicates the true/false value of whether or not the transaction need to be assessed for fraud check. |                                                                                                       |
| `tokenRiskScore`                                                                                      | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Risk score for token                                                                                  | 42                                                                                                    |
| `transactionRiskScore`                                                                                | *number*                                                                                              | :heavy_minus_sign:                                                                                    | Risk score for transaction                                                                            | 42                                                                                                    |