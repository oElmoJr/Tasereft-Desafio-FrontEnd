import { Header } from "./components/Header/styles";
import { SearchButton } from "./components/SearchButton/SearchButton";
import { SearchInput } from "./components/SearchInput/SearchInput";
import SearchIcon from '@material-ui/icons/Search';
import User from "./components/User/User";
import { useState, useEffect } from "react";
import api from "./services/api";
import InitialMessage from "./components/InitialMessage/InitialMessage";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {

  const [searchValue , setSearchValue] = useState('');

  const [users , setUsers] = useState([])

  useEffect(() => {
    api.get('users').then(({data}) => {
      setUsers(data)
    });
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
     <>
      <Header>
        <h1>[Tasereft - Desafio 1]</h1>
        <div>
          <SearchInput  placeholder="Search" name='usuario' id='usuario' value={searchValue} onChange={e => setSearchValue(e.target.value)}  ></SearchInput>
          <SearchButton disabled={true} type='button'  ><SearchIcon/></SearchButton>
        </div>
      </Header>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '89%'}}>
        {searchValue === "" 
          ?  
          <InitialMessage />
          : 
            users.map((user) => (searchValue.toLowerCase() === user.username.toLowerCase() || searchValue === JSON.stringify(user.id) || searchValue.toLowerCase() === user.name.toLowerCase() ?
              
              <User 
                key={user.id}
                id={user.id}
                userName={user.username}
                name={user.name}
                company={user.company.name}
                phone={user.phone}
                email={user.email}
                street={user.address.street}
                suite={user.address.suite}
                city={user.address.city}
                zipcode={user.address.zipcode}
                website={user.website}
              /> 
              :  ''           
              ))
          }
          {!users.find( user => JSON.stringify(user.id) === searchValue || user.name.toLowerCase() === searchValue.toLowerCase() || user.username.toLowerCase() === searchValue.toLowerCase()) && searchValue !== '' 
            ? <ErrorMessage /> 
            : ''
          }
      </div>
     </>
  );
}

export default App;
