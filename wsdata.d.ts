import * as $protobuf from "protobufjs";

/** Namespace raas. */
export namespace raas {

    /** Properties of a WsClientOutput. */
    interface IWsClientOutput {

        /** WsClientOutput callerId */
        callerId?: (string|null);

        /** WsClientOutput callService */
        callService?: (raas.ICallService|null);

        /** WsClientOutput callUnaryService */
        callUnaryService?: (raas.ICallUnaryService|null);
    }

    /** Represents a WsClientOutput. */
    class WsClientOutput implements IWsClientOutput {

        /**
         * Constructs a new WsClientOutput.
         * @param [properties] Properties to set
         */
        constructor(properties?: raas.IWsClientOutput);

        /** WsClientOutput callerId. */
        public callerId: string;

        /** WsClientOutput callService. */
        public callService?: (raas.ICallService|null);

        /** WsClientOutput callUnaryService. */
        public callUnaryService?: (raas.ICallUnaryService|null);

        /** WsClientOutput type. */
        public type?: ("callService"|"callUnaryService");

        /**
         * Creates a new WsClientOutput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WsClientOutput instance
         */
        public static create(properties?: raas.IWsClientOutput): raas.WsClientOutput;

        /**
         * Encodes the specified WsClientOutput message. Does not implicitly {@link raas.WsClientOutput.verify|verify} messages.
         * @param message WsClientOutput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: raas.IWsClientOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WsClientOutput message, length delimited. Does not implicitly {@link raas.WsClientOutput.verify|verify} messages.
         * @param message WsClientOutput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: raas.IWsClientOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WsClientOutput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WsClientOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): raas.WsClientOutput;

        /**
         * Decodes a WsClientOutput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WsClientOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): raas.WsClientOutput;

        /**
         * Verifies a WsClientOutput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WsClientOutput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WsClientOutput
         */
        public static fromObject(object: { [k: string]: any }): raas.WsClientOutput;

        /**
         * Creates a plain object from a WsClientOutput message. Also converts values to other types if specified.
         * @param message WsClientOutput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: raas.WsClientOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WsClientOutput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CallService. */
    interface ICallService {

        /** CallService serviceName */
        serviceName?: (string|null);

        /** CallService bin */
        bin?: (Uint8Array|null);
    }

    /** Represents a CallService. */
    class CallService implements ICallService {

        /**
         * Constructs a new CallService.
         * @param [properties] Properties to set
         */
        constructor(properties?: raas.ICallService);

        /** CallService serviceName. */
        public serviceName: string;

        /** CallService bin. */
        public bin: Uint8Array;

        /**
         * Creates a new CallService instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CallService instance
         */
        public static create(properties?: raas.ICallService): raas.CallService;

        /**
         * Encodes the specified CallService message. Does not implicitly {@link raas.CallService.verify|verify} messages.
         * @param message CallService message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: raas.ICallService, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CallService message, length delimited. Does not implicitly {@link raas.CallService.verify|verify} messages.
         * @param message CallService message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: raas.ICallService, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CallService message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CallService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): raas.CallService;

        /**
         * Decodes a CallService message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CallService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): raas.CallService;

        /**
         * Verifies a CallService message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CallService message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CallService
         */
        public static fromObject(object: { [k: string]: any }): raas.CallService;

        /**
         * Creates a plain object from a CallService message. Also converts values to other types if specified.
         * @param message CallService
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: raas.CallService, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CallService to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CallUnaryService. */
    interface ICallUnaryService {

        /** CallUnaryService serviceName */
        serviceName?: (string|null);

        /** CallUnaryService bin */
        bin?: (Uint8Array|null);

        /** CallUnaryService timeout */
        timeout?: (number|null);
    }

    /** Represents a CallUnaryService. */
    class CallUnaryService implements ICallUnaryService {

        /**
         * Constructs a new CallUnaryService.
         * @param [properties] Properties to set
         */
        constructor(properties?: raas.ICallUnaryService);

        /** CallUnaryService serviceName. */
        public serviceName: string;

        /** CallUnaryService bin. */
        public bin: Uint8Array;

        /** CallUnaryService timeout. */
        public timeout: number;

        /**
         * Creates a new CallUnaryService instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CallUnaryService instance
         */
        public static create(properties?: raas.ICallUnaryService): raas.CallUnaryService;

        /**
         * Encodes the specified CallUnaryService message. Does not implicitly {@link raas.CallUnaryService.verify|verify} messages.
         * @param message CallUnaryService message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: raas.ICallUnaryService, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CallUnaryService message, length delimited. Does not implicitly {@link raas.CallUnaryService.verify|verify} messages.
         * @param message CallUnaryService message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: raas.ICallUnaryService, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CallUnaryService message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CallUnaryService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): raas.CallUnaryService;

        /**
         * Decodes a CallUnaryService message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CallUnaryService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): raas.CallUnaryService;

        /**
         * Verifies a CallUnaryService message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CallUnaryService message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CallUnaryService
         */
        public static fromObject(object: { [k: string]: any }): raas.CallUnaryService;

        /**
         * Creates a plain object from a CallUnaryService message. Also converts values to other types if specified.
         * @param message CallUnaryService
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: raas.CallUnaryService, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CallUnaryService to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WsServerOutput. */
    interface IWsServerOutput {

        /** WsServerOutput callerId */
        callerId?: (string|null);

        /** WsServerOutput bin */
        bin?: (Uint8Array|null);

        /** WsServerOutput final */
        final?: (string|null);
    }

    /** Represents a WsServerOutput. */
    class WsServerOutput implements IWsServerOutput {

        /**
         * Constructs a new WsServerOutput.
         * @param [properties] Properties to set
         */
        constructor(properties?: raas.IWsServerOutput);

        /** WsServerOutput callerId. */
        public callerId: string;

        /** WsServerOutput bin. */
        public bin: Uint8Array;

        /** WsServerOutput final. */
        public final: string;

        /** WsServerOutput type. */
        public type?: ("bin"|"final");

        /**
         * Creates a new WsServerOutput instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WsServerOutput instance
         */
        public static create(properties?: raas.IWsServerOutput): raas.WsServerOutput;

        /**
         * Encodes the specified WsServerOutput message. Does not implicitly {@link raas.WsServerOutput.verify|verify} messages.
         * @param message WsServerOutput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: raas.IWsServerOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WsServerOutput message, length delimited. Does not implicitly {@link raas.WsServerOutput.verify|verify} messages.
         * @param message WsServerOutput message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: raas.IWsServerOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WsServerOutput message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WsServerOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): raas.WsServerOutput;

        /**
         * Decodes a WsServerOutput message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WsServerOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): raas.WsServerOutput;

        /**
         * Verifies a WsServerOutput message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WsServerOutput message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WsServerOutput
         */
        public static fromObject(object: { [k: string]: any }): raas.WsServerOutput;

        /**
         * Creates a plain object from a WsServerOutput message. Also converts values to other types if specified.
         * @param message WsServerOutput
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: raas.WsServerOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WsServerOutput to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
