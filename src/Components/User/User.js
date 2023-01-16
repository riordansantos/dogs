import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Head from '../Helper/Head';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import Feed from '../Feed/Feed';
import NotFound from '../NotFound';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="*" element={<NotFound />} />
  
      </Routes>
    </section>
  );
};

export default User;
