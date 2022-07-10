import * as React from 'react';
import Summary, { ISummary } from './Summary';

export interface ISummaryListProps {
    articles: ISummary[]
}

export default function SummaryList(props: ISummaryListProps) {
    return (
        <section className="px-5 xl:px-0 w-full mx-auto max-w-6xl">
            {
                props.articles.map(function (article, index) {
                    return <Summary article={article} key={index} />
                })
            }
        </section>
    );
}
