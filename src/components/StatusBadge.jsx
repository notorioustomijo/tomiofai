import styles from '../styles/StatusBadge.module.css';

export default function StatusBadge({ status }) {
    const statusConfig = {
        'LIVE': {
            color: 'live',
            label: 'Live'
        },
        'BUILD': {
            color: 'build',
            label: 'Build'
        },
        'PROTOTYPE': {
            color: 'build',
            label: 'Build'
        }
    }

    const config = statusConfig[status];

    return (
        <div
            className={`${styles.badge} ${styles[config.color]}`}
            role="status"
            aria-label={`Project status: ${config.label}`}
        >
            <span>{status}</span>
        </div>
    )
}