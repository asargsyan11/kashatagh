import NavBar from '@/components/NavBar';

// Keys match the nav groups; labels are what visitors see in the eyebrow.
export const sectionGroups = {
  history: 'Պատմություն',
  monuments: 'Հուշարձաններ',
  liberation: 'Արցախյան շարժում',
  frontline: 'Առաջնագիծ',
  people: 'Ժողովուրդ',
  media: 'Մեդիա',
  about: 'Մեր մասին',
  store: 'Խանութ',
} as const;

export type SectionGroup = keyof typeof sectionGroups;

type SectionTemplateProps = {
  group: SectionGroup;
  title: string;
  caption: string;
  wide?: boolean;
  children: React.ReactNode;
};

export default function SectionTemplate({ group, title, caption, wide, children }: SectionTemplateProps) {
  return (
    <>
      <NavBar />

      <section className="section-hero">
        <div className="section-hero-inner">
          <div className="eyebrow">{sectionGroups[group]}</div>
          <h1>{title}</h1>
          <p className="section-caption">{caption}</p>
        </div>
      </section>

      <section className={`section-body${wide ? ' wide' : ''}`}>
        {children}
      </section>

      <footer>
        <span>Հայոց Քաշաթաղ</span>
      </footer>
    </>
  );
}
