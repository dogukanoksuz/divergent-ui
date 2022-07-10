import * as React from 'react';
import { ISummary } from '../Components/Content/Summary';
import SummaryList from '../Components/Content/SummaryList';
import Jumbotron from '../Components/Partials/Jumbotron';


export interface IIndexProps {
}

export interface IIndexState {
}

//export default class Index extends React.Component<IIndexProps, IIndexState> {
export default class Index extends React.Component {
    constructor(props: IIndexProps) {
        super(props);

        this.state = {
            //
        }
    }

    articles: ISummary[] = [{
        image: "/src/Assets/test-thumbnail.jpg",
        title: "Golang Fiber ile Integration Test Geliştirmek",
        url: "#",
        summary: "Bu makalemizde Golang üzerindeki Gofiber frameworkü üzerinde nasıl integration test geliştirebiliriz bu konu üzerine konuşacağız.Integration test nedir buna değinerek başlayabiliriz. Integration test nedir ? Integration test unitlerin birleştiğinde isten...",
        date: "20 Nisan 2022",
        author: "Doğukan Öksüz"
    }, {
        image: "/src/Assets/test-thumbnail.jpg",
        title: "Golang Fiber ile Integration Test Geliştirmek",
        url: "#",
        summary: "Bu makalemizde Golang üzerindeki Gofiber frameworkü üzerinde nasıl integration test geliştirebiliriz bu konu üzerine konuşacağız.Integration test nedir buna değinerek başlayabiliriz. Integration test nedir ? Integration test unitlerin birleştiğinde isten...",
        date: "20 Nisan 2022",
        author: "Doğukan Öksüz"
    }, {
        image: "/src/Assets/test-thumbnail.jpg",
        title: "Golang Fiber ile Integration Test Geliştirmek",
        url: "#",
        summary: "Bu makalemizde Golang üzerindeki Gofiber frameworkü üzerinde nasıl integration test geliştirebiliriz bu konu üzerine konuşacağız.Integration test nedir buna değinerek başlayabiliriz. Integration test nedir ? Integration test unitlerin birleştiğinde isten...",
        date: "20 Nisan 2022",
        author: "Doğukan Öksüz"
    }, {
        image: "/src/Assets/test-thumbnail.jpg",
        title: "Golang Fiber ile Integration Test Geliştirmek",
        url: "#",
        summary: "Bu makalemizde Golang üzerindeki Gofiber frameworkü üzerinde nasıl integration test geliştirebiliriz bu konu üzerine konuşacağız.Integration test nedir buna değinerek başlayabiliriz. Integration test nedir ? Integration test unitlerin birleştiğinde isten...",
        date: "20 Nisan 2022",
        author: "Doğukan Öksüz"
    }, {
        image: "/src/Assets/test-thumbnail.jpg",
        title: "Golang Fiber ile Integration Test Geliştirmek",
        url: "#",
        summary: "Bu makalemizde Golang üzerindeki Gofiber frameworkü üzerinde nasıl integration test geliştirebiliriz bu konu üzerine konuşacağız.Integration test nedir buna değinerek başlayabiliriz. Integration test nedir ? Integration test unitlerin birleştiğinde isten...",
        date: "20 Nisan 2022",
        author: "Doğukan Öksüz"
    }, {
        image: "/src/Assets/test-thumbnail.jpg",
        title: "Golang Fiber ile Integration Test Geliştirmek",
        url: "#",
        summary: "Bu makalemizde Golang üzerindeki Gofiber frameworkü üzerinde nasıl integration test geliştirebiliriz bu konu üzerine konuşacağız.Integration test nedir buna değinerek başlayabiliriz. Integration test nedir ? Integration test unitlerin birleştiğinde isten...",
        date: "20 Nisan 2022",
        author: "Doğukan Öksüz"
    }]

    public render() {
        return (
            <>
                <Jumbotron />
                <SummaryList articles={this.articles} />
            </>
        );
    }
}
