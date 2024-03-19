import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

function HomePage() {
    return (
        <div className='homePage'>
            <div className="text-container">
                <div className="wrapper">
                    <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
                        commodi reiciendis perspiciatis expedita, officiis eaque minus
                        tempora corrupti eum doloremque laboriosam cum nobis repudiandae
                        quia eius explicabo hic assumenda facere.
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>19+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1900+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-container">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage