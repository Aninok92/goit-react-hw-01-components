import PropTypes from 'prop-types';
import { FaAt } from "react-icons/fa"
import css from './User.module.css'

export const User = ({ name, tag, location, avatar, followers, views, likes }) => {
    return (
        <>
        <div className={css.description}>
          <img
              src={avatar}
              alt={name}
                    className={css.avatar}
                    width ="240"
            />
            <p className={css.name}>{name}</p>
            <p className={css.tag}><FaAt className={css.icon} size = "18"/>{ tag }</p>
            <p className={css.location}> {location}</p>
        </div>
        <ul className={css.stats}>
          <li>
            <span className={css.label}>Followers</span>
            <span className = {css.quantity}>{ followers}</span>
          </li>
          <li>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{views}</span>
          </li>
          <li>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{likes}</span>
          </li>
        </ul>
</>
    )
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
 likes: PropTypes.number.isRequired,
}