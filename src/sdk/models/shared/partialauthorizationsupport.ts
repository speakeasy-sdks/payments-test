/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

/**
 * Indicates that the issuer has provided the merchant an authorization for a portion of the amount requested. This service provides an alternative to receiving a decline when the available card balance is not sufficient to approve a transaction in full.In this context, this indicate if merchant support parial authorization.
 */
export enum PartialAuthorizationSupport {
    Supported = "SUPPORTED",
    NotSupported = "NOT_SUPPORTED",
}