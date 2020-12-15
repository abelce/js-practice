function isUrl(url) {
    try {
        const { href, host, hostname, origin, pathname} = new URL(url);
        return href && host && hostname && origin && pathname && true;
    } catch(err) {
        return false;
    }
}

function isUrl(url) {
    try {
        const a = document.createElement('a');
        a.href = url;
        const { href, host, hostname, origin, pathname } = a;
        return href && host && hostname && origin && pathname && true;
    } catch(err) {
        return false;
    }
}