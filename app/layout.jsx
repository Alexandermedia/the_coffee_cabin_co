import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/provider";


export const metadata = {
    title: "The Coffee Cabin Co",
    description: "Mobile Coffee Trailer Located in Pensacola, Florida."
}

const RootLayout = ({ children }) => (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
  
          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );

export default RootLayout