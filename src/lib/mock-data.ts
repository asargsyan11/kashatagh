export type SectionEntry = {
  slug: string;
  group: string; // matches the nav grouping: history | monuments | people | media | about | store
  title: string;
  coverImage: string; // placeholder path — swap for real images later
  caption: string;
  body?: string; // leave unused if a section ends up being photos-only
};

export const sections: SectionEntry[] = [
  { slug: 'geography', group: 'history', title: 'Աշխարհագրական դիրք', coverImage: '/geo.jpg', caption: 'Գետեր, լեռներ, բնակավայրեր' },
  { slug: 'history', group: 'history', title: 'Պատմական ակնարկ', coverImage: '/history.jpg', caption: 'Հնագույն շրջանից մինչև 2023 թվական' },
  { slug: 'history/sources', group: 'history', title: 'Աղահեճք-Քաշաթաղի մասին հիշատակումները պատմական աղբյուրներում', coverImage: '/placeholder.jpg', caption: 'Անանիա Շիրակացուց մինչև 20-րդ դարի մամուլ' },
  { slug: 'liberation-movement', group: 'history', title: 'Արցախյան շարժում և ազատագրում', coverImage: '/placeholder.jpg', caption: 'Համառոտ նկարագրություն' },
  { slug: 'monuments', group: 'monuments', title: 'Հուշարձաններ', coverImage: '/placeholder.jpg', caption: 'Պատմահնագիտական և բնական' },
  { slug: 'resettlement', group: 'people', title: 'Վերաբնակեցում', coverImage: '/placeholder.jpg', caption: 'Պետական կառույցներ, կրթություն, առողջապահություն, մշակույթ, գյուղատնտեսություն, քաղաքաշինություն, առևտուր, հասարակական կազմակերպություններ' },
  { slug: 'kashatagh-people', group: 'people', title: 'Քաշաթաղցիները', coverImage: '/placeholder.jpg', caption: 'Ծագում, պատմվածքներ, հարցազրույցներ' },
  { slug: 'frontline', group: 'history', title: 'Առաջնագիծ', coverImage: '/placeholder.jpg', caption: '2014, 2016, 2020' },
  { slug: 'memorial', group: 'people', title: 'Հուշամատյան', coverImage: '/placeholder.jpg', caption: 'Զոհվածների մասին' },
  { slug: 'merani-newspaper', group: 'media', title: 'Մերանի պաշտոնաթերթ', coverImage: '/placeholder.jpg', caption: 'Պաշտոնական թերթ' },
  { slug: 'supporting-orgs', group: 'about', title: 'Աջակից հասարակական կազմակերպություններ', coverImage: '/placeholder.jpg', caption: 'Համառոտ նկարագրություն' },
  { slug: 'store', group: 'store', title: 'Խանութ', coverImage: '/placeholder.jpg', caption: 'Տպագրություններ և հրատարակություններ' },
  { slug: 'film', group: 'media', title: 'Ֆիլմ', coverImage: '/placeholder.jpg', caption: 'Համառոտ նկարագրություն' },
  { slug: 'support-us', group: 'about', title: 'Աջակցել մեզ', coverImage: '/placeholder.jpg', caption: 'Աջակցության եղանակներ' },
  { slug: 'team', group: 'about', title: 'Մեր թիմը', coverImage: '/placeholder.jpg', caption: 'Ովքեր ենք մենք' },
];
