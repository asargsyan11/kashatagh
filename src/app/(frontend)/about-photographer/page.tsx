import SectionTemplate from '@/components/SectionTemplate';

export default function AboutPhotographerPage() {
  return (
    <SectionTemplate group="about" title="Հեղինակի մասին" caption="Լուսանկարիչը այս արխիվի հետևում" wide>
      <div className="profile-grid">
        <img className="profile-photo" src="/ZR.jpg" alt="Հեղինակի լուսանկարը" />

        <div className="profile-bio">
          <p>
            [Կենսագրությունը կավելացվի այստեղ: Լուսանկարիչն ապրում է Քաշաթաղում 1990-ականների
            սկզբից՝ փաստագրելով տարածաշրջանի պատերազմները, առօրյա կյանքը և հուշարձանները:]
          </p>

          <p className="profile-quote">
            [Մեջբերում հեղինակից՝ կավելացվի այստեղ:]
          </p>

          <p>
            [Լրացուցիչ կենսագրական տեղեկություն, կրթություն, աշխատանքային ուղի, ցուցահանդեսներ
            կամ հրապարակումներ, եթե կան:]
          </p>
        </div>
      </div>

      <div className="profile-stats">
        <div>
          <div className="profile-stat-value">XX+</div>
          <div className="profile-stat-label">տարի արխիվում</div>
        </div>
        <div>
          <div className="profile-stat-value">XXXX+</div>
          <div className="profile-stat-label">լուսանկար</div>
        </div>
        <div>
          <div className="profile-stat-value">X</div>
          <div className="profile-stat-label">պատերազմ վավերագրված</div>
        </div>
      </div>
    </SectionTemplate>
  );
}
