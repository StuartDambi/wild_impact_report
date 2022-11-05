export default function CoffeeLots() {
    return (
        <section data-aos="fade-up" data-aos-delay="200">
            <div className="container">
                <h3 className="mb-4">Coffee Lot Details</h3>
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                <img src="https://via.placeholder.com/500x400" alt="cofffee_kishero" />
                            </div>
                            <div className="details col-md-6">
                                <h3 className="mt-4 text-dark">The Pearl</h3>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr></tr>
                                        </thead>
                                        <tbody>
                                            <tr itemScope="row">
                                                <td>
                                                    Farmer
                                                </td>
                                                <td>
                                                    Olive Kishero
                                                </td>
                                            </tr>
                                            <tr itemScope="row">
                                                <td>
                                                    Origin
                                                </td>
                                                <td>
                                                    Mt. Elgon, Uganda
                                                </td>
                                            </tr>
                                            <tr itemScope="row">
                                                <td>
                                                    Elevation
                                                </td>
                                                <td>
                                                    1900 masl
                                                </td>
                                            </tr>
                                            <tr itemScope="row">
                                                <td>
                                                    Tasting Notes
                                                </td>
                                                <td>
                                                    Blackcurrant, Grapes, Cloves, Vanilla, Cocoa
                                                </td>
                                            </tr>
                                            <tr itemScope="row">
                                                <td>
                                                    Roast Level (1 - 10 Scale)
                                                </td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{width: "10%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                                        <div className="progress-bar bg-success" role="progressbar" style={{width: "10%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">3</div>
                                                        <div className="progress-bar bg-success" role="progressbar" style={{width: "10%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        <div className="progress-bar bg-info" role="progressbar" style={{width: "10%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        <div className="progress-bar bg-info" role="progressbar" style={{width: "10%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        <div className="progress-bar bg-info" role="progressbar" style={{width: "10%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        <div className="progress-bar bg-info" role="progressbar" style={{width: "10%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        <div className="progress-bar bg-info" role="progressbar" style={{width: "10%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        <div className="progress-bar bg-info" role="progressbar" style={{width: "10%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        <div className="progress-bar bg-info" role="progressbar" style={{width: "10%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr itemScope="row">
                                                <td>
                                                    Coffee Variety
                                                </td>
                                                <td>
                                                    Arabica SL14
                                                </td>
                                            </tr>
                                            <tr itemScope="row">
                                                <td>
                                                    Coffee Process
                                                </td>
                                                <td>
                                                    Washed
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}