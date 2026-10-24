import SectionTemplate from '@/components/SectionTemplate';
import { photographer } from '@/content/photographer';

export default function AboutPhotographerPage() {
  return (
    <SectionTemplate
      group="about"
      title="Հեղինակի մասին"
      caption={`${photographer.name}՝ ${photographer.roles.toLowerCase()}`}
      wide
    >
      <div className="profile-grid">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="profile-photo" src="/ZR.jpg" alt={photographer.name} />

        <div className="profile-bio">
          <p className="profile-quote">{photographer.archiveNote}</p>
          {photographer.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="profile-stats">
        {photographer.stats.map((s) => (
          <div key={s.label}>
            <div className="profile-stat-value">{s.value}</div>
            <div className="profile-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </SectionTemplate>
  );
}
