import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export default function KnowledgeOpsCopilot({ content }) {
  return (
    <div className="bg-blue-50 min-h-screen text-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-mosaics-dark">KnowledgeOps Copilot</h1>

        <div className="mb-12">
          <iframe
            src="https://copilot.mosaics-ai.com"
            width="100%"
            height="600px"
            className="rounded-xl border shadow-md"
          ></iframe>
        </div>

        <article className="prose prose-lg max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'knowledgeops-copilot.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContent);

  return {
    props: {
      content,
    },
  };
}
