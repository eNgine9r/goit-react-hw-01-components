import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ stats }) => {
  return (
    <section class={css.statistics}>
      <h2 class="title">Upload stats</h2>
      <ul class="stat-list">
          {stats.map(stat => (
            <li class="item">
              <span class="label" key={stat.id}>{stat.label}</span>
              <span class="percentage" key={stat.id}>{stat.percentage}%</span>
            </li>
          ))}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};