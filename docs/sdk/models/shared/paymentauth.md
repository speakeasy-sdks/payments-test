# PaymentAuth

Authorization request information for multi capture order


## Fields

| Field                                                                                                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                                                                                              | Required                                                                                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                                                                                       | Example                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                | Specifies the monetary value of the transaction performed.                                                                                                                                                                                                                                                                        | 1234                                                                                                                                                                                                                                                                                                                              |
| `authorizationId`                                                                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                | Identifies a unique occurrence of an authorization that is associated with a purchase of goods and/or services. More than one authorization can exist for a purchase, as an example in fuel and hotel services a merchant can send multiple authorization requests when the exact amount is unknown until completion of the sale. |                                                                                                                                                                                                                                                                                                                                   |
| `authorizationType`                                                                                                                                                                                                                                                                                                               | [shared.AuthorizationType](../../../sdk/models/shared/authorizationtype.md)                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                | Codifies the type of transaction approval sought by a merchant such as a pre-authorization, final authorization, or undetermined.                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                   |
| `transactionStatusCode`                                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                | Codifies the point in the payment transaction flow of the transaction. For example, a typical transaction is authorized then captured for clearing and settlement; closed is when the transaction is ready for clearing and completed when the transaction is sent to the payment network for clearing.                           |                                                                                                                                                                                                                                                                                                                                   |