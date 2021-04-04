const host = "https://test645.herokuapp.com";

export const getInvestorsByRaise = (round_type) => {
    let url = host + "/api/custom_vcs?round_type=" + round_type;
    return fetch(url, {method: 'GET'})
        .then(response => {
            console.log(response);
            return response.json()
        })
        .catch(err => console.log(err));
};
