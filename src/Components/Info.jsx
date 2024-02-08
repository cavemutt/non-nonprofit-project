import Footer from './Footer'


export default function Info() {
    return (
        <div className="info-main">
            <main>
                <div className="info-gradient">
                    <div>
                        <h1>How It Works...</h1>
                        <p>It is a great thing to want to help those in need, human or otherwise. But, it takes a bit of knowledge, work, and money to become an official 501c3 nonprofit organization.</p>
                        <p>The mission of the Non-NonProfit Project is to connect people who are trying to help others with people who want to help them, regardless of their non-profit status...people like you!</p>
                        <p>Head over to the <span>Help Out Now!</span> page to view organizations looking for help, and you can follow links to their website or social media, donation or shopping/wish list pages to help them out!</p>
                    </div>
                    <h2>Your help will join with others and together we will make a greater impact!</h2>
                </div>
            </main>
            <Footer photoCredit='Kym Ellis' />
        </div>
    )
}