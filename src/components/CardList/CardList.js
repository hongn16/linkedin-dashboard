import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CardList.css';
import { AiOutlineSearch } from 'react-icons/ai';

const CardList = () => {
    const [addCard, setAddCard] = useState([]);
    const [toggleSearch, setToggleSearch] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([]);
    const [params, setParams] = useState('');

    useEffect(() => {
      try {
        axios.request(
        {
            method: 'GET',
            url: 'https://linkedin-companies-data.p.rapidapi.com/',
            params: {vanity_name: params},
            headers: {
              'X-RapidAPI-Host': 'linkedin-companies-data.p.rapidapi.com',
              'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_LINKEDIN_API_KEY
            }
        }
        ).then(function (response) {
          setData(response.data);
        })
      } catch (error) {
        console.log(error);
      }
    }, [params]);

    const handleSearchTerm = (event) => {
        const input = event.target.value;
        setSearchTerm(input);
    };

    const handleAddCard = () => {
        if (searchTerm === '' || searchTerm === null) {
            return;
        }
        let cardItem = {
            id: data.profile_id,
            name: data.company_name,
            image: data.image_url,
            industry: data.industry,
            followers: data.social_followers,
        };
        setParams(searchTerm);
        if (data.company_name.toLowerCase() === searchTerm.toLowerCase()) {
            setAddCard(card => [...card, cardItem]);
            setSearchTerm('');
            setToggleSearch(true);
        }
    };

    return (
        <>
        <div className="header">
            My Dashboard
        </div>
        <ul className="card-container">
            {addCard.map(({id, name, image, industry, followers}) => (
                <li key={id} className="card-item">
                    <img className="card-image" src={image} alt="" />
                    <h2>{name}</h2>
                    <p>{industry}</p>
                    <p>Followers: {followers === null ? "N/A" : `${followers}`}</p>
                </li>
            ))}
            {toggleSearch && 
                <li>
                    <button 
                    className="card-button"
                    onClick={() => setToggleSearch(false)}
                    >
                        +
                    </button>
                    <p className="card-info">Add Company</p>
                </li>}
            {!toggleSearch && 
                <li>
                    <input 
                        className="search"
                        placeholder="Search company..."
                        value={searchTerm}
                        onChange={handleSearchTerm}
                    />
                    <button 
                    className="search-button"
                    type="submit"
                    onClick={(searchTerm) => handleAddCard(searchTerm)}
                    >
                        <AiOutlineSearch />
                    </button>
            </li>}
        </ul>
    </>
    )
}

export default CardList;