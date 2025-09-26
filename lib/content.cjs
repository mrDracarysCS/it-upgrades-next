// lib/content.js
import fs from "fs";
import path from "path";
import { marked } from "marked";

const contentDir = path.join(process.cwd(), "content");

export function listSlugs() {
  const dir = path.join(contentDir, "pages");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPageContent(slug) {
  const file = path.join(contentDir, "pages", slug + ".md");
  if (!fs.existsSync(file)) return null;

  const md = fs.readFileSync(file, "utf8");
  const html = marked.parse(md);

  // first heading in markdown → page title
  const match = md.match(/^#\s+(.+)$/m);
  const title = match ? match[1] : slug;

  return { title, html };
}
