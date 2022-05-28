export const option1 = {
    method: 'GET',
    url: 'https://linkedin-companies-data.p.rapidapi.com/',
    params: {vanity_name: 'bank-of-america'},
    headers: {
        'X-RapidAPI-Host': 'linkedin-companies-data.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_LINKEDIN_API_KEY
    }
};

export const option2 = {
    method: 'GET',
    url: 'https://linkedin-companies-data.p.rapidapi.com/',
    params: {vanity_name: 'standardchartered'},
    headers: {
        'X-RapidAPI-Host': 'linkedin-companies-data.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_LINKEDIN_API_KEY
    }
};

export const option3 = {
    method: 'GET',
    url: 'https://linkedin-companies-data.p.rapidapi.com/',
    params: {vanity_name: 'santander-uk'},
    headers: {
        'X-RapidAPI-Host': 'linkedin-companies-data.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_LINKEDIN_API_KEY
    }
};;

