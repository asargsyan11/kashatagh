import SectionTemplate from '@/components/SectionTemplate';

const orgs = [
  { name: 'Կազմակերպության անուն', desc: 'Համառոտ նկարագրություն այստեղ:', link: 'website.am' },
  { name: 'Կազմակերպության անուն', desc: 'Համառոտ նկարագրություն այստեղ:', link: 'website.am' },
  { name: 'Կազմակերպության անուն', desc: 'Համառոտ նկարագրություն այստեղ:', link: 'website.am' },
  { name: 'Կազմակերպության անուն', desc: 'Համառոտ նկարագրություն այստեղ:', link: 'website.am' },
];

export default function SupportingOrgsPage() {
  return (
    <SectionTemplate group="about" title="Աջակից հասարակական կազմակերպություններ" caption="Ովքեր են աջակցում մեզ" wide>
      <div className="org-grid">
        {orgs.map((org, i) => (
          <div className="org-card" key={i}>
            <div className="org-logo" />
            <div className="org-info">
              <div className="org-name">{org.name}</div>
              <p className="org-desc">{org.desc}</p>
              <a href="#" className="org-link">{org.link} →</a>
            </div>
          </div>
        ))}
      </div>
    </SectionTemplate>
  );
}
