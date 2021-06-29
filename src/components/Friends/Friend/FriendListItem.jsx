import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/fa';
import css from './FriendListItem.module.css'

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className={css.item}>
            <FaCircle className={`${css.icon} ${css[isOnline]}`} size="20"/>
            <img className={css.avatar} src={avatar} alt={name} size="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}