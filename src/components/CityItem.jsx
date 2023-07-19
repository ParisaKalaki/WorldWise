import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity } = useCities();
  const { cityName, date, id, position } = city;
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles.cityItem["cityItem--active"] : ""
        }`}
        to={`${id}?lst=
      ${position.lat}&lng=${position.lng}`}
      >
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
