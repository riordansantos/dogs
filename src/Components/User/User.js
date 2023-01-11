import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Head from '../Helper/Head';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        {/*<Route path="/" element={<Feed user={data.id} />} />*/}
        <Route path="postar" element={<UserPhotoPost />} />
  
      </Routes>
    </section>
  );
};

export default User;
