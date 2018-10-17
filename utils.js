function getOwnAttrs (ele) {
    var result = [];
    var attrs = ele.attributes;
    var key, value;
    for (var p in attrs) {
        if (attrs.hasOwnProperty(p)) {
            key = attrs[p].name;
            value = attrs[p].value;
            result.push({'key': key, value: value});
        }
    }
    return result;
}