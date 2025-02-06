function UserStatus({ loggedIn, isAdmin }) {
  return (
    <>{loggedIn && isAdmin ? <p>welcome admin</p> : <p>Welcome USer</p>}</>
  );
}

export default UserStatus;
 