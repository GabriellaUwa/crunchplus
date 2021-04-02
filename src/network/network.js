const proxy_url = "https://cors-anywhere.herokuapp.com/"; // hack since cors origin needs to be allowed in backend
const host = "https://the645test.herokuapp.com";

export const getRounds = (page) => {
    let url = proxy_url + host + "/api/crunchbase_investments?page=" + page.toString();
    return fetch(url, {method: 'GET'})
        .then(response => {
            console.log(response);
            return response.json()
        })
        .catch(err => console.log(err));
};