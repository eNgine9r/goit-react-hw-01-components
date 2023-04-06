import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={`${css.status} ${isOnline ? css.online : css.offline}`} />
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name} >{name}</p>
    </>
  )
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};