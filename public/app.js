const BASE = 'http://localhost:3000';

async function getSession() {
    const res = await fetch(BASE + '/session');
    const data = await res.json();

    document.getElementById('out').innerText =
        JSON.stringify(data, null, 2);
}