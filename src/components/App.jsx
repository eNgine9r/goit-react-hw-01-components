import Profile from "./Profile";
import user from '../user.json';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user[0].username}
        tag={user[0].tag}
        location={user[0].location}
        avatar={user[0].avatar}
        stats={user[0].stats}
      />
      
      <Profile
        username={user[1].username}
        tag={user[1].tag}
        location={user[1].location}
        avatar={user[1].avatar}
        stats={user[1].stats}
      />
    </div>
  );
};
