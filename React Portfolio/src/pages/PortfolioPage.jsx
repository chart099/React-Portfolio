export default function PortfolioPage() {
    return (
        <div style={{width: "150vh"}}>
            <h2>Portfolio</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="p-3 col">
                    <img src="/src/assets/gettyimages-535911393-612x612.jpg" alt="abstract color blobs" />
                </div>
                <div className=" p-3 col">
                    <img src="/src/assets/gettyimages-535911393-612x612.jpg" alt="" />
                </div>
                <div className=" p-3 col">
                    <img src="/src/assets/gettyimages-535911393-612x612.jpg" alt="" />
                </div>
                <div className=" p-3 col">
                    <img src="/src/assets/gettyimages-535911393-612x612.jpg" alt="" />
                </div>
                <div className="p-3 col">
                    <img src="/src/assets/gettyimages-535911393-612x612.jpg" alt="" />
                </div>
                <div className="p-3 col">
                    <img src="/src/assets/gettyimages-535911393-612x612.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}