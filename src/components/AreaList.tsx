import { areas } from '@/content/areas'

export default function AreaList() {
  return (
    <section className="area-list" aria-labelledby="areas-heading">
      <h2 className="article-heading" id="areas-heading">
        Տարածքները
      </h2>
      <p className="area-list-intro">
        Ըստ գետային ավազանների՝ շրջանը բաժանված է հինգ տարածքի՝ հյուսիսից հարավ։
      </p>
      <ol>
        {areas.map((a) => (
          <li key={a.id} id={a.id} className="area-row">
            <h3 className="area-name">{a.name}</h3>
            <div className="area-detail">
              <div className="area-rivers">{a.rivers}</div>
              <p>{a.description}</p>
              {a.places.length > 0 && (
                <p className="area-places">
                  <span>Վայրեր՝ </span>
                  {a.places.join(', ')}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
