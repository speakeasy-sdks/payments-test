# ThreeDSOutput

Contains information about payer authentication using 3-D Secure authentication


## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      | Example                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `authenticationTransactionId`                                                                                                                    | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Identifier provided by the merchant plug in system (MPI) or scheme directory server during payer authentication using 3-D Secure authentication. |                                                                                                                                                  |
| `threeDSProgramProtocol`                                                                                                                         | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Indicates 3-D Secure program protocol used in the transaction.                                                                                   | 2                                                                                                                                                |
| `version1`                                                                                                                                       | [Version1](../../models/shared/version1.md)                                                                                                      | :heavy_minus_sign:                                                                                                                               | Contains information about payer authentication using 3-D Secure authentication version 1                                                        |                                                                                                                                                  |
| `version2`                                                                                                                                       | [Version2](../../models/shared/version2.md)                                                                                                      | :heavy_minus_sign:                                                                                                                               | Contains information about payer authentication using 3-D Secure authentication version 2                                                        |                                                                                                                                                  |