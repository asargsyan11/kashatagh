import SectionTemplate from '@/components/SectionTemplate';

export default function GeographyPage() {
  return (
    <SectionTemplate group="Աշխարհագրություն" title="Աշխարհագրական դիրք" caption="Համառոտ նկարագրություն">
      <div className="article-body">
        <p className="article-lead">
          [Ներածական պարբերություն՝ տարածաշրջանի աշխարհագրական դիրքի մասին կավելացվի այստեղ:]
        </p>

        <p>[ՉԳԻՏԵՄ ԻՆՉ-ՈՐ ԲԱՆԵՐ ԿԳՐԵՆՔ ԷԼԻ]</p>
        <p>[ՍՏԵՂ ԷԼ ԴՐԱՆԻՑ]</p>

        <figure className="article-figure">
          <img src="/geo.jpg" alt="Աշխարհագրական դիրք" />
          <figcaption className="figure-caption">[Լուսանկարի ենթագիր և տարեթիվ]</figcaption>
        </figure>

        <p>[ՍՏԵՂ ԷԼ ԻՆՉ-ՈՐ ԲԱՆԵՐ ԼԱԼԱՅԻ ԼՈՒԼՈՒԻ]</p>
        <p>[Եզրափակիչ պարբերություն:]</p>
      </div>
    </SectionTemplate>
  );
}
