export default function buildApiUrl(...parts) {
    return `http://dedsec256-001-site1.btempurl.com/api/${parts.join('/')}`;
}