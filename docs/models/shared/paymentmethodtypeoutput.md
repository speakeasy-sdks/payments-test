# PaymentMethodTypeOutput

paymentType


## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ach`                                                                                                                                                                                              | [AchOutput](../../models/shared/achoutput.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                 | Object for ACH (Automated Clearing House) payment method which occurs whenever someone instructs the ACH network to ?push? money from their account to someone else's. This is mostly used in USA. |
| `applepay`                                                                                                                                                                                         | [ApplepayOutput](../../models/shared/applepayoutput.md)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 | Use is for encrypted bundles for web or Internet acceptance of digital device wallets such as Apple Pay                                                                                            |
| `boleto`                                                                                                                                                                                           | [Boleto](../../models/shared/boleto.md)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 | Boleto payment information                                                                                                                                                                         |
| `card`                                                                                                                                                                                             | [CardOutput](../../models/shared/cardoutput.md)                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                 | Card payment instrument                                                                                                                                                                            |
| `googlepay`                                                                                                                                                                                        | [GooglepayOutput](../../models/shared/googlepayoutput.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                 | Use is for encrypted bundles for web or Internet acceptance of digital device wallets such as Google Pay                                                                                           |