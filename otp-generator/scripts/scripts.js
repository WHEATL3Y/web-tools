async function generateOTP(secret) {

    const counter = Math.floor((((new Date()).getTime()) / 1000) / 30);
    const hash = await sha1(secret, counter);
    const i = hash & BigInt(0xf);

    console.log(extract31(hash, i) % BigInt(10**6));

}

async function sha1(secret, counter) {

    // Generate a sha1 digest from secret
    // Return the decimal representation, as BigInt

    const e = new TextEncoder();
    let hash = await crypto.subtle.sign("SHA-1", e.encode(secret), e.encode(counter));
    hash = Array.from(new Uint8Array(hash))
        .map(v => v.toString(16)
        .padStart(2, "0"))
        .join("");
    hash = BigInt(`0x${hash}`);

    return hash;

}

function extract31(hash, offset) {

    // 31 bit mask
    let mask = BigInt(0x7FFFFFFF);

    mask <<= offset;
    
    return hash & mask;
}
