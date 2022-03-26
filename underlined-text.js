function encool() {
    var _0xf09fx2 = change($('#original').val());
    $('#resulting').html(_0xf09fx2);
};
var normal = 'abcdefghijklmnopqrstuvwxyz';
var changed = 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ';

function change(_0xf09fx6) {
    var _0xf09fx7 = location.href;

    var _0xf09fx8 = _0xf09fx6;
    var _0xf09fx9 = '';
    for (var _0xf09fxa = 0; _0xf09fxa < _0xf09fx8.length; _0xf09fxa++) {
        var _0xf09fxb = _0xf09fx8.charAt(_0xf09fxa);
        if (_0xf09fxb == '̷' || _0xf09fxb == '̶' || _0xf09fxb == '̅' || _0xf09fxb == '̲') {
            continue;
        };
        if (_0xf09fxb == `\
`) {
            _0xf09fx9 += '<br>';
            continue;
        };
        if ($('#smallcaps:checked').length) {
            var _0xf09fxc = 0;
            for (;
                (_0xf09fxc < normal.length) && (_0xf09fxb != normal.charAt(_0xf09fxc)); _0xf09fxc++) {
                ;;
            };
            if (_0xf09fxc < normal.length) {
                _0xf09fx9 += changed.charAt(_0xf09fxc);
            } else {
                _0xf09fx9 += _0xf09fxb;
            };
        } else {
            _0xf09fx9 += _0xf09fxb;
        };
        for (var _0xf09fxd = 0; _0xf09fxd < parseInt($('#underline').val()) && _0xf09fxd < 10; _0xf09fxd++) {
            _0xf09fx9 += '̲';
        };
        var _0xf09fxd = 0;
        for (var _0xf09fxd = 0; _0xf09fxd < parseInt($('#overline').val()) - 1 && _0xf09fxd < 10; _0xf09fxd += 2) {
            _0xf09fx9 += '̿';
        };
        for (; _0xf09fxd < parseInt($('#overline').val()) && _0xf09fxd < 10; _0xf09fxd++) {
            _0xf09fx9 += '̅';
        };
        if ($('#strikethrough:checked').length) {
            _0xf09fx9 += '̶';
        };
        if ($('#diagonal:checked').length) {
            _0xf09fx9 += '̷';
        };
        if ($('#diagonalbig:checked').length) {
            _0xf09fx9 += '̸';
        };
    };
    if (_0xf09fx7.search('file://') !== -1) {
        _0xf09fx9 += `
\

\
`;
    };
    return _0xf09fx9;
};
