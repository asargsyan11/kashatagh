import AreaList from '@/components/AreaList';
import ArticleBody from '@/components/ArticleBody';
import SectionTemplate from '@/components/SectionTemplate';
import { geographyBlocks } from '@/content/geography';

const facts = [
  { value: '3377 կմ²', label: 'մակերես' },
  { value: '2220 մ', label: 'Հոչանցասար՝ ամենաբարձր գագաթը' },
  { value: '100+', label: 'բնակավայր՝ 54 համայնքում (2020)' },
  { value: '11 000+', label: 'բնակիչ (2015)' },
];

export default function GeographyPage() {
  return (
    <SectionTemplate group="history" title="Աշխարհագրական դիրք" caption="Գետեր, լեռներ, բնակավայրեր">
      <dl className="fact-strip">
        {facts.map((f) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
      <ArticleBody blocks={geographyBlocks} />
      <AreaList />
    </SectionTemplate>
  );
}
