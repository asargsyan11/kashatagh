// The five areas of Kashatagh, ordered north to south, divided by river basin.
// Shared by the geography page and (next) the map: each `id` will match a
// polygon on the map and can be used to tag photos and monuments by area.
// Descriptions and places are taken only from the author's texts
// (Աշխարհագրություն.docx, հիշատակումներ_պատմական_աղբյուրներում.docx).

export type Area = {
  id: 'shalua' | 'hochants' | 'aghavno' | 'hakari-vorotan' | 'voghji-tsav'
  name: string
  rivers: string
  description: string
  places: string[]
}

export const areas: Area[] = [
  {
    id: 'shalua',
    name: 'Շալուա',
    rivers: 'Շալուա գետի ավազան',
    description:
      'Հակարիի վերին հոսանքի արևելյան վտակ Շալուայի ավազանը՝ շրջանի լեռնային, անտառապատ հյուսիսում։ Գետի աջափնյա լանջերում մինչև 1918 թվականը գոյատևում էր հայկական Ալիղուլիաշեն գյուղը։',
    places: ['Ղազարապատ (Ալիղուլիաշեն)'],
  },
  {
    id: 'hochants',
    name: 'Հոչանց',
    rivers: 'Հոչանց գետի ավազան',
    description:
      'Հակարիի վերին հոսանքի Հոչանց վտակի ավազանը։ Հոչանց գյուղի մոտ 17-րդ դարի սկզբին հիմնված անապատը հայտնաբերվեց տարածքի ազատագրումից հետո։',
    places: ['Հոչանց'],
  },
  {
    id: 'aghavno',
    name: 'Աղավնո',
    rivers: 'Աղավնո (Արքուգետ, Զաբուղ) գետի ավազան',
    description:
      'Հակարիի վերին հոսանքի Աղավնո վտակի ավազանը։ Գետի ձախ ափին են Ծիծեռնավանքը և Մելիք-Հայկազյանների ապարանքով Մելիքաշենը, վերին հոսանքում՝ Հակ պատմական գյուղը։',
    places: ['Ծիծեռնավանք', 'Մելիքաշեն', 'Հակ (Մինքյանդ)'],
  },
  {
    id: 'hakari-vorotan',
    name: 'Հակարի-Որոտան',
    rivers: 'Հակարիի և Որոտանի միջին ու ստորին հոսանքներ',
    description:
      'Հակարիի և նրա աջակողմյան վտակ Որոտանի միջին ու ստորին հոսանքները՝ շրջանի նախալեռնային հարավը, որտեղ բարձրությունների տարբերությունը համեմատաբար փոքր է։',
    places: ['Որոտան (Կուբաթլու)'],
  },
  {
    id: 'voghji-tsav',
    name: 'Ողջի-Ծավ',
    rivers: 'Ողջի և Ծավ գետերի միջին ու ստորին ավազաններ',
    description:
      'Ողջի և Ծավ գետերի ավազանները Արաքսի ձախափնյա հարթ գոտում, որոնք հիմնականում համապատասխանում են պատմական Կովսական գավառին։ Ողջիի ձախափնյա ժայռի վրա պահպանվել են Գրհամ ամրոցի ավերակները։',
    places: ['Կովսական (Զանգելան)', 'Միջնավան (Մինջևան)', 'Գրհամ ամրոց', 'Կերեն', 'Բերքնի'],
  },
]
