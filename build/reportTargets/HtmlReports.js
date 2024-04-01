"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReports = void 0;
const fs_1 = __importDefault(require("fs"));
class HtmlReports {
    print(report) {
        const html = `
  <div>
  <h1>Analysis Output</h1>
  <p>${report}</p>
  </div>`;
        // passing the name we want to generate it as and the data (html string)
        fs_1.default.writeFileSync('report.html', html);
    }
}
exports.HtmlReports = HtmlReports;
