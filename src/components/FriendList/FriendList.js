import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <span className={`${css.status} ${friend.isOnline ? css.online : css.offline}`} />
          <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
          <p className={css.name} >{friend.name}</p>
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