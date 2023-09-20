# AuthenticationOutput

The authentication object allows you to opt in to additional security features like 3-D Secure


## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                         | Example                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `scaExemptionReason`                                                                                                                                                                                                                                                                                                                                                                                                                                | [AuthenticationSCAExemptionReason](../../models/shared/authenticationscaexemptionreason.md)                                                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                  | Codifies the justification why a transaction does not have to meet Strong Customer Authentication (SCA) requirements. SCA is a regulatory requirement to reduce fraud and make online payments more secure via two-factor authentication; an authentication based on the use of two or more elements categorized as knowledge (something only the user knows), possession (something only the user possesses) or inherence (something the user is). |                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `authenticationValueResponse`                                                                                                                                                                                                                                                                                                                                                                                                                       | [AuthenticationValueResponse](../../models/shared/authenticationvalueresponse.md)                                                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                  | Returned when more information about authentication is received from the  network                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `electronicCommerceIndicator`                                                                                                                                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                  | Describes the Electronic Commerce Indicator used in cardholder authentication on a network token                                                                                                                                                                                                                                                                                                                                                    | 05                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `threeDS`                                                                                                                                                                                                                                                                                                                                                                                                                                           | [ThreeDSOutput](../../models/shared/threedsoutput.md)                                                                                                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                  | Contains information about payer authentication using 3-D Secure authentication                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `tokenAuthenticationResult`                                                                                                                                                                                                                                                                                                                                                                                                                         | [TokenAuthenticationResult](../../models/shared/tokenauthenticationresult.md)                                                                                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                  | Returned when more information about token authentication is received from the network                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                     |