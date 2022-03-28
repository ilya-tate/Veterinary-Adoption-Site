import Navbar from "../Navbar"
import Foot from "../Foot"
import Head from "../Head"

// This is the layout that will be used most often
// It adds both a navbar and a footer to the page

const WithBoth = ({children, className}) => {
    return (
        // Class name is for styles
        <main className={className}>
            <Head />
            <Navbar />
            {children}
            <Foot />
        </main>
    )
}

export default WithBoth