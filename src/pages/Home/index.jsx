import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import Card from '../../components/Card'

import './style.css'

const Home = () => {
  const [user, setUser] = useState('');
  const [listUser, setListUser] = useState();

  const handleSearch = async() =>{
    await axios
      .get(`https://api.github.com/users/${user}`)
      .then(response => {
        console.log(response)
        setListUser(response.data)
      })
      .catch((err) => console.log(err))
  };


  return (
    <>
      <div className='title'>
        <h1>Repositórios do GitHub</h1>
      </div>

      <div className='search'>
        <input
          type="text"
          placeholder='Digite aqui' 
          onChange={(e) => setUser(e.target.value)} 
        />
        <button onClick={() => handleSearch()}>
          Pesquisar
        </button>
      </div>

      <div>
        {listUser && (
          <Card 
            image={listUser.avatar_url} 
            username={listUser.login}
            bio={listUser.bio}
            route={`/profile/${listUser.login}`}
          />
        )}
        
      </div>
    </>
  )
}

export default Home;