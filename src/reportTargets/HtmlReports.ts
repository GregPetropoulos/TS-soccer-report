import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlReports implements OutputTarget {
  print(report: string): void {
    const html = `
  <div>
  <h1>Analysis Output</h1>
  <p>${report}</p>
  </div>`;
    // passing the name we want to generate it as and the data (html string)
    fs.writeFileSync('report.html', html);
  }
}
