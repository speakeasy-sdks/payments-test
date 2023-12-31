# FraudShipTo

Ship To Information used for fraud checking services.


## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                            | Example                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `firstName`                                                                                                                                                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                     | That part of an individual's full name considered a personal name or given name and generally positioned before the last name or family name.                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `fullName`                                                                                                                                                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                     | Name of accountholder                                                                                                                                                                                                                                                                                                                                                                                                                  | Jane Doe                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `lastName`                                                                                                                                                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                     | That part of an individual?s name generally placed at the end of the given name. The last name is also known as the surname or family name. (Note: name conventions may be different based on practices in different countries. Some countries use two or more last names; in other countries, the family name is placed before a person?s given name; in some countries, it is common for people to have only one name or a mononym.) |                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `middleName`                                                                                                                                                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                     | That part of an individual's name generally positioned between the first and family names, as a second given name or a maternal surname. (NOTE: in some instances, an individual may have multiple middle names)                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `phone`                                                                                                                                                                                                                                                                                                                                                                                                                                | [shared.Phone](../../../sdk/models/shared/phone.md)                                                                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                     | Phone number in ITU-T E.164 format. Country code and phone number (subscriber number) are mandatory values                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `shippingAddress`                                                                                                                                                                                                                                                                                                                                                                                                                      | [shared.Address](../../../sdk/models/shared/address.md)                                                                                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                     | Address Object                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `shippingDescription`                                                                                                                                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                     | Description of shipping or delivery method                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                        |