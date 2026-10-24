import NavBar from '@/components/NavBar';

type SectionTemplateProps = {
  group: string;
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
          <div className="eyebrow">{group}</div>
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
