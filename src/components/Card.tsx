import {Quote} from '../types';

export default function Card({data}: {data: Quote}) {
  return (
    <article className="card-container">
      <p className="quote">{data.quoteText}</p>
    </article>
  );
}
