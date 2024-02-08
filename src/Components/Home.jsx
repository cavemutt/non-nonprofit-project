import Footer from "./Footer";


export default function Home() {
    return (
        <div className='home-page'>
            <main>
                <div className="home-gradient">
                    <h1>The <span>Non-NonProfit</span> Project</h1>
                    <h2>Help those<br /><span>Who Help Others</span></h2>
                    <p>A small amount can become a greater impact...</p>
                </div>
            </main>
            <Footer photoCredit='Matt Collamer' />
        </div>
    )
}