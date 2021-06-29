import PropTypes from 'prop-types';
import { User } from "./User"
import css from './Profile.module.css'

export const Profile = ({ user })=> {
  return (
    <div className={css.profile}>
      <User
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />    
    </div>)
}

Profile.propTypes = {
  user:  PropTypes.object.isRequired
}