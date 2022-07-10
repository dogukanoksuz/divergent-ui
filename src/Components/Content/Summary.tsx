import * as React from 'react';

export interface ISummaryProps {
    article: ISummary
}

export interface ISummary {
    image: string,
    title: string,
    url: string,
    summary: string,
    date: string,
    author: string
}

export default function Summary(props: ISummaryProps) {
    return (
        <article className="flex flex-wrap md:flex-row sm:flex-col md:mb-20">
            <div className="article-image md:w-5/12 rounded-md ">
                <a href={props.article.url}>
                    <img
                        src={props.article.image}
                        alt={props.article.title}
                        className="rounded-md shadow-xl w-100 h-auto"
                    />
                </a>
            </div>
            <div className="article-excerpt md:w-7/12 md:pl-20 flex justify-center flex-col py-10 md:py-0">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-gray-500">
                    <a
                        href={props.article.url}
                        className="block"
                    >
                        {props.article.title}
                    </a>
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                    {props.article.summary}
                </p>
                <div className="mt-2 text-gray-400 text-sm dark:text-gray-600">
                    <span>
                        {props.article.date}
                    </span>
                    &nbsp; · &nbsp;
                    <span>
                        {props.article.author}
                    </span>
                </div>
            </div>
        </article>
    );
}
