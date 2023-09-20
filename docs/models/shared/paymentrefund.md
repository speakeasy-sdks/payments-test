# PaymentRefund

Payment refund information for multi capture order


## Fields

| Field                                                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                                                             | Example                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                                                                                                                                                                                                | *number*                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                      | Specifies the monetary value of the transaction performed.                                                                                                                                                                                                                                              | 1234                                                                                                                                                                                                                                                                                                    |
| `refundId`                                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                      | Identifies a unique occurrence of a payment settlement request when the authorization is complete and the transaction is ready for settlement. The transaction can no longer be edited but can be voided.                                                                                               |                                                                                                                                                                                                                                                                                                         |
| `transactionStatusCode`                                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                      | Codifies the point in the payment transaction flow of the transaction. For example, a typical transaction is authorized then captured for clearing and settlement; closed is when the transaction is ready for clearing and completed when the transaction is sent to the payment network for clearing. |                                                                                                                                                                                                                                                                                                         |