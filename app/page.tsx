import { formatBuildInfo, greet, pipelineStatus } from '@/lib/greeting';
import styles from './page.module.css';

const version = process.env.NEXT_PUBLIC_APP_VERSION ?? '0.1.0';
const sha = process.env.NEXT_PUBLIC_GIT_SHA ?? 'local';

export default function Home() {
	const status = pipelineStatus(true);

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<p className={styles.eyebrow}>GitHub Actions workshop</p>
				<h1 className={styles.title}>{greet('Craftware')}</h1>
				<p className={styles.lead}>If you can read this on GitHub Pages, the pipeline went from push to deploy.</p>

				<dl className={styles.meta}>
					<div>
						<dt>Build</dt>
						<dd>{formatBuildInfo(version, sha)}</dd>
					</div>
					<div>
						<dt>Pipeline</dt>
						<dd>
							<span className={status === 'green' ? styles.statusGreen : styles.statusRed}>{status}</span>
						</dd>
					</div>
				</dl>
			</main>
		</div>
	);
}
