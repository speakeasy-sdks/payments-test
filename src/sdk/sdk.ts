/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Fraud } from "./fraud";
import { HealthCheck } from "./healthcheck";
import * as shared from "./models/shared";
import { Transactions } from "./transactions";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Production Environment
     */
    "https://api-ms.payments.jpmorgan.com/api/v2",
    /**
     * Test Environment
     */
    "https://cat-api.merchant.jpmorgan.com/api/v2",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "2.0.52";
    sdkVersion = "0.1.1";
    genVersion = "2.118.1";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Merchant Payments API: Payments API for processing consumer payments
 */
export class TestingPayments {
    /**
     * Fraud check for a payment
     */
    public fraud: Fraud;
    /**
     * Check if a particular service is available
     */
    public healthCheck: HealthCheck;
    /**
     * Initiating and processing a payment
     */
    public transactions: Transactions;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.fraud = new Fraud(this.sdkConfiguration);
        this.healthCheck = new HealthCheck(this.sdkConfiguration);
        this.transactions = new Transactions(this.sdkConfiguration);
    }
}