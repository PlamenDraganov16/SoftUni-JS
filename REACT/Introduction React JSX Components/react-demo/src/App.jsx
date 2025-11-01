import './App.css'
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx'

function App() {
  const articles = [
    { title: 'first article', content: 'content 1' },
    { title: 'second article', content: 'content 2' },
    { title: 'third article', content: 'content 3' },

  ]

  return (
    <main>
      <Header />

      <Body articles={articles}/>

      <Footer />
    </main>
  );
}

export default App
