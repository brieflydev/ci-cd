/** Pure helpers — easy to unit-test and intentionally break in the live demo. */

export function greet(name: string): string {
	const trimmed = name.trim();
	if (!trimmed) {
		return 'Hello, workshop!';
	}
	return `Hello, ${trimmed}!`;
}

export function pipelineStatus(passed: boolean): 'green' | 'red' {
	return passed ? 'green' : 'red';
}

export function formatBuildInfo(version: string, sha: string): string {
	const shortSha = sha.slice(0, 7) || 'local';
	return `v${version} · ${shortSha}`;
}
