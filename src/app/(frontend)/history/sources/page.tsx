import Link from 'next/link';

import ArticleBody from '@/components/ArticleBody';
import SectionTemplate from '@/components/SectionTemplate';
import { historicalSourcesBlocks, historicalSourcesTitle } from '@/content/historicalSources';

export default function HistoricalSourcesPage() {
  return (
    <SectionTemplate
      group="history"
      title={historicalSourcesTitle}
      caption="Անանիա Շիրակացուց մինչև 20-րդ դարի մամուլ"
    >
      <ArticleBody blocks={historicalSourcesBlocks} />

      <Link href="/history" className="article-next">
        <span className="article-next-label">Կարդալ նաև</span>
        <span className="article-next-title">Պատմական ակնարկ</span>
      </Link>
    </SectionTemplate>
  );
}
