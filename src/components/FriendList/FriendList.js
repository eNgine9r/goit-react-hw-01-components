import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <span className="status" >{friend.isOnline}</span>
          <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
          <p className="name" >{friend.name}</p>
        </li>
          ))}
    </ul>
  )
}

FriendList.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};