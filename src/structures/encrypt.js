import encode from 'bucky.js';

export default function(password) {
    return encode.encoder(password, process.env.ENCODER);
}