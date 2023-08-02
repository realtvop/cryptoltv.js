// https://github.com/realtvop/cryptoltv.js

async function hmacsha256(digest, secret) {
    const encoder = new TextEncoder();
    const data = encoder.encode(digest);
    const keyPromise = crypto.subtle.importKey(
        'raw',
        encoder.encode(secret),
        { name: 'HMAC', hash: { name: 'SHA-256' } },
        false,
        ['sign']
    );

    const key = await keyPromise;
    const signature = await crypto.subtle.sign('HMAC', key, data);
    const base64String = btoa(String.fromCharCode(...new Uint8Array(signature)));
    return base64String;
}

export default { hmacsha256 };
