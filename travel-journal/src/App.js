import Header from "./components/Header";
import Country from "./components/Country";
import Data from "./Data";

const journals = Data.map(journal => {
    return( <Country
            journal = {journal}
        />
    )
})



export default function App() {
    return (
        <main className="main-site">
            <Header />
            {journals}
        </main>
    )
}
