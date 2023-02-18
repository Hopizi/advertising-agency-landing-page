import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data"

const cardElements = Data.map(data => {
    return <Card 
            key = {data.id}
            data = {data}
        />
})

function App() {
    return(
        <div>
            <Navbar />
            <Hero />
            <section className="class-list">
                {cardElements}
            </section>
            
        </div>
        
    )
}

export default App