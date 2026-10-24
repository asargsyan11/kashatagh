import SectionTemplate from '@/components/SectionTemplate';

const photos = [
  { caption: '[Ամսաթիվ / վայր]' },
  { caption: '[Ամսաթիվ / վայր]' },
  { caption: '[Ամսաթիվ / վայր]' },
  { caption: '[Ամսաթիվ / վայր]' },
  { caption: '[Ամսաթիվ / վայր]' },
  { caption: '[Ամսաթիվ / վայր]' },
];

export default function FrontlinePage() {
  return (
    <SectionTemplate group="history" title="Առաջնագիծ" caption="2014, 2016, 2020" wide>
      <div className="gallery-grid">
        {photos.map((photo, i) => (
          <div className="gallery-item" key={i}>
            <div className="gallery-photo" />
            <div className="gallery-caption">{photo.caption}</div>
          </div>
        ))}
      </div>
    </SectionTemplate>
  );
}
