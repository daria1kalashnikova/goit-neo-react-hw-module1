import style from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClassName = isOnline ? style.online : style.offline;
  return (
    <div className={style.card}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={statusClassName}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
