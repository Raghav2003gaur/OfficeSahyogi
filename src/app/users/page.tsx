import React from 'react'
import SingleUserPage from "./[username]/page";
interface UserPageProps {
  params: {
    username: string;
  };
}

const UsersPage = ({ params }: UserPageProps) => {
  return (
    <div> <SingleUserPage username={params.username} /></div>
  )
}

export default UsersPage;