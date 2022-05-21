import Header from '../componens/Header/Header';
import Footer from '../componens/Footer/index';


export default function Layout({children}) {
  return (
      <div className="layout">
            {/* <Header /> */}
            <Header />
            {/* <main /> */}
            <main>
                {children}
            </main>
            {/* <footer /> */}
            <Footer />
      </div>

  )
}

