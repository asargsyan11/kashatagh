import SectionTemplate from '@/components/SectionTemplate';

export default function HistoryPage() {
  return (
    <SectionTemplate group="Պատմություն" title="Պատմություն" caption="Համառոտ նկարագրություն">
      <div className="article-body">
        <p className="article-lead">
          [Ներածական պարբերություն՝ տարածաշրջանի պատմության մասին կավելացվի ստեղ:]
        </p>

        <p>[Պարբերություն վաղ պատմության մասին:]</p>

        <figure className="article-figure">
          <img src="/history.jpg" alt="Պատմություն" />
          <figcaption className="figure-caption">[Լուսանկարի ենթագիր և տարեթիվ]</figcaption>
        </figure>

        <p>[INFO INFO INFO]</p>

        <p className="pull">[Մեջբերում:]</p>

        <p>[Եզրափակիչ պարբերություն]</p>
      </div>
    </SectionTemplate>
  );
}
