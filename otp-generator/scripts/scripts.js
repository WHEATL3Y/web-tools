"use strict"

async function generateOTP(secret) {

    let hash = await sha1(secret);
    let i = hash[hash.length - 1] & 0xf;

    extract31(hash, i);
}

async function sha1(secret) {

    // Generate a sha1 digest from secret
    // Return an array containting the hash data 

    const e = new TextEncoder();
    
    let hash = await crypto.subtle.digest("SHA-1", e.encode(secret));
    hash = Array.from(new Uint8Array(hash));
    
    return hash;
}

function extract31(hash, offset) {

    console.log(hash);

    let truncatedHash = 0;
    let oStart = offset * 8 + 1;
    let oEnd = offset * 8 + 4 * 8 -1;
    const firstByte = Math.floor(oStart / 8);
    const firstByteMask = 8 - (oStart % 8);
    const lastByte = Math.floor(oEnd / 8);
    const lastByteMask = (oEnd % 8);

    truncatedHash &= hash[9] & firstByteMask;

    console.log(oStart, oEnd, firstByte, lastByte, firstByteMask, lastByteMask);
    console.log(truncatedHash);
}