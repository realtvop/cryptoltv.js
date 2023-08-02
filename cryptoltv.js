function hmacsha256(digest, secret) {
            const encoder = new TextEncoder();
            const data = encoder.encode(digest);
            const key = await crypto.subtle.importKey(
                'raw',
                encoder.encode(secret),
                { name: 'HMAC', hash: { name: 'SHA-256' } },
                false,
                ['sign']
            );
            const signature = await crypto.subtle.sign('HMAC', key, data);
            const base64String = btoa(String.fromCharCode(...new Uint8Array(signature)));
            return base64String;
        }

export default { hmacsha56 };
