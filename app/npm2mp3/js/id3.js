var _0x5d2a = [
    "map",
    "charCodeAt",
    "length",
    "image/jpeg",
    "image/gif",
    "image/webp",
    "image/tiff",
    "image/bmp",
    "image/x-icon",
    "_setIntegerFrame",
    "frames",
    "push",
    "toString",
    "_setStringFrame",
    "Unknown\x20picture\x20MIME\x20type",
    "APIC",
    "byteLength",
    "_setLyricsFrame",
    "USLT",
    "_setCommentFrame",
    "COMM",
    "_setUrlLinkFrame",
    "object",
    "arrayBuffer",
    "padding",
    "url",
    "setFrame",
    "TPE1",
    "TCOM",
    "TCON",
    "isArray",
    "\x20frame\x20value\x20should\x20be\x20an\x20array\x20of\x20strings",
    "join",
    "TIT2",
    "TALB",
    "TPE2",
    "TPE3",
    "TPE4",
    "TRCK",
    "TPOS",
    "TMED",
    "TPUB",
    "TCOP",
    "TSRC",
    "TBPM",
    "TLEN",
    "TDAT",
    "TYER",
    "lyrics",
    "USLT\x20frame\x20value\x20should\x20be\x20an\x20object\x20with\x20keys\x20description\x20and\x20lyrics",
    "description",
    "type",
    "data",
    "APIC\x20frame\x20value\x20should\x20be\x20an\x20object\x20with\x20keys\x20type,\x20data\x20and\x20description",
    "Incorrect\x20APIC\x20frame\x20picture\x20type",
    "_setPictureFrame",
    "useUnicodeEncoding",
    "TXXX",
    "value",
    "_setUserStringFrame",
    "TKEY",
    "test",
    "\x20frame\x20value\x20should\x20be\x20like\x20Dbm,\x20C#,\x20B\x20or\x20o",
    "WCOP",
    "WOAF",
    "WOAR",
    "WOAS",
    "WORS",
    "WPAY",
    "WPUB",
    "text",
    "COMM\x20frame\x20value\x20should\x20be\x20an\x20object\x20with\x20keys\x20description\x20and\x20text",
    "Unsupported\x20frame\x20",
    "removeTag",
    "subarray",
    "buffer",
    "addTag",
    "reduce",
    "size",
    "set",
    "name",
    "WCOM",
    "concat",
    "pictureType",
    "getBlob",
    "audio/mpeg",
    "revokeURL",
    "revokeObjectURL",
    "split",
];
(function (_0x49142d, _0x3b20bb) {
    var _0x6f7cf5 = function (_0x239f45) {
        while (--_0x239f45) {
            _0x49142d["push"](_0x49142d["shift"]());
        }
    };
    _0x6f7cf5(++_0x3b20bb);
})(_0x5d2a, 0x163);
var _0x42af = function (_0x296f2d, _0x2a42fb) {
    _0x296f2d = _0x296f2d - 0x0;
    var _0x231417 = _0x5d2a[_0x296f2d];
    return _0x231417;
};
function strToCodePoints(_0x4eaba6) {
    return String(_0x4eaba6)
    [_0x42af("0x0")]("")
    [_0x42af("0x1")]((_0x505735) => _0x505735[_0x42af("0x2")](0x0));
}
function encodeWindows1252(_0x4c9f5a) {
    return new Uint8Array(strToCodePoints(_0x4c9f5a));
}
function encodeUtf16le(_0x509b56) {
    const _0x1a6fac = new Uint8Array(_0x509b56[_0x42af("0x3")] * 0x2);
    new Uint16Array(_0x1a6fac["buffer"])["set"](strToCodePoints(_0x509b56));
    return _0x1a6fac;
}
function isId3v2(_0x1aeaaf) {
    return (
        _0x1aeaaf[0x0] === 0x49 &&
        _0x1aeaaf[0x1] === 0x44 &&
        _0x1aeaaf[0x2] === 0x33
    );
}
function getMimeType(_0x358fc7) {
    if (!_0x358fc7 || !_0x358fc7[_0x42af("0x3")]) {
        return null;
    }
    if (
        _0x358fc7[0x0] === 0xff &&
        _0x358fc7[0x1] === 0xd8 &&
        _0x358fc7[0x2] === 0xff
    ) {
        return _0x42af("0x4");
    }
    if (
        _0x358fc7[0x0] === 0x89 &&
        _0x358fc7[0x1] === 0x50 &&
        _0x358fc7[0x2] === 0x4e &&
        _0x358fc7[0x3] === 0x47
    ) {
        return "image/png";
    }
    if (
        _0x358fc7[0x0] === 0x47 &&
        _0x358fc7[0x1] === 0x49 &&
        _0x358fc7[0x2] === 0x46
    ) {
        return _0x42af("0x5");
    }
    if (
        _0x358fc7[0x8] === 0x57 &&
        _0x358fc7[0x9] === 0x45 &&
        _0x358fc7[0xa] === 0x42 &&
        _0x358fc7[0xb] === 0x50
    ) {
        return _0x42af("0x6");
    }
    const _0x18b1cf =
        _0x358fc7[0x0] === 0x49 &&
        _0x358fc7[0x1] === 0x49 &&
        _0x358fc7[0x2] === 0x2a &&
        _0x358fc7[0x3] === 0x0;
    const _0x42b9b2 =
        _0x358fc7[0x0] === 0x4d &&
        _0x358fc7[0x1] === 0x4d &&
        _0x358fc7[0x2] === 0x0 &&
        _0x358fc7[0x3] === 0x2a;
    if (_0x18b1cf || _0x42b9b2) {
        return _0x42af("0x7");
    }
    if (_0x358fc7[0x0] === 0x42 && _0x358fc7[0x1] === 0x4d) {
        return _0x42af("0x8");
    }
    if (
        _0x358fc7[0x0] === 0x0 &&
        _0x358fc7[0x1] === 0x0 &&
        _0x358fc7[0x2] === 0x1 &&
        _0x358fc7[0x3] === 0x0
    ) {
        return _0x42af("0x9");
    }
    return null;
}
function getNumericFrameSize(_0x4c3022) {
    const _0x55e611 = 0xa;
    const _0x18e84e = 0x1;
    return _0x55e611 + _0x18e84e + _0x4c3022;
}
function getStringFrameSize(_0x99cf9) {
    const _0x2464ae = 0xa;
    const _0x561870 = 0x1;
    const _0x27e69b = 0x2;
    const _0x57a1ce = _0x99cf9 * 0x2;
    return _0x2464ae + _0x561870 + _0x27e69b + _0x57a1ce;
}
function getLyricsFrameSize(_0x40a75d, _0x289755) {
    const _0x47c5e1 = 0xa;
    const _0x26fc3e = 0x1;
    const _0xefa1c0 = 0x3;
    const _0x6b9e61 = 0x2;
    const _0x3ecfb3 = _0x40a75d * 0x2;
    const _0x5f232a = 0x2;
    const _0x558502 = _0x289755 * 0x2;
    return (
        _0x47c5e1 +
        _0x26fc3e +
        _0xefa1c0 +
        _0x6b9e61 +
        _0x3ecfb3 +
        _0x5f232a +
        _0x6b9e61 +
        _0x558502
    );
}
function getPictureFrameSize(_0xc939ab, _0x143d66, _0x326eef, _0x553759) {
    const _0x358c88 = 0xa;
    const _0x4b0ee1 = 0x1;
    const _0x4bd828 = 0x1;
    const _0x15a9d4 = 0x1;
    const _0x2033e9 = 0x2;
    const _0x28f776 = _0x553759
        ? _0x2033e9 + (_0x326eef + _0x4bd828) * 0x2
        : _0x326eef + _0x4bd828;
    return (
        _0x358c88 +
        _0x4b0ee1 +
        _0x143d66 +
        _0x4bd828 +
        _0x15a9d4 +
        _0x28f776 +
        _0xc939ab
    );
}
function getCommentFrameSize(_0x380f26, _0x5644aa) {
    const _0x331732 = 0xa;
    const _0x1bbeaa = 0x1;
    const _0x1855fe = 0x3;
    const _0x15f639 = 0x2;
    const _0x56828e = _0x380f26 * 0x2;
    const _0x2366ee = 0x2;
    const _0x389abc = _0x5644aa * 0x2;
    return (
        _0x331732 +
        _0x1bbeaa +
        _0x1855fe +
        _0x15f639 +
        _0x56828e +
        _0x2366ee +
        _0x15f639 +
        _0x389abc
    );
}
function getUserStringFrameSize(_0x3eb415, _0x5c5d00) {
    const _0x4af633 = 0xa;
    const _0xd87020 = 0x1;
    const _0x41fb35 = 0x2;
    const _0x1c02e7 = _0x3eb415 * 0x2;
    const _0x9647f = 0x2;
    const _0x15cc48 = _0x5c5d00 * 0x2;
    return (
        _0x4af633 +
        _0xd87020 +
        _0x41fb35 +
        _0x1c02e7 +
        _0x9647f +
        _0x41fb35 +
        _0x15cc48
    );
}
function getUrlLinkFrameSize(_0x3e7d96) {
    const _0x2e27b6 = 0xa;
    return _0x2e27b6 + _0x3e7d96;
}
function uint32ToUint8Array(_0x1ef06e) {
    const _0x1dcc04 = 0xff;
    return [
        (_0x1ef06e >>> 0x18) & _0x1dcc04,
        (_0x1ef06e >>> 0x10) & _0x1dcc04,
        (_0x1ef06e >>> 0x8) & _0x1dcc04,
        _0x1ef06e & _0x1dcc04,
    ];
}
function uint28ToUint7Array(_0x4689fe) {
    const _0x226c96 = 0x7f;
    return [
        (_0x4689fe >>> 0x15) & _0x226c96,
        (_0x4689fe >>> 0xe) & _0x226c96,
        (_0x4689fe >>> 0x7) & _0x226c96,
        _0x4689fe & _0x226c96,
    ];
}
function uint7ArrayToUint28(_0x50fc66) {
    return (
        (_0x50fc66[0x0] << 0x15) +
        (_0x50fc66[0x1] << 0xe) +
        (_0x50fc66[0x2] << 0x7) +
        _0x50fc66[0x3]
    );
}
class ID3Writer {
    [_0x42af("0xa")](_0x23e14, _0x59f338) {
        const _0x3e1556 = parseInt(_0x59f338, 0xa);
        this[_0x42af("0xb")][_0x42af("0xc")]({
            name: _0x23e14,
            value: _0x3e1556,
            size: getNumericFrameSize(_0x3e1556[_0x42af("0xd")]()[_0x42af("0x3")]),
        });
    }
    [_0x42af("0xe")](_0x388aa0, _0x11985e) {
        const _0x3c0169 = _0x11985e[_0x42af("0xd")]();
        this[_0x42af("0xb")]["push"]({
            name: _0x388aa0,
            value: _0x3c0169,
            size: getStringFrameSize(_0x3c0169[_0x42af("0x3")]),
        });
    }
    ["_setPictureFrame"](_0x264a8f, _0x272df6, _0x335492, _0x474b61) {
        const _0x3805a7 = getMimeType(new Uint8Array(_0x272df6));
        const _0x160160 = _0x335492[_0x42af("0xd")]();
        if (!_0x3805a7) {
            throw new Error(_0x42af("0xf"));
        }
        if (!_0x335492) {
            _0x474b61 = ![];
        }
        this[_0x42af("0xb")][_0x42af("0xc")]({
            name: _0x42af("0x10"),
            value: _0x272df6,
            pictureType: _0x264a8f,
            mimeType: _0x3805a7,
            useUnicodeEncoding: _0x474b61,
            description: _0x160160,
            size: getPictureFrameSize(
                _0x272df6[_0x42af("0x11")],
                _0x3805a7[_0x42af("0x3")],
                _0x160160["length"],
                _0x474b61
            ),
        });
    }
    [_0x42af("0x12")](_0x4cbf7c, _0x282c63) {
        const _0x5e63f4 = _0x4cbf7c[_0x42af("0xd")]();
        const _0x269f47 = _0x282c63[_0x42af("0xd")]();
        this[_0x42af("0xb")][_0x42af("0xc")]({
            name: _0x42af("0x13"),
            value: _0x269f47,
            description: _0x5e63f4,
            size: getLyricsFrameSize(_0x5e63f4[_0x42af("0x3")], _0x269f47["length"]),
        });
    }
    [_0x42af("0x14")](_0x2f96b1, _0x258d29) {
        const _0x2ec92e = _0x2f96b1[_0x42af("0xd")]();
        const _0xb2d4c4 = _0x258d29[_0x42af("0xd")]();
        this[_0x42af("0xb")][_0x42af("0xc")]({
            name: _0x42af("0x15"),
            value: _0xb2d4c4,
            description: _0x2ec92e,
            size: getCommentFrameSize(_0x2ec92e[_0x42af("0x3")], _0xb2d4c4["length"]),
        });
    }
    ["_setUserStringFrame"](_0x324976, _0x3169dd) {
        const _0x4d8fdd = _0x324976[_0x42af("0xd")]();
        const _0x82e313 = _0x3169dd[_0x42af("0xd")]();
        this[_0x42af("0xb")]["push"]({
            name: "TXXX",
            description: _0x4d8fdd,
            value: _0x82e313,
            size: getUserStringFrameSize(
                _0x4d8fdd[_0x42af("0x3")],
                _0x82e313[_0x42af("0x3")]
            ),
        });
    }
    [_0x42af("0x16")](_0x210d6d, _0x399e68) {
        const _0x29dc39 = _0x399e68[_0x42af("0xd")]();
        this[_0x42af("0xb")][_0x42af("0xc")]({
            name: _0x210d6d,
            value: _0x29dc39,
            size: getUrlLinkFrameSize(_0x29dc39["length"]),
        });
    }
    constructor(_0xc04e04) {
        if (
            !_0xc04e04 ||
            typeof _0xc04e04 !== _0x42af("0x17") ||
            !("byteLength" in _0xc04e04)
        ) {
            throw new Error(
                "First\x20argument\x20should\x20be\x20an\x20instance\x20of\x20ArrayBuffer\x20or\x20Buffer"
            );
        }
        this[_0x42af("0x18")] = _0xc04e04;
        this[_0x42af("0x19")] = 0x1000;
        this[_0x42af("0xb")] = [];
        this[_0x42af("0x1a")] = "";
    }
    [_0x42af("0x1b")](_0x44a437, _0x50aeca) {
        switch (_0x44a437) {
            case _0x42af("0x1c"):
            case _0x42af("0x1d"):
            case _0x42af("0x1e"): {
                if (!Array[_0x42af("0x1f")](_0x50aeca)) {
                    throw new Error(_0x44a437 + _0x42af("0x20"));
                }
                const _0x199056 = _0x44a437 === "TCON" ? ";" : "/";
                const _0x5d45cf = _0x50aeca[_0x42af("0x21")](_0x199056);
                this[_0x42af("0xe")](_0x44a437, _0x5d45cf);
                break;
            }
            case _0x42af("0x22"):
            case _0x42af("0x23"):
            case _0x42af("0x24"):
            case _0x42af("0x25"):
            case _0x42af("0x26"):
            case _0x42af("0x27"):
            case _0x42af("0x28"):
            case _0x42af("0x29"):
            case _0x42af("0x2a"):
            case _0x42af("0x2b"):
            case _0x42af("0x2c"): {
                this[_0x42af("0xe")](_0x44a437, _0x50aeca);
                break;
            }
            case _0x42af("0x2d"):
            case _0x42af("0x2e"):
            case _0x42af("0x2f"):
            case _0x42af("0x30"): {
                this[_0x42af("0xa")](_0x44a437, _0x50aeca);
                break;
            }
            case "USLT": {
                if (
                    typeof _0x50aeca !== "object" ||
                    !("description" in _0x50aeca) ||
                    !(_0x42af("0x31") in _0x50aeca)
                ) {
                    throw new Error(_0x42af("0x32"));
                }
                this["_setLyricsFrame"](
                    _0x50aeca[_0x42af("0x33")],
                    _0x50aeca[_0x42af("0x31")]
                );
                break;
            }
            case _0x42af("0x10"): {
                if (
                    typeof _0x50aeca !== "object" ||
                    !(_0x42af("0x34") in _0x50aeca) ||
                    !(_0x42af("0x35") in _0x50aeca) ||
                    !(_0x42af("0x33") in _0x50aeca)
                ) {
                    throw new Error(_0x42af("0x36"));
                }
                if (
                    _0x50aeca[_0x42af("0x34")] < 0x0 ||
                    _0x50aeca[_0x42af("0x34")] > 0x14
                ) {
                    throw new Error(_0x42af("0x37"));
                }
                this[_0x42af("0x38")](
                    _0x50aeca[_0x42af("0x34")],
                    _0x50aeca[_0x42af("0x35")],
                    _0x50aeca[_0x42af("0x33")],
                    !!_0x50aeca[_0x42af("0x39")]
                );
                break;
            }
            case _0x42af("0x3a"): {
                if (
                    typeof _0x50aeca !== _0x42af("0x17") ||
                    !(_0x42af("0x33") in _0x50aeca) ||
                    !(_0x42af("0x3b") in _0x50aeca)
                ) {
                    throw new Error(
                        "TXXX\x20frame\x20value\x20should\x20be\x20an\x20object\x20with\x20keys\x20description\x20and\x20value"
                    );
                }
                this[_0x42af("0x3c")](
                    _0x50aeca["description"],
                    _0x50aeca[_0x42af("0x3b")]
                );
                break;
            }
            case _0x42af("0x3d"): {
                if (!/^([A-G][#b]?m?|o)$/[_0x42af("0x3e")](_0x50aeca)) {
                    throw new Error(_0x44a437 + _0x42af("0x3f"));
                }
                this[_0x42af("0xe")](_0x44a437, _0x50aeca);
                break;
            }
            case "WCOM":
            case _0x42af("0x40"):
            case _0x42af("0x41"):
            case _0x42af("0x42"):
            case _0x42af("0x43"):
            case _0x42af("0x44"):
            case _0x42af("0x45"):
            case _0x42af("0x46"): {
                this[_0x42af("0x16")](_0x44a437, _0x50aeca);
                break;
            }
            case _0x42af("0x15"): {
                if (
                    typeof _0x50aeca !== _0x42af("0x17") ||
                    !("description" in _0x50aeca) ||
                    !(_0x42af("0x47") in _0x50aeca)
                ) {
                    throw new Error(_0x42af("0x48"));
                }
                this["_setCommentFrame"](
                    _0x50aeca[_0x42af("0x33")],
                    _0x50aeca[_0x42af("0x47")]
                );
                break;
            }
            default: {
                throw new Error(_0x42af("0x49") + _0x44a437);
            }
        }
        return this;
    }
    [_0x42af("0x4a")]() {
        const _0x557964 = 0xa;
        if (this[_0x42af("0x18")][_0x42af("0x11")] < _0x557964) {
            return;
        }
        const _0x2527f6 = new Uint8Array(this[_0x42af("0x18")]);
        const _0x346fc9 = _0x2527f6[0x3];
        const _0x3237ef =
            uint7ArrayToUint28([
                _0x2527f6[0x6],
                _0x2527f6[0x7],
                _0x2527f6[0x8],
                _0x2527f6[0x9],
            ]) + _0x557964;
        if (!isId3v2(_0x2527f6) || _0x346fc9 < 0x2 || _0x346fc9 > 0x4) {
            return;
        }
        this[_0x42af("0x18")] = new Uint8Array(
            _0x2527f6[_0x42af("0x4b")](_0x3237ef)
        )[_0x42af("0x4c")];
    }
    [_0x42af("0x4d")]() {
        this[_0x42af("0x4a")]();
        const _0x1f4cf8 = [0xff, 0xfe];
        const _0x2deb0c = [0x65, 0x6e, 0x67];
        const _0x2de1fe = 0xa;
        const _0x42d641 = this[_0x42af("0xb")][_0x42af("0x4e")](
            (_0xe9338b, _0x21fd80) => _0xe9338b + _0x21fd80[_0x42af("0x4f")],
            0x0
        );
        const _0x4e25e4 = _0x2de1fe + _0x42d641 + this["padding"];
        const _0xcf4577 = new ArrayBuffer(
            this[_0x42af("0x18")][_0x42af("0x11")] + _0x4e25e4
        );
        const _0x40557d = new Uint8Array(_0xcf4577);
        let _0xba297c = 0x0;
        let _0x3b7f40 = [];
        _0x3b7f40 = [0x49, 0x44, 0x33, 0x3];
        _0x40557d[_0x42af("0x50")](_0x3b7f40, _0xba297c);
        _0xba297c += _0x3b7f40[_0x42af("0x3")];
        _0xba297c++;
        _0xba297c++;
        _0x3b7f40 = uint28ToUint7Array(_0x4e25e4 - _0x2de1fe);
        _0x40557d[_0x42af("0x50")](_0x3b7f40, _0xba297c);
        _0xba297c += _0x3b7f40[_0x42af("0x3")];
        this[_0x42af("0xb")]["forEach"]((_0x2aacf6) => {
            _0x3b7f40 = encodeWindows1252(_0x2aacf6[_0x42af("0x51")]);
            _0x40557d[_0x42af("0x50")](_0x3b7f40, _0xba297c);
            _0xba297c += _0x3b7f40[_0x42af("0x3")];
            _0x3b7f40 = uint32ToUint8Array(_0x2aacf6[_0x42af("0x4f")] - _0x2de1fe);
            _0x40557d[_0x42af("0x50")](_0x3b7f40, _0xba297c);
            _0xba297c += _0x3b7f40[_0x42af("0x3")];
            _0xba297c += 0x2;
            switch (_0x2aacf6["name"]) {
                case _0x42af("0x52"):
                case _0x42af("0x40"):
                case _0x42af("0x41"):
                case _0x42af("0x42"):
                case _0x42af("0x43"):
                case "WORS":
                case _0x42af("0x45"):
                case _0x42af("0x46"): {
                    _0x3b7f40 = encodeWindows1252(_0x2aacf6[_0x42af("0x3b")]);
                    _0x40557d["set"](_0x3b7f40, _0xba297c);
                    _0xba297c += _0x3b7f40[_0x42af("0x3")];
                    break;
                }
                case _0x42af("0x1c"):
                case _0x42af("0x1d"):
                case _0x42af("0x1e"):
                case _0x42af("0x22"):
                case _0x42af("0x23"):
                case _0x42af("0x24"):
                case "TPE3":
                case "TPE4":
                case _0x42af("0x27"):
                case _0x42af("0x28"):
                case "TKEY":
                case _0x42af("0x29"):
                case _0x42af("0x2a"):
                case _0x42af("0x2b"):
                case "TSRC": {
                    _0x3b7f40 = [0x1][_0x42af("0x53")](_0x1f4cf8);
                    _0x40557d[_0x42af("0x50")](_0x3b7f40, _0xba297c);
                    _0xba297c += _0x3b7f40[_0x42af("0x3")];
                    _0x3b7f40 = encodeUtf16le(_0x2aacf6[_0x42af("0x3b")]);
                    _0x40557d[_0x42af("0x50")](_0x3b7f40, _0xba297c);
                    _0xba297c += _0x3b7f40[_0x42af("0x3")];
                    break;
                }
                case "TXXX":
                case _0x42af("0x13"):
                case _0x42af("0x15"): {
                    _0x3b7f40 = [0x1];
                    if (
                        _0x2aacf6[_0x42af("0x51")] === _0x42af("0x13") ||
                        _0x2aacf6["name"] === _0x42af("0x15")
                    ) {
                        _0x3b7f40 = _0x3b7f40["concat"](_0x2deb0c);
                    }
                    _0x3b7f40 = _0x3b7f40[_0x42af("0x53")](_0x1f4cf8);
                    _0x40557d[_0x42af("0x50")](_0x3b7f40, _0xba297c);
                    _0xba297c += _0x3b7f40[_0x42af("0x3")];
                    _0x3b7f40 = encodeUtf16le(_0x2aacf6[_0x42af("0x33")]);
                    _0x40557d[_0x42af("0x50")](_0x3b7f40, _0xba297c);
                    _0xba297c += _0x3b7f40[_0x42af("0x3")];
                    _0x3b7f40 = [0x0, 0x0][_0x42af("0x53")](_0x1f4cf8);
                    _0x40557d[_0x42af("0x50")](_0x3b7f40, _0xba297c);
                    _0xba297c += _0x3b7f40[_0x42af("0x3")];
                    _0x3b7f40 = encodeUtf16le(_0x2aacf6[_0x42af("0x3b")]);
                    _0x40557d[_0x42af("0x50")](_0x3b7f40, _0xba297c);
                    _0xba297c += _0x3b7f40[_0x42af("0x3")];
                    break;
                }
                case _0x42af("0x2d"):
                case _0x42af("0x2e"):
                case "TDAT":
                case _0x42af("0x30"): {
                    _0xba297c++;
                    _0x3b7f40 = encodeWindows1252(_0x2aacf6[_0x42af("0x3b")]);
                    _0x40557d[_0x42af("0x50")](_0x3b7f40, _0xba297c);
                    _0xba297c += _0x3b7f40[_0x42af("0x3")];
                    break;
                }
                case _0x42af("0x10"): {
                    _0x3b7f40 = [_0x2aacf6[_0x42af("0x39")] ? 0x1 : 0x0];
                    _0x40557d[_0x42af("0x50")](_0x3b7f40, _0xba297c);
                    _0xba297c += _0x3b7f40[_0x42af("0x3")];
                    _0x3b7f40 = encodeWindows1252(_0x2aacf6["mimeType"]);
                    _0x40557d["set"](_0x3b7f40, _0xba297c);
                    _0xba297c += _0x3b7f40[_0x42af("0x3")];
                    _0x3b7f40 = [0x0, _0x2aacf6[_0x42af("0x54")]];
                    _0x40557d[_0x42af("0x50")](_0x3b7f40, _0xba297c);
                    _0xba297c += _0x3b7f40[_0x42af("0x3")];
                    if (_0x2aacf6[_0x42af("0x39")]) {
                        _0x3b7f40 = [][_0x42af("0x53")](_0x1f4cf8);
                        _0x40557d[_0x42af("0x50")](_0x3b7f40, _0xba297c);
                        _0xba297c += _0x3b7f40[_0x42af("0x3")];
                        _0x3b7f40 = encodeUtf16le(_0x2aacf6["description"]);
                        _0x40557d[_0x42af("0x50")](_0x3b7f40, _0xba297c);
                        _0xba297c += _0x3b7f40[_0x42af("0x3")];
                        _0xba297c += 0x2;
                    } else {
                        _0x3b7f40 = encodeWindows1252(_0x2aacf6[_0x42af("0x33")]);
                        _0x40557d["set"](_0x3b7f40, _0xba297c);
                        _0xba297c += _0x3b7f40[_0x42af("0x3")];
                        _0xba297c++;
                    }
                    _0x40557d["set"](
                        new Uint8Array(_0x2aacf6[_0x42af("0x3b")]),
                        _0xba297c
                    );
                    _0xba297c += _0x2aacf6[_0x42af("0x3b")]["byteLength"];
                    break;
                }
            }
        });
        _0xba297c += this[_0x42af("0x19")];
        _0x40557d["set"](new Uint8Array(this[_0x42af("0x18")]), _0xba297c);
        this[_0x42af("0x18")] = _0xcf4577;
        return _0xcf4577;
    }
    [_0x42af("0x55")]() {
        return new Blob([this[_0x42af("0x18")]], { type: _0x42af("0x56") });
    }
    ["getURL"]() {
        if (!this[_0x42af("0x1a")]) {
            this[_0x42af("0x1a")] = URL["createObjectURL"](this[_0x42af("0x55")]());
        }
        return this[_0x42af("0x1a")];
    }
    [_0x42af("0x57")]() {
        URL[_0x42af("0x58")](this[_0x42af("0x1a")]);
    }
}
