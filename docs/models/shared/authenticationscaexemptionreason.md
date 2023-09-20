# AuthenticationSCAExemptionReason

Codifies the justification why a transaction does not have to meet Strong Customer Authentication (SCA) requirements. SCA is a regulatory requirement to reduce fraud and make online payments more secure via two-factor authentication; an authentication based on the use of two or more elements categorized as knowledge (something only the user knows), possession (something only the user possesses) or inherence (something the user is).


## Values

| Name                           | Value                          |
| ------------------------------ | ------------------------------ |
| `TrustedMerchant`              | TRUSTED_MERCHANT               |
| `SecureCorporatePayment`       | SECURE_CORPORATE_PAYMENT       |
| `TransactionRiskAnalysis`      | TRANSACTION_RISK_ANALYSIS      |
| `LowValuePayment`              | LOW_VALUE_PAYMENT              |
| `MerchantInitiatedTransaction` | MERCHANT_INITIATED_TRANSACTION |
| `RecurringPayment`             | RECURRING_PAYMENT              |
| `ScaDelegation`                | SCA_DELEGATION                 |