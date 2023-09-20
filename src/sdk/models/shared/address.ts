/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Address Object
 */
export class Address extends SpeakeasyBase {
    /**
     * A portion of a party's address which is the geographic area that is a municipality with legal power granted by a state/province charter.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "city" })
    city?: string;

    /**
     * A code that identifies the Country, a Geographic Area, that is recognized as an independent political unit in world affairs. Note: This data element is a child of the Country Code CDE and valid values are based on ISO standards.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "countryCode" })
    countryCode?: string;

    /**
     * A portion of a party's address which is the line of the unstructured (unparsed) geographic street address containing any of the following: house number, street name, street direction, street type, dwelling type and number, PO Box number, rural delivery route number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "line1" })
    line1?: string;

    /**
     * A portion of a party's address which is the line of the unstructured (unparsed) geographic street address containing any of the following: house number, street name, street direction, street type, dwelling type and number, PO Box number, rural delivery route number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "line2" })
    line2?: string;

    /**
     * The portion of a party?s address that is the encoded representation of a geographic area to facilitate mail delivery services.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "postalCode" })
    postalCode?: string;

    /**
     * Classifies a geographic area that represents a first level, legal and political subdivision of a country; for example, Virginia, Bavaria.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "state" })
    state?: string;
}
