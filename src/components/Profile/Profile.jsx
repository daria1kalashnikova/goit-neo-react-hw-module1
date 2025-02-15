import style from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={style.card}>
      <div>
        <img src={image} alt="User avatar" className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.text}>@{tag}</p>
        <p className={style.text}>{location}</p>
      </div>

      <ul className={style["stats-list"]}>
        {Object.keys(stats).map((statName) => {
          return (
            <li key={statName} className={style["stats-item"]}>
              <span>{statName}</span>
              <span className={style["stats-value"]}>{stats[statName]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Profile;
