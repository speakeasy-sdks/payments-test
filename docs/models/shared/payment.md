# Payment

Request information for payment endpoint


## Fields

| Field                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                                                         | Example                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountHolder`                                                                                                                                                                                                                                                                                                                     | [shared.AccountHolder](../../models/shared/accountholder.md)                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                  | Card owner properties                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                     |
| `accountOnFile`                                                                                                                                                                                                                                                                                                                     | [shared.AccountOnFile](../../models/shared/accountonfile.md)                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                  | The label given to indicate if the account number is stored, not stored, or is going to be stored by a merchant. Valid values: STORED NOT_STORED TO_BE_STORED                                                                                                                                                                       | NOT_STORED                                                                                                                                                                                                                                                                                                                          |
| `amount`                                                                                                                                                                                                                                                                                                                            | *number*                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                  | Specifies the monetary value of the transaction performed.                                                                                                                                                                                                                                                                          | 1234                                                                                                                                                                                                                                                                                                                                |
| `captureMethod`                                                                                                                                                                                                                                                                                                                     | [shared.CaptureMethod](../../models/shared/capturemethod.md)                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                  | To capture via separate API call, send captureMethod= ?Manual.? For immediate capture, send captureMethod= ?Now.? For automated delayed capture based on merchant profile setting (default is 120 minutes), send captureMethod= ?Delayed.?                                                                                          |                                                                                                                                                                                                                                                                                                                                     |
| `currency`                                                                                                                                                                                                                                                                                                                          | [shared.Currency](../../models/shared/currency.md)                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                  | Describes the currency type of the transaction                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                     |
| `initiatorType`                                                                                                                                                                                                                                                                                                                     | [shared.InitiatorType](../../models/shared/initiatortype.md)                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                  | Describes the initiator of the transaction for the stored credential framework (MIT/CIT)                                                                                                                                                                                                                                            | CARDHOLDER                                                                                                                                                                                                                                                                                                                          |
| `installment`                                                                                                                                                                                                                                                                                                                       | [shared.Installment](../../models/shared/installment.md)                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                  | Object containing information in the file                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                     |
| `isAmountFinal`                                                                                                                                                                                                                                                                                                                     | *boolean*                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                  | Indicates if the amount is final and will not change                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                     |
| `isCapture`                                                                                                                                                                                                                                                                                                                         | *boolean*                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                  | (Deprecated) For auth only, send isCapture=false. For sale or update an authorized payment to capture, send isCapture=true.                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                     |
| `merchant`                                                                                                                                                                                                                                                                                                                          | [shared.Merchant](../../models/shared/merchant.md)                                                                                                                                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                  | Information about the merchant                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                     |
| `merchantOrderNumber`                                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                  | A unique merchant assigned identifier for the confirmation of goods and/or services purchased. The merchant order provides the merchant a reference to the prices, quantity and description of goods and/or services to be delivered for all transactions included in the sale.                                                     | X1234                                                                                                                                                                                                                                                                                                                               |
| `originalTransactionId`                                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                  | Identifies a unique occurrence of a transaction.                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                     |
| `partialAuthorizationSupport`                                                                                                                                                                                                                                                                                                       | [shared.PartialAuthorizationSupport](../../models/shared/partialauthorizationsupport.md)                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                  | Indicates that the issuer has provided the merchant an authorization for a portion of the amount requested. This service provides an alternative to receiving a decline when the available card balance is not sufficient to approve a transaction in full.In this context, this indicate if merchant support parial authorization. |                                                                                                                                                                                                                                                                                                                                     |
| `paymentMethodType`                                                                                                                                                                                                                                                                                                                 | [shared.PaymentMethodType](../../models/shared/paymentmethodtype.md)                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                  | paymentType                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                     |
| `recurring`                                                                                                                                                                                                                                                                                                                         | [shared.Recurring](../../models/shared/recurring.md)                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                  | Recurring Payment Object                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                     |
| `retailAddenda`                                                                                                                                                                                                                                                                                                                     | [shared.RetailAddenda](../../models/shared/retailaddenda.md)                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                  | Retail inductry specific attributes.                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                     |
| `risk`                                                                                                                                                                                                                                                                                                                              | [shared.RiskInput](../../models/shared/riskinput.md)                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                  | Response information for transactions                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                     |
| `shipTo`                                                                                                                                                                                                                                                                                                                            | [shared.ShipTo](../../models/shared/shipto.md)                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                  | Object containing information about the recipients                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                     |
| `statementDescriptor`                                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                  | Provides textual information about charges or payments on statements. Using clear and accurate statement descriptors can reduce chargebacks and disputes.                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                     |
| `transactionRoutingOverrideList`                                                                                                                                                                                                                                                                                                    | [shared.TransactionRoutingOverrideList](../../models/shared/transactionroutingoverridelist.md)[]                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                  | List of transaction routing providers where the transaction be routed preferred by the merchant .                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                     |