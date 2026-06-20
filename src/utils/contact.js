// Email assembled at runtime from separate parts so the full address never
// appears as a single, regex-matchable string in the served HTML/JS.
// This defeats naive email harvesters (which scrape raw HTML for `...@...`).
// It is NOT bulletproof against bots that execute JS — for that, the Netlify
// contact form remains the safe path.
const user = 'gael.rothlin'
const domain = ['proton', 'me'].join('.')

export const email = `${user}@${domain}`
export const mailto = `mailto:${email}`
