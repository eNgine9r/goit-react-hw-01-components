import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ stats }) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 3; i++) {
      color += letters[Math.floor(Math.random() * 10)];
    }
    return color;
  };

  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.statList}>
          {stats.map(stat => (
            <li className={css.statItem} key={stat.id} style={{ backgroundColor: getRandomColor()}}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          ))}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};





