import SectionTemplate from '@/components/SectionTemplate';

const team = [
  { name: 'Անուն Ազգանուն', role: 'Հիմնադիր, լուսանկարիչ', bio: 'Համառոտ նկարագրություն այստեղ:', photo: '/ZR.jpg' },
  { name: 'Անուն Ազգանուն', role: 'Խմբագիր', bio: 'Համառոտ նկարագրություն այստեղ:', photo: '/team-2.jpg' },
  { name: 'Անուն Ազգանուն', role: 'Ծրագրավորող', bio: 'Համառոտ նկարագրություն այստեղ:', photo: '/team-3.jpg' },
  { name: 'Անուն Ազգանուն', role: 'Հետազոտող', bio: 'Համառոտ նկարագրություն այստեղ:', photo: '/team-4.jpg' },
];

export default function TeamPage() {
  return (
    <SectionTemplate group="about" title="Մեր թիմը" caption="Ովքեր ենք մենք" wide>
      <div className="team-grid">
        {team.map((member, i) => (
          <div className="team-card" key={i}>
            <img className="team-photo" src={member.photo} alt={member.name} />
            <div className="team-name">{member.name}</div>
            <div className="team-role">{member.role}</div>
            <p className="team-bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </SectionTemplate>
  );
}
