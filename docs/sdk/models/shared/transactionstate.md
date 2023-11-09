# TransactionState

Codifies the current state a transaction may be in. The transaction can only be in one state at a time. The state is based on the current phase a transaction could be in. For example, a transaction that has been received but not captured would be in the A


## Values

| Name         | Value        |
| ------------ | ------------ |
| `Authorized` | AUTHORIZED   |
| `Voided`     | VOIDED       |
| `Pending`    | PENDING      |
| `Declined`   | DECLINED     |
| `Completed`  | COMPLETED    |
| `Closed`     | CLOSED       |
| `Error`      | ERROR        |