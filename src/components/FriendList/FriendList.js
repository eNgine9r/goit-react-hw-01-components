import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul class={css.friendList}>
      {friends.map(friend => (
        <li class="item">
          <span class="status" key={friend.id}>{friend.isOnline}</span>
          <img class="avatar" key={friend.id} src={friend.avatar} alt="User avatar" width="48" />
          <p class="name" key={friend.id}>{friend.name}</p>
        </li>
          ))}
    </ul>
  )
}

FriendList.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};