import '@styles/globals.css'

export const metadata = {
    title: "Promptopia",
    desc: "Discover & Share AI Prompts"
}

const RootLayout  = () => {
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
