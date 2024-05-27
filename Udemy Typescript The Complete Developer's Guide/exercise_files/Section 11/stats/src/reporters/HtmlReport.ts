import fs from 'fs';

import { html } from 'code-tag';

import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
	print(report: string): void {
		const template = html`
			<div>
				<h1>Analysis Report</h1>
				<div>${report}</div>
			</div>
		`;

		fs.writeFileSync('report.html', template);
	}
}
