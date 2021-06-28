import PropTypes from 'prop-types';
import { Statistic } from "./Statistic/Statistic"
import css from "./Statistics.module.css"

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
    { title && <h2 className={css.title}>Upload stats</h2>}
        < ul className = {css.statList}>
   {stats.map(stat => (
                <Statistic
                    key={stat.id}
                    label={stat.label}
                    percentage={stat.percentage}
                />
            ))
            }
  </ul>
</section>
         
    )
    
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
}