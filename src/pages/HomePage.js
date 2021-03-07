import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const steps = [
  { image: '/images/steps/design.png', title: 'Design your web'},
  { image: '/images/steps/develop.png', title: 'Develop your web'},
  { image: '/images/steps/product.png', title: 'Enjoy your web'},
];

const tools = ["figma", "ai", "vscode", "react", "vue", "bootstrap"]

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <section className="home-section-header">
                <div className="home-section-header-left">
                    <div>
                        <h1 className="title-name">Hi I'M FaQiH </h1>
                        <div className="title-position">I am Web Designer</div>
                        <p>
                            Saya Faqih Pratama Muhti,
                            dari Universitas Buana Perjuangan Karawang
                        </p>
                    </div>
                </div>
                <div className="home-section-header-right">
                    <img className="avatar-banner" src="/images/avatar-banner.png" alt="avatar" />
                </div>
            </section>
            <section className="home-section-second">
                <h2 className="home-sub-title">What i do</h2>
                <div className="wrapper-steps">
                    {
                        steps.map((step, key) => (
                            <div className="item-step" key={key}>
                                <div className="bg-img-step">
                                    <img className="img-step" src={step.image} alt={step.title} />
                                </div>
                                <div className="item-step-title">{step.title}</div>
                            </div>
                        )
                        )
                    }
                </div>
                <p>
                    Nama Saya Faqih Pratama Muhti,
                    Dari Universitas Buana Perjuangan Karawang.
                </p>
            </section>
            <section className="home-section-third">
                <h2 className="home-sub-title">Portfolio</h2>
                <div className="wrapper-covers">
                {
                    [...Array(6)].map((_,key) => (
                    <img className="img-cover" src={`/images/portfolio/cover-${key+1}.png`} alt={`cover-${key+1}`} key={key} />
                    ))
                }
                </div>
            </section>
            <section className="home-section-fourth">
                <h2 className="home-sub-title">My Tools</h2>
                <div className="wrapper-tools">
                {
                    tools.map((tool, key) => (
                    <img className="img-tool" src={`/images/tools/${tool}.png`} alt={tool} key={key} />
                    ))
                }
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default HomePage;