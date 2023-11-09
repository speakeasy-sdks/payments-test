# FraudCheckRequest

Object for passing fraud check request parameters


## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `accountHolder`                                                                                 | [shared.AccountHolderInformation](../../../sdk/models/shared/accountholderinformation.md)       | :heavy_minus_sign:                                                                              | Information about the card Account Holder for which fraud checking is performed.                |                                                                                                 |
| `amount`                                                                                        | *number*                                                                                        | :heavy_check_mark:                                                                              | Specifies the monetary value of the transaction performed.                                      | 1234                                                                                            |
| `currency`                                                                                      | [shared.Currency](../../../sdk/models/shared/currency.md)                                       | :heavy_check_mark:                                                                              | Describes the currency type of the transaction                                                  |                                                                                                 |
| `fraudScore`                                                                                    | [shared.FraudScore](../../../sdk/models/shared/fraudscore.md)                                   | :heavy_minus_sign:                                                                              | Object for Fraud Score Information                                                              |                                                                                                 |
| `merchant`                                                                                      | [shared.Merchant](../../../sdk/models/shared/merchant.md)                                       | :heavy_minus_sign:                                                                              | Information about the merchant                                                                  |                                                                                                 |
| `paymentMethodType`                                                                             | [shared.FraudCheckPaymentMethodType](../../../sdk/models/shared/fraudcheckpaymentmethodtype.md) | :heavy_check_mark:                                                                              | Object with information for Payment Method Type for  Fraud Check                                |                                                                                                 |
| `shipTo`                                                                                        | [shared.FraudShipTo](../../../sdk/models/shared/fraudshipto.md)                                 | :heavy_minus_sign:                                                                              | Ship To Information used for fraud checking services.                                           |                                                                                                 |