import css from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => 
    <div className={css.profile}>
        <div className={css.description}>
            <img
                src={avatar}
                alt="User avatar"
            className={css.avatar}
            width="150"
            height="150"
            />
            <p className={css.name}>{name}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
        <ul className={css.stats}>
            <li className={css.item}>
                <p className={css.label}>Followers</p>
                <p className={css.quantity}>{stats.followers}</p>                
            </li>
            <li className={css.item}>
                <p className={css.label}>Views</p>
                <p className={css.quantity}>{stats.views}</p>
            </li>
            <li className={css.item}>
                <p className={css.label}>Likes</p>
                <p className={css.quantity}>{stats.likes}</p>
            </li>
        </ul>
    </div>

export default Profile