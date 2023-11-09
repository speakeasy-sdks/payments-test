/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AchOutput } from "./achoutput";
import { ApplepayOutput } from "./applepayoutput";
import { Boleto } from "./boleto";
import { CardOutput } from "./cardoutput";
import { GooglepayOutput } from "./googlepayoutput";
import { Expose, Type } from "class-transformer";

/**
 * paymentType
 */
export class PaymentMethodTypeOutput extends SpeakeasyBase {
    /**
     * Object for ACH (Automated Clearing House) payment method which occurs whenever someone instructs the ACH network to ?push? money from their account to someone else's. This is mostly used in USA.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ach" })
    @Type(() => AchOutput)
    ach?: AchOutput;

    /**
     * Use is for encrypted bundles for web or Internet acceptance of digital device wallets such as Apple Pay
     */
    @SpeakeasyMetadata()
    @Expose({ name: "applepay" })
    @Type(() => ApplepayOutput)
    applepay?: ApplepayOutput;

    /**
     * Boleto payment information
     */
    @SpeakeasyMetadata()
    @Expose({ name: "boleto" })
    @Type(() => Boleto)
    boleto?: Boleto;

    /**
     * Card payment instrument
     */
    @SpeakeasyMetadata()
    @Expose({ name: "card" })
    @Type(() => CardOutput)
    card?: CardOutput;

    /**
     * Use is for encrypted bundles for web or Internet acceptance of digital device wallets such as Google Pay
     */
    @SpeakeasyMetadata()
    @Expose({ name: "googlepay" })
    @Type(() => GooglepayOutput)
    googlepay?: GooglepayOutput;
}
