import Link from 'next/link';

import ArticleBody, { ArticleToc } from '@/components/ArticleBody';
import SectionTemplate from '@/components/SectionTemplate';
import { historyBlocks } from '@/content/history';
import { historicalSourcesTitle } from '@/content/historicalSources';

export default function HistoryPage() {
  return (
    <SectionTemplate group="history" title="Պատմական ակնարկ" caption="Հնագույն շրջանից մինչև 2023 թվական">
      <ArticleToc blocks={historyBlocks} label="Ժամանակաշրջաններ" />
      <ArticleBody blocks={historyBlocks} />

      <Link href="/history/sources" className="article-next">
        <span className="article-next-label">Կարդալ նաև</span>
        <span className="article-next-title">{historicalSourcesTitle}</span>
      </Link>
    </SectionTemplate>
  );
}
