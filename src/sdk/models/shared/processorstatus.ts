/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

/**
 * Codifies the state of the payment status from the payment processor. Examples include COMPLETED ,PAID, OVERPAID,ERRORED
 */
export enum ProcessorStatus {
    Initiated = "INITIATED",
    Completed = "COMPLETED",
    Redirected = "REDIRECTED",
    Returned = "RETURNED",
    Underpaid = "UNDERPAID",
    Overpaid = "OVERPAID",
    Paid = "PAID",
    Voided = "VOIDED",
    Error = "ERROR",
    Expired = "EXPIRED",
}