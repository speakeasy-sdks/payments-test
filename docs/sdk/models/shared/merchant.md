# Merchant

Information about the merchant


## Fields

| Field                                                                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                                                                      | Required                                                                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                                                                               | Example                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `merchantCategoryCode`                                                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                        | MCC or Merchant Category Code                                                                                                                                                                                                                                                                                             | 4819                                                                                                                                                                                                                                                                                                                      |
| `merchantLogoUrl`                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                        | A reference to a web resource on the internet specifying its location on a computer network and a mechanism for retrieving. This is a pointer to a location containing the merchant's registered trademark  (e.g. for the Firm, the stylized CHASE followed by the Octagon).                                              |                                                                                                                                                                                                                                                                                                                           |
| `merchantSoftware`                                                                                                                                                                                                                                                                                                        | [shared.MerchantSoftware](../../../sdk/models/shared/merchantsoftware.md)                                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                                                                                                        | Contains information related to the merchant software                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                           |
| `softMerchant`                                                                                                                                                                                                                                                                                                            | [shared.SoftMerchant](../../../sdk/models/shared/softmerchant.md)                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                        | Soft merchant information is passed to the card association along with the transaction. This soft merchant information may also be used for cases where smaller businesses or franchise outlets are making a sale in which a merchant aggregator or payment facilitatorprocesses the payment transaction on their behalf. |                                                                                                                                                                                                                                                                                                                           |