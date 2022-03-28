import Head from './Head'
import Navbar from './Navbar'

// This layout will be used second most often, besides WithBoth
// Adds a navbar doesn't add a footer

const WithNav = ({children, className}) => {
    return (
        <main className={className}>
            <Head />
            <Navbar />
            {children}
        </main>
    )
}

export default WithNav