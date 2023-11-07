# NetworkResponseAccountUpdater

Account update information as returned by the network


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `accountStatus`                                                  | [shared.AccountStatus](../../models/shared/accountstatus.md)     | :heavy_minus_sign:                                               | Contains response information related to Account Updater request |
| `networkResponseCode`                                            | *string*                                                         | :heavy_minus_sign:                                               | Network provided error or reason code                            |
| `replacementCode`                                                | *boolean*                                                        | :heavy_minus_sign:                                               | Indicates if replacement of any information has occurred         |