const host = "https://test645.herokuapp.com";

export const getRounds = (page) => {
    let url = host + "/api/crunchbase_investments?page=" + page.toString();
    return fetch(url, {method: 'GET'})
        .then(response => {
            console.log(response);
            return response.json()
        })
        .catch(err => console.log(err));
};
