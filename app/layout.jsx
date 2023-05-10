import '@styles/globals.css'
import Nav from "@components/Nav"

export const metadata = {
    title: "Promptopia",
    desc: "Discover & Share AI Prompts"
}

const RootLayout  = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>

            <div className="app">
                {children}
            </div>
        </body>
    </html>
  )
}

export default RootLayout
