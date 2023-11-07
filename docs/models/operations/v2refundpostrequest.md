# V2RefundPostRequest


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `merchantId`                                                   | *string*                                                       | :heavy_check_mark:                                             | Identifier for the merchant account                            | 991234567890                                                   |
| `minorVersion`                                                 | *string*                                                       | :heavy_minus_sign:                                             | Identifier for the minor release version                       | 1                                                              |
| `refund`                                                       | [shared.Refund](../../models/shared/refund.md)                 | :heavy_check_mark:                                             | The refund request.                                            |                                                                |
| `requestId`                                                    | *string*                                                       | :heavy_check_mark:                                             | Merchant identifier for the request. The value must be unique. | 10cc0270-7bed-11e9-a188-1763956dd7f6                           |