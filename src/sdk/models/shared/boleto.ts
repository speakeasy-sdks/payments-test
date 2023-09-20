/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { ProcessorStatus } from "./processorstatus";
import { Expose, Transform } from "class-transformer";

/**
 * Indicates the bank issuing the Boleto
 */
export enum BoletoBankCode {
    Jpm = "JPM",
}

/**
 * Boleto type of Duplicata Mercantil or Boleto de Proposta
 */
export enum BoletoType {
    Dm = "DM",
    Bdp = "BDP",
}

/**
 * Boleto payment information
 */
export class BoletoInput extends SpeakeasyBase {
    /**
     * Indicates the bank issuing the Boleto
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bankCode" })
    bankCode: BoletoBankCode;

    /**
     * Ticket identifier
     */
    @SpeakeasyMetadata()
    @Expose({ name: "documentNumber" })
    documentNumber: string;

    /**
     * Date payment is due by
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dueDate" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    dueDate: RFCDate;

    /**
     * Designates the year, month, and day in which the Convenience Store Payment document will no longer be recognized as a valid payment document to be utilized at the convenience store.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expiryDate" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    expiryDate?: RFCDate;

    /**
     * Actual amount paid.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paidAmount" })
    paidAmount: string;

    /**
     * Date and time in which the voucher or ticket was paid.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paidDate" })
    paidDate: string;

    /**
     * Ticket instructions
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ticketInstructions" })
    ticketInstructions: string;

    /**
     * Boleto type of Duplicata Mercantil or Boleto de Proposta
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: BoletoType;

    /**
     * Number that uniquely identifies a Boleto for an account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "uniqueNumber" })
    uniqueNumber: string;
}

/**
 * Boleto payment information
 */
export class Boleto extends SpeakeasyBase {
    /**
     * Indicates the bank issuing the Boleto
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bankCode" })
    bankCode: BoletoBankCode;

    /**
     * A reference to a web resource on the internet specifying its location on a computer network and a mechanism for retrieving.  In this context, this is the URL provided by merchant for the barcode. Customer can complete the transaction by paying the transaction amount using barcode from the link.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "barcodeUrl" })
    barcodeUrl?: string;

    /**
     * Ticket identifier
     */
    @SpeakeasyMetadata()
    @Expose({ name: "documentNumber" })
    documentNumber: string;

    /**
     * Date payment is due by
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dueDate" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    dueDate: RFCDate;

    /**
     * Designates the year, month, and day in which the Convenience Store Payment document will no longer be recognized as a valid payment document to be utilized at the convenience store.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expiryDate" })
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    expiryDate?: RFCDate;

    /**
     * Actual amount paid.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paidAmount" })
    paidAmount: string;

    /**
     * Date and time in which the voucher or ticket was paid.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paidDate" })
    paidDate: string;

    /**
     * A reference to a web resource on the internet specifying its location on a computer network and a mechanism for retrieving.  In this context, this is the URL provided by merchant for the payment document in PDF format. The document contain payment instruction to pay at store to complete the transaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pdfUrl" })
    pdfUrl?: string;

    /**
     * Information on where consumer needs to be redirected for payment process completion. Ensure that the URL begins with either 'http' or 'https'
     */
    @SpeakeasyMetadata()
    @Expose({ name: "qrCodeUrl" })
    qrCodeUrl?: string;

    /**
     * Information on where consumer needs to be redirected for payment process completion. Ensure that the URL begins with 'https'
     */
    @SpeakeasyMetadata()
    @Expose({ name: "redirectUrl" })
    redirectUrl?: string;

    /**
     * Codifies the state of the payment status from the payment processor. Examples include COMPLETED ,PAID, OVERPAID,ERRORED
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: ProcessorStatus;

    /**
     * Ticket instructions
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ticketInstructions" })
    ticketInstructions: string;

    /**
     * Boleto type of Duplicata Mercantil or Boleto de Proposta
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: BoletoType;

    /**
     * Number that uniquely identifies a Boleto for an account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "uniqueNumber" })
    uniqueNumber: string;
}