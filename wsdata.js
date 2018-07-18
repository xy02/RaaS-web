/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const raas = $root.raas = (() => {

    /**
     * Namespace raas.
     * @exports raas
     * @namespace
     */
    const raas = {};

    raas.WsOutput = (function() {

        /**
         * Properties of a WsOutput.
         * @memberof raas
         * @interface IWsOutput
         * @property {number|Long|null} [callerId] WsOutput callerId
         * @property {raas.ICallService|null} [callService] WsOutput callService
         * @property {raas.ICallUnaryService|null} [callUnaryService] WsOutput callUnaryService
         */

        /**
         * Constructs a new WsOutput.
         * @memberof raas
         * @classdesc Represents a WsOutput.
         * @implements IWsOutput
         * @constructor
         * @param {raas.IWsOutput=} [properties] Properties to set
         */
        function WsOutput(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsOutput callerId.
         * @member {number|Long} callerId
         * @memberof raas.WsOutput
         * @instance
         */
        WsOutput.prototype.callerId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WsOutput callService.
         * @member {raas.ICallService|null|undefined} callService
         * @memberof raas.WsOutput
         * @instance
         */
        WsOutput.prototype.callService = null;

        /**
         * WsOutput callUnaryService.
         * @member {raas.ICallUnaryService|null|undefined} callUnaryService
         * @memberof raas.WsOutput
         * @instance
         */
        WsOutput.prototype.callUnaryService = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * WsOutput type.
         * @member {"callService"|"callUnaryService"|undefined} type
         * @memberof raas.WsOutput
         * @instance
         */
        Object.defineProperty(WsOutput.prototype, "type", {
            get: $util.oneOfGetter($oneOfFields = ["callService", "callUnaryService"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new WsOutput instance using the specified properties.
         * @function create
         * @memberof raas.WsOutput
         * @static
         * @param {raas.IWsOutput=} [properties] Properties to set
         * @returns {raas.WsOutput} WsOutput instance
         */
        WsOutput.create = function create(properties) {
            return new WsOutput(properties);
        };

        /**
         * Encodes the specified WsOutput message. Does not implicitly {@link raas.WsOutput.verify|verify} messages.
         * @function encode
         * @memberof raas.WsOutput
         * @static
         * @param {raas.IWsOutput} message WsOutput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsOutput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.callerId != null && message.hasOwnProperty("callerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.callerId);
            if (message.callService != null && message.hasOwnProperty("callService"))
                $root.raas.CallService.encode(message.callService, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.callUnaryService != null && message.hasOwnProperty("callUnaryService"))
                $root.raas.CallUnaryService.encode(message.callUnaryService, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WsOutput message, length delimited. Does not implicitly {@link raas.WsOutput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof raas.WsOutput
         * @static
         * @param {raas.IWsOutput} message WsOutput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsOutput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WsOutput message from the specified reader or buffer.
         * @function decode
         * @memberof raas.WsOutput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {raas.WsOutput} WsOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsOutput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.raas.WsOutput();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.callerId = reader.uint64();
                    break;
                case 2:
                    message.callService = $root.raas.CallService.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.callUnaryService = $root.raas.CallUnaryService.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WsOutput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof raas.WsOutput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {raas.WsOutput} WsOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsOutput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WsOutput message.
         * @function verify
         * @memberof raas.WsOutput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsOutput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.callerId != null && message.hasOwnProperty("callerId"))
                if (!$util.isInteger(message.callerId) && !(message.callerId && $util.isInteger(message.callerId.low) && $util.isInteger(message.callerId.high)))
                    return "callerId: integer|Long expected";
            if (message.callService != null && message.hasOwnProperty("callService")) {
                properties.type = 1;
                {
                    let error = $root.raas.CallService.verify(message.callService);
                    if (error)
                        return "callService." + error;
                }
            }
            if (message.callUnaryService != null && message.hasOwnProperty("callUnaryService")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    let error = $root.raas.CallUnaryService.verify(message.callUnaryService);
                    if (error)
                        return "callUnaryService." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WsOutput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof raas.WsOutput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {raas.WsOutput} WsOutput
         */
        WsOutput.fromObject = function fromObject(object) {
            if (object instanceof $root.raas.WsOutput)
                return object;
            let message = new $root.raas.WsOutput();
            if (object.callerId != null)
                if ($util.Long)
                    (message.callerId = $util.Long.fromValue(object.callerId)).unsigned = true;
                else if (typeof object.callerId === "string")
                    message.callerId = parseInt(object.callerId, 10);
                else if (typeof object.callerId === "number")
                    message.callerId = object.callerId;
                else if (typeof object.callerId === "object")
                    message.callerId = new $util.LongBits(object.callerId.low >>> 0, object.callerId.high >>> 0).toNumber(true);
            if (object.callService != null) {
                if (typeof object.callService !== "object")
                    throw TypeError(".raas.WsOutput.callService: object expected");
                message.callService = $root.raas.CallService.fromObject(object.callService);
            }
            if (object.callUnaryService != null) {
                if (typeof object.callUnaryService !== "object")
                    throw TypeError(".raas.WsOutput.callUnaryService: object expected");
                message.callUnaryService = $root.raas.CallUnaryService.fromObject(object.callUnaryService);
            }
            return message;
        };

        /**
         * Creates a plain object from a WsOutput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof raas.WsOutput
         * @static
         * @param {raas.WsOutput} message WsOutput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsOutput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.callerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.callerId = options.longs === String ? "0" : 0;
            if (message.callerId != null && message.hasOwnProperty("callerId"))
                if (typeof message.callerId === "number")
                    object.callerId = options.longs === String ? String(message.callerId) : message.callerId;
                else
                    object.callerId = options.longs === String ? $util.Long.prototype.toString.call(message.callerId) : options.longs === Number ? new $util.LongBits(message.callerId.low >>> 0, message.callerId.high >>> 0).toNumber(true) : message.callerId;
            if (message.callService != null && message.hasOwnProperty("callService")) {
                object.callService = $root.raas.CallService.toObject(message.callService, options);
                if (options.oneofs)
                    object.type = "callService";
            }
            if (message.callUnaryService != null && message.hasOwnProperty("callUnaryService")) {
                object.callUnaryService = $root.raas.CallUnaryService.toObject(message.callUnaryService, options);
                if (options.oneofs)
                    object.type = "callUnaryService";
            }
            return object;
        };

        /**
         * Converts this WsOutput to JSON.
         * @function toJSON
         * @memberof raas.WsOutput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsOutput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WsOutput;
    })();

    raas.CallService = (function() {

        /**
         * Properties of a CallService.
         * @memberof raas
         * @interface ICallService
         * @property {string|null} [serviceName] CallService serviceName
         * @property {Uint8Array|null} [bin] CallService bin
         */

        /**
         * Constructs a new CallService.
         * @memberof raas
         * @classdesc Represents a CallService.
         * @implements ICallService
         * @constructor
         * @param {raas.ICallService=} [properties] Properties to set
         */
        function CallService(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CallService serviceName.
         * @member {string} serviceName
         * @memberof raas.CallService
         * @instance
         */
        CallService.prototype.serviceName = "";

        /**
         * CallService bin.
         * @member {Uint8Array} bin
         * @memberof raas.CallService
         * @instance
         */
        CallService.prototype.bin = $util.newBuffer([]);

        /**
         * Creates a new CallService instance using the specified properties.
         * @function create
         * @memberof raas.CallService
         * @static
         * @param {raas.ICallService=} [properties] Properties to set
         * @returns {raas.CallService} CallService instance
         */
        CallService.create = function create(properties) {
            return new CallService(properties);
        };

        /**
         * Encodes the specified CallService message. Does not implicitly {@link raas.CallService.verify|verify} messages.
         * @function encode
         * @memberof raas.CallService
         * @static
         * @param {raas.ICallService} message CallService message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CallService.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.serviceName);
            if (message.bin != null && message.hasOwnProperty("bin"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.bin);
            return writer;
        };

        /**
         * Encodes the specified CallService message, length delimited. Does not implicitly {@link raas.CallService.verify|verify} messages.
         * @function encodeDelimited
         * @memberof raas.CallService
         * @static
         * @param {raas.ICallService} message CallService message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CallService.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CallService message from the specified reader or buffer.
         * @function decode
         * @memberof raas.CallService
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {raas.CallService} CallService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CallService.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.raas.CallService();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serviceName = reader.string();
                    break;
                case 2:
                    message.bin = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CallService message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof raas.CallService
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {raas.CallService} CallService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CallService.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CallService message.
         * @function verify
         * @memberof raas.CallService
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CallService.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                if (!$util.isString(message.serviceName))
                    return "serviceName: string expected";
            if (message.bin != null && message.hasOwnProperty("bin"))
                if (!(message.bin && typeof message.bin.length === "number" || $util.isString(message.bin)))
                    return "bin: buffer expected";
            return null;
        };

        /**
         * Creates a CallService message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof raas.CallService
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {raas.CallService} CallService
         */
        CallService.fromObject = function fromObject(object) {
            if (object instanceof $root.raas.CallService)
                return object;
            let message = new $root.raas.CallService();
            if (object.serviceName != null)
                message.serviceName = String(object.serviceName);
            if (object.bin != null)
                if (typeof object.bin === "string")
                    $util.base64.decode(object.bin, message.bin = $util.newBuffer($util.base64.length(object.bin)), 0);
                else if (object.bin.length)
                    message.bin = object.bin;
            return message;
        };

        /**
         * Creates a plain object from a CallService message. Also converts values to other types if specified.
         * @function toObject
         * @memberof raas.CallService
         * @static
         * @param {raas.CallService} message CallService
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CallService.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.serviceName = "";
                object.bin = options.bytes === String ? "" : [];
            }
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                object.serviceName = message.serviceName;
            if (message.bin != null && message.hasOwnProperty("bin"))
                object.bin = options.bytes === String ? $util.base64.encode(message.bin, 0, message.bin.length) : options.bytes === Array ? Array.prototype.slice.call(message.bin) : message.bin;
            return object;
        };

        /**
         * Converts this CallService to JSON.
         * @function toJSON
         * @memberof raas.CallService
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CallService.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CallService;
    })();

    raas.CallUnaryService = (function() {

        /**
         * Properties of a CallUnaryService.
         * @memberof raas
         * @interface ICallUnaryService
         * @property {string|null} [serviceName] CallUnaryService serviceName
         * @property {Uint8Array|null} [bin] CallUnaryService bin
         */

        /**
         * Constructs a new CallUnaryService.
         * @memberof raas
         * @classdesc Represents a CallUnaryService.
         * @implements ICallUnaryService
         * @constructor
         * @param {raas.ICallUnaryService=} [properties] Properties to set
         */
        function CallUnaryService(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CallUnaryService serviceName.
         * @member {string} serviceName
         * @memberof raas.CallUnaryService
         * @instance
         */
        CallUnaryService.prototype.serviceName = "";

        /**
         * CallUnaryService bin.
         * @member {Uint8Array} bin
         * @memberof raas.CallUnaryService
         * @instance
         */
        CallUnaryService.prototype.bin = $util.newBuffer([]);

        /**
         * Creates a new CallUnaryService instance using the specified properties.
         * @function create
         * @memberof raas.CallUnaryService
         * @static
         * @param {raas.ICallUnaryService=} [properties] Properties to set
         * @returns {raas.CallUnaryService} CallUnaryService instance
         */
        CallUnaryService.create = function create(properties) {
            return new CallUnaryService(properties);
        };

        /**
         * Encodes the specified CallUnaryService message. Does not implicitly {@link raas.CallUnaryService.verify|verify} messages.
         * @function encode
         * @memberof raas.CallUnaryService
         * @static
         * @param {raas.ICallUnaryService} message CallUnaryService message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CallUnaryService.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.serviceName);
            if (message.bin != null && message.hasOwnProperty("bin"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.bin);
            return writer;
        };

        /**
         * Encodes the specified CallUnaryService message, length delimited. Does not implicitly {@link raas.CallUnaryService.verify|verify} messages.
         * @function encodeDelimited
         * @memberof raas.CallUnaryService
         * @static
         * @param {raas.ICallUnaryService} message CallUnaryService message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CallUnaryService.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CallUnaryService message from the specified reader or buffer.
         * @function decode
         * @memberof raas.CallUnaryService
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {raas.CallUnaryService} CallUnaryService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CallUnaryService.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.raas.CallUnaryService();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serviceName = reader.string();
                    break;
                case 2:
                    message.bin = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CallUnaryService message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof raas.CallUnaryService
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {raas.CallUnaryService} CallUnaryService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CallUnaryService.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CallUnaryService message.
         * @function verify
         * @memberof raas.CallUnaryService
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CallUnaryService.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                if (!$util.isString(message.serviceName))
                    return "serviceName: string expected";
            if (message.bin != null && message.hasOwnProperty("bin"))
                if (!(message.bin && typeof message.bin.length === "number" || $util.isString(message.bin)))
                    return "bin: buffer expected";
            return null;
        };

        /**
         * Creates a CallUnaryService message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof raas.CallUnaryService
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {raas.CallUnaryService} CallUnaryService
         */
        CallUnaryService.fromObject = function fromObject(object) {
            if (object instanceof $root.raas.CallUnaryService)
                return object;
            let message = new $root.raas.CallUnaryService();
            if (object.serviceName != null)
                message.serviceName = String(object.serviceName);
            if (object.bin != null)
                if (typeof object.bin === "string")
                    $util.base64.decode(object.bin, message.bin = $util.newBuffer($util.base64.length(object.bin)), 0);
                else if (object.bin.length)
                    message.bin = object.bin;
            return message;
        };

        /**
         * Creates a plain object from a CallUnaryService message. Also converts values to other types if specified.
         * @function toObject
         * @memberof raas.CallUnaryService
         * @static
         * @param {raas.CallUnaryService} message CallUnaryService
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CallUnaryService.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.serviceName = "";
                object.bin = options.bytes === String ? "" : [];
            }
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                object.serviceName = message.serviceName;
            if (message.bin != null && message.hasOwnProperty("bin"))
                object.bin = options.bytes === String ? $util.base64.encode(message.bin, 0, message.bin.length) : options.bytes === Array ? Array.prototype.slice.call(message.bin) : message.bin;
            return object;
        };

        /**
         * Converts this CallUnaryService to JSON.
         * @function toJSON
         * @memberof raas.CallUnaryService
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CallUnaryService.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CallUnaryService;
    })();

    raas.WsInput = (function() {

        /**
         * Properties of a WsInput.
         * @memberof raas
         * @interface IWsInput
         * @property {number|Long|null} [callerId] WsInput callerId
         * @property {Uint8Array|null} [bin] WsInput bin
         * @property {string|null} [final] WsInput final
         */

        /**
         * Constructs a new WsInput.
         * @memberof raas
         * @classdesc Represents a WsInput.
         * @implements IWsInput
         * @constructor
         * @param {raas.IWsInput=} [properties] Properties to set
         */
        function WsInput(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsInput callerId.
         * @member {number|Long} callerId
         * @memberof raas.WsInput
         * @instance
         */
        WsInput.prototype.callerId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WsInput bin.
         * @member {Uint8Array} bin
         * @memberof raas.WsInput
         * @instance
         */
        WsInput.prototype.bin = $util.newBuffer([]);

        /**
         * WsInput final.
         * @member {string} final
         * @memberof raas.WsInput
         * @instance
         */
        WsInput.prototype.final = "";

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * WsInput type.
         * @member {"bin"|"final"|undefined} type
         * @memberof raas.WsInput
         * @instance
         */
        Object.defineProperty(WsInput.prototype, "type", {
            get: $util.oneOfGetter($oneOfFields = ["bin", "final"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new WsInput instance using the specified properties.
         * @function create
         * @memberof raas.WsInput
         * @static
         * @param {raas.IWsInput=} [properties] Properties to set
         * @returns {raas.WsInput} WsInput instance
         */
        WsInput.create = function create(properties) {
            return new WsInput(properties);
        };

        /**
         * Encodes the specified WsInput message. Does not implicitly {@link raas.WsInput.verify|verify} messages.
         * @function encode
         * @memberof raas.WsInput
         * @static
         * @param {raas.IWsInput} message WsInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsInput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.callerId != null && message.hasOwnProperty("callerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.callerId);
            if (message.bin != null && message.hasOwnProperty("bin"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.bin);
            if (message.final != null && message.hasOwnProperty("final"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.final);
            return writer;
        };

        /**
         * Encodes the specified WsInput message, length delimited. Does not implicitly {@link raas.WsInput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof raas.WsInput
         * @static
         * @param {raas.IWsInput} message WsInput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsInput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WsInput message from the specified reader or buffer.
         * @function decode
         * @memberof raas.WsInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {raas.WsInput} WsInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsInput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.raas.WsInput();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.callerId = reader.uint64();
                    break;
                case 2:
                    message.bin = reader.bytes();
                    break;
                case 3:
                    message.final = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WsInput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof raas.WsInput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {raas.WsInput} WsInput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsInput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WsInput message.
         * @function verify
         * @memberof raas.WsInput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsInput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.callerId != null && message.hasOwnProperty("callerId"))
                if (!$util.isInteger(message.callerId) && !(message.callerId && $util.isInteger(message.callerId.low) && $util.isInteger(message.callerId.high)))
                    return "callerId: integer|Long expected";
            if (message.bin != null && message.hasOwnProperty("bin")) {
                properties.type = 1;
                if (!(message.bin && typeof message.bin.length === "number" || $util.isString(message.bin)))
                    return "bin: buffer expected";
            }
            if (message.final != null && message.hasOwnProperty("final")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                if (!$util.isString(message.final))
                    return "final: string expected";
            }
            return null;
        };

        /**
         * Creates a WsInput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof raas.WsInput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {raas.WsInput} WsInput
         */
        WsInput.fromObject = function fromObject(object) {
            if (object instanceof $root.raas.WsInput)
                return object;
            let message = new $root.raas.WsInput();
            if (object.callerId != null)
                if ($util.Long)
                    (message.callerId = $util.Long.fromValue(object.callerId)).unsigned = true;
                else if (typeof object.callerId === "string")
                    message.callerId = parseInt(object.callerId, 10);
                else if (typeof object.callerId === "number")
                    message.callerId = object.callerId;
                else if (typeof object.callerId === "object")
                    message.callerId = new $util.LongBits(object.callerId.low >>> 0, object.callerId.high >>> 0).toNumber(true);
            if (object.bin != null)
                if (typeof object.bin === "string")
                    $util.base64.decode(object.bin, message.bin = $util.newBuffer($util.base64.length(object.bin)), 0);
                else if (object.bin.length)
                    message.bin = object.bin;
            if (object.final != null)
                message.final = String(object.final);
            return message;
        };

        /**
         * Creates a plain object from a WsInput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof raas.WsInput
         * @static
         * @param {raas.WsInput} message WsInput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsInput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.callerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.callerId = options.longs === String ? "0" : 0;
            if (message.callerId != null && message.hasOwnProperty("callerId"))
                if (typeof message.callerId === "number")
                    object.callerId = options.longs === String ? String(message.callerId) : message.callerId;
                else
                    object.callerId = options.longs === String ? $util.Long.prototype.toString.call(message.callerId) : options.longs === Number ? new $util.LongBits(message.callerId.low >>> 0, message.callerId.high >>> 0).toNumber(true) : message.callerId;
            if (message.bin != null && message.hasOwnProperty("bin")) {
                object.bin = options.bytes === String ? $util.base64.encode(message.bin, 0, message.bin.length) : options.bytes === Array ? Array.prototype.slice.call(message.bin) : message.bin;
                if (options.oneofs)
                    object.type = "bin";
            }
            if (message.final != null && message.hasOwnProperty("final")) {
                object.final = message.final;
                if (options.oneofs)
                    object.type = "final";
            }
            return object;
        };

        /**
         * Converts this WsInput to JSON.
         * @function toJSON
         * @memberof raas.WsInput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsInput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WsInput;
    })();

    return raas;
})();

export { $root as default };
