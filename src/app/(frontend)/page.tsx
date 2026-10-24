import NavBar from '@/components/NavBar';

export default function HomePage() {
  return (
    <>
      <NavBar />

      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">1990 — 2026</div>
          <h1>Հայոց Քաշաթաղ</h1>
          <a href="#" className="cta">
            Մուտք գործել արխիվ
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </section>

      <section className="about">
        <div>
          <p>
            Այս արխիվի յուրաքանչյուր լուսանկար արվել է Քաշաթաղում, մեծ մասամբ մեկ լուսանկարչի
            կողմից, ով ապրել է այնտեղ 1990-ականների սկզբից՝ առաջին պատերազմի, դրան հաջորդած
            խաղաղ տարիների և 2020 թվականի ու հետագա իրադարձությունների միջով:
          </p>
          <p>
            Այն, ինչ սկսվել է որպես անձնական վավերագրություն, այստեղ համակարգվում է որպես
            հարթակ, որը այցելուները կարող են ուսումնասիրել՝ ըստ տարեթվերի, վայրերի և թեմաների:
          </p>
        </div>
        <p className="pull">
          Այստեղ պատկերված որոշ կոթողներ այլևս կանգուն չեն: Հենց դա է պատճառը, որ դրանք
          պահպանված են այստեղ:
        </p>
      </section>

      <div className="area-map">
        <div className="area-map-placeholder">
          <span>— տարածքի քարտեզի նկարը այստեղ —</span>
        </div>
      </div>

      <footer>
        <span>Հայոց Քաշաթաղ</span>
      </footer>
    </>
  );
}
