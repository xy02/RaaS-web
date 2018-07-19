/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.raas = (function() {

    /**
     * Namespace raas.
     * @exports raas
     * @namespace
     */
    var raas = {};

    raas.WsClientOutput = (function() {

        /**
         * Properties of a WsClientOutput.
         * @memberof raas
         * @interface IWsClientOutput
         * @property {string|null} [callerId] WsClientOutput callerId
         * @property {raas.ICallService|null} [callService] WsClientOutput callService
         * @property {raas.ICallUnaryService|null} [callUnaryService] WsClientOutput callUnaryService
         */

        /**
         * Constructs a new WsClientOutput.
         * @memberof raas
         * @classdesc Represents a WsClientOutput.
         * @implements IWsClientOutput
         * @constructor
         * @param {raas.IWsClientOutput=} [properties] Properties to set
         */
        function WsClientOutput(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsClientOutput callerId.
         * @member {string} callerId
         * @memberof raas.WsClientOutput
         * @instance
         */
        WsClientOutput.prototype.callerId = "";

        /**
         * WsClientOutput callService.
         * @member {raas.ICallService|null|undefined} callService
         * @memberof raas.WsClientOutput
         * @instance
         */
        WsClientOutput.prototype.callService = null;

        /**
         * WsClientOutput callUnaryService.
         * @member {raas.ICallUnaryService|null|undefined} callUnaryService
         * @memberof raas.WsClientOutput
         * @instance
         */
        WsClientOutput.prototype.callUnaryService = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * WsClientOutput type.
         * @member {"callService"|"callUnaryService"|undefined} type
         * @memberof raas.WsClientOutput
         * @instance
         */
        Object.defineProperty(WsClientOutput.prototype, "type", {
            get: $util.oneOfGetter($oneOfFields = ["callService", "callUnaryService"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new WsClientOutput instance using the specified properties.
         * @function create
         * @memberof raas.WsClientOutput
         * @static
         * @param {raas.IWsClientOutput=} [properties] Properties to set
         * @returns {raas.WsClientOutput} WsClientOutput instance
         */
        WsClientOutput.create = function create(properties) {
            return new WsClientOutput(properties);
        };

        /**
         * Encodes the specified WsClientOutput message. Does not implicitly {@link raas.WsClientOutput.verify|verify} messages.
         * @function encode
         * @memberof raas.WsClientOutput
         * @static
         * @param {raas.IWsClientOutput} message WsClientOutput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsClientOutput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.callerId != null && message.hasOwnProperty("callerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.callerId);
            if (message.callService != null && message.hasOwnProperty("callService"))
                $root.raas.CallService.encode(message.callService, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.callUnaryService != null && message.hasOwnProperty("callUnaryService"))
                $root.raas.CallUnaryService.encode(message.callUnaryService, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WsClientOutput message, length delimited. Does not implicitly {@link raas.WsClientOutput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof raas.WsClientOutput
         * @static
         * @param {raas.IWsClientOutput} message WsClientOutput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsClientOutput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WsClientOutput message from the specified reader or buffer.
         * @function decode
         * @memberof raas.WsClientOutput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {raas.WsClientOutput} WsClientOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsClientOutput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.raas.WsClientOutput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.callerId = reader.string();
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
         * Decodes a WsClientOutput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof raas.WsClientOutput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {raas.WsClientOutput} WsClientOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsClientOutput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WsClientOutput message.
         * @function verify
         * @memberof raas.WsClientOutput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsClientOutput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.callerId != null && message.hasOwnProperty("callerId"))
                if (!$util.isString(message.callerId))
                    return "callerId: string expected";
            if (message.callService != null && message.hasOwnProperty("callService")) {
                properties.type = 1;
                {
                    var error = $root.raas.CallService.verify(message.callService);
                    if (error)
                        return "callService." + error;
                }
            }
            if (message.callUnaryService != null && message.hasOwnProperty("callUnaryService")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.raas.CallUnaryService.verify(message.callUnaryService);
                    if (error)
                        return "callUnaryService." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WsClientOutput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof raas.WsClientOutput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {raas.WsClientOutput} WsClientOutput
         */
        WsClientOutput.fromObject = function fromObject(object) {
            if (object instanceof $root.raas.WsClientOutput)
                return object;
            var message = new $root.raas.WsClientOutput();
            if (object.callerId != null)
                message.callerId = String(object.callerId);
            if (object.callService != null) {
                if (typeof object.callService !== "object")
                    throw TypeError(".raas.WsClientOutput.callService: object expected");
                message.callService = $root.raas.CallService.fromObject(object.callService);
            }
            if (object.callUnaryService != null) {
                if (typeof object.callUnaryService !== "object")
                    throw TypeError(".raas.WsClientOutput.callUnaryService: object expected");
                message.callUnaryService = $root.raas.CallUnaryService.fromObject(object.callUnaryService);
            }
            return message;
        };

        /**
         * Creates a plain object from a WsClientOutput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof raas.WsClientOutput
         * @static
         * @param {raas.WsClientOutput} message WsClientOutput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsClientOutput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.callerId = "";
            if (message.callerId != null && message.hasOwnProperty("callerId"))
                object.callerId = message.callerId;
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
         * Converts this WsClientOutput to JSON.
         * @function toJSON
         * @memberof raas.WsClientOutput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsClientOutput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WsClientOutput;
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
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.raas.CallService();
            while (reader.pos < end) {
                var tag = reader.uint32();
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
            var message = new $root.raas.CallService();
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
            var object = {};
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
         * @property {number|null} [timeout] CallUnaryService timeout
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
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
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
         * CallUnaryService timeout.
         * @member {number} timeout
         * @memberof raas.CallUnaryService
         * @instance
         */
        CallUnaryService.prototype.timeout = 0;

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
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.timeout);
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.raas.CallUnaryService();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serviceName = reader.string();
                    break;
                case 2:
                    message.bin = reader.bytes();
                    break;
                case 3:
                    message.timeout = reader.uint32();
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
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                if (!$util.isInteger(message.timeout))
                    return "timeout: integer expected";
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
            var message = new $root.raas.CallUnaryService();
            if (object.serviceName != null)
                message.serviceName = String(object.serviceName);
            if (object.bin != null)
                if (typeof object.bin === "string")
                    $util.base64.decode(object.bin, message.bin = $util.newBuffer($util.base64.length(object.bin)), 0);
                else if (object.bin.length)
                    message.bin = object.bin;
            if (object.timeout != null)
                message.timeout = object.timeout >>> 0;
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
            var object = {};
            if (options.defaults) {
                object.serviceName = "";
                object.bin = options.bytes === String ? "" : [];
                object.timeout = 0;
            }
            if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                object.serviceName = message.serviceName;
            if (message.bin != null && message.hasOwnProperty("bin"))
                object.bin = options.bytes === String ? $util.base64.encode(message.bin, 0, message.bin.length) : options.bytes === Array ? Array.prototype.slice.call(message.bin) : message.bin;
            if (message.timeout != null && message.hasOwnProperty("timeout"))
                object.timeout = message.timeout;
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

    raas.WsServerOutput = (function() {

        /**
         * Properties of a WsServerOutput.
         * @memberof raas
         * @interface IWsServerOutput
         * @property {string|null} [callerId] WsServerOutput callerId
         * @property {Uint8Array|null} [bin] WsServerOutput bin
         * @property {string|null} [final] WsServerOutput final
         */

        /**
         * Constructs a new WsServerOutput.
         * @memberof raas
         * @classdesc Represents a WsServerOutput.
         * @implements IWsServerOutput
         * @constructor
         * @param {raas.IWsServerOutput=} [properties] Properties to set
         */
        function WsServerOutput(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WsServerOutput callerId.
         * @member {string} callerId
         * @memberof raas.WsServerOutput
         * @instance
         */
        WsServerOutput.prototype.callerId = "";

        /**
         * WsServerOutput bin.
         * @member {Uint8Array} bin
         * @memberof raas.WsServerOutput
         * @instance
         */
        WsServerOutput.prototype.bin = $util.newBuffer([]);

        /**
         * WsServerOutput final.
         * @member {string} final
         * @memberof raas.WsServerOutput
         * @instance
         */
        WsServerOutput.prototype.final = "";

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * WsServerOutput type.
         * @member {"bin"|"final"|undefined} type
         * @memberof raas.WsServerOutput
         * @instance
         */
        Object.defineProperty(WsServerOutput.prototype, "type", {
            get: $util.oneOfGetter($oneOfFields = ["bin", "final"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new WsServerOutput instance using the specified properties.
         * @function create
         * @memberof raas.WsServerOutput
         * @static
         * @param {raas.IWsServerOutput=} [properties] Properties to set
         * @returns {raas.WsServerOutput} WsServerOutput instance
         */
        WsServerOutput.create = function create(properties) {
            return new WsServerOutput(properties);
        };

        /**
         * Encodes the specified WsServerOutput message. Does not implicitly {@link raas.WsServerOutput.verify|verify} messages.
         * @function encode
         * @memberof raas.WsServerOutput
         * @static
         * @param {raas.IWsServerOutput} message WsServerOutput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsServerOutput.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.callerId != null && message.hasOwnProperty("callerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.callerId);
            if (message.bin != null && message.hasOwnProperty("bin"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.bin);
            if (message.final != null && message.hasOwnProperty("final"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.final);
            return writer;
        };

        /**
         * Encodes the specified WsServerOutput message, length delimited. Does not implicitly {@link raas.WsServerOutput.verify|verify} messages.
         * @function encodeDelimited
         * @memberof raas.WsServerOutput
         * @static
         * @param {raas.IWsServerOutput} message WsServerOutput message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WsServerOutput.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WsServerOutput message from the specified reader or buffer.
         * @function decode
         * @memberof raas.WsServerOutput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {raas.WsServerOutput} WsServerOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsServerOutput.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.raas.WsServerOutput();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.callerId = reader.string();
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
         * Decodes a WsServerOutput message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof raas.WsServerOutput
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {raas.WsServerOutput} WsServerOutput
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WsServerOutput.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WsServerOutput message.
         * @function verify
         * @memberof raas.WsServerOutput
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WsServerOutput.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.callerId != null && message.hasOwnProperty("callerId"))
                if (!$util.isString(message.callerId))
                    return "callerId: string expected";
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
         * Creates a WsServerOutput message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof raas.WsServerOutput
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {raas.WsServerOutput} WsServerOutput
         */
        WsServerOutput.fromObject = function fromObject(object) {
            if (object instanceof $root.raas.WsServerOutput)
                return object;
            var message = new $root.raas.WsServerOutput();
            if (object.callerId != null)
                message.callerId = String(object.callerId);
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
         * Creates a plain object from a WsServerOutput message. Also converts values to other types if specified.
         * @function toObject
         * @memberof raas.WsServerOutput
         * @static
         * @param {raas.WsServerOutput} message WsServerOutput
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WsServerOutput.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.callerId = "";
            if (message.callerId != null && message.hasOwnProperty("callerId"))
                object.callerId = message.callerId;
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
         * Converts this WsServerOutput to JSON.
         * @function toJSON
         * @memberof raas.WsServerOutput
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WsServerOutput.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WsServerOutput;
    })();

    return raas;
})();

module.exports = $root;
