export default function Farmer() {
    return (
        <section id="why-us" className="why-us">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Meet the Farmer</h2>
                </div>

                <div className="container-fluid">
                    <div className="wrapper row">
                        <div className="col-md-6 preview">
                            <img src="/olive-kishero.jpg" width={400} height={400} alt="olive_kishero_coffee_farmer" />
                            {/* <iframe width="450" height="400" src="https://www.youtube.com/embed/lIawi-bPUsk" title="Wild Coffee Farmer: Olive Kishero" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                        </div>
                        <div className="col-md-6 details">
                            <h3 className="mb-3">Olive Kishero - speciality coffee from Mt Elgon</h3>

                            <p >
                                It's the hardest work
                                Growing quality coffee is tough. It takes a special kind of farmer, with a unique perseverance, who never lets challenges and setbacks pull her down. One who year after year keeps improving, and never falls for temptations of doing shortcuts and pocket some quick money.

                                Olive Kishero is one of those rare ones.
                                </p>

                                <p style={{ fontStyle: "italic" }}>"Growing coffee involves a lot of commitment. It’s the hardest work. You have to use all your energy at every stage."</p>
                                <p>
                                But the hard work has paid off. Olive came second in the Ugandan Taste of Harvest competition in 2019. When it comes to specialty coffee from Mt Elgon, Olive certainly ranks among the best.

Olive has been in the coffee industry since 1989. Despite the challenges, she has been able to make sure all her seven children have received a higher education.

"Since my children were young I have trained them to handle the coffee growing. They used to call this mummy's things. "We are tired of mummy's things" they said."

Meet Olive and some of her children in our video portrait:
                                </p>
                                
                            
                            <a href="https://www.wild.coffee" target="_blank" rel="noreferrer" className="btn btn-dark">
                                <i className="fa fa-external-link"></i><span className="ml-2">Learn More</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}