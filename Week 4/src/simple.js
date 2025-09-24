export function add(a, b) {
    if(typeof a !== "number" || typeof b !== "number") {
        return "INVALID";
    }

    if(isNaN(a) || isNaN(b)) {
        return "INVALID"
    }

    if(!isFinite(a) || !isFinite(b)) {
        return "INVALID"
    }

    return a + b;
}