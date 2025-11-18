import { Routes, Route, Link, NavLink, } from 'react-router'
import './App.css'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import NotFound from './components/NotFound.jsx'
import City from './components/City.jsx'
import Redirect from './components/Redirect.jsx'
import Dashboard from './components/Dashboard.jsx'
import AdminUsers from './components/AdminUsers.jsx'
import AdminPosts from './components/AdminPosts.jsx'
import Admin from './components/Admin.jsx'
import Layout from './components/Layout.jsx'
import RouteGuard from './components/RouteGuard.jsx'
import Profile from './components/Profile.jsx'
import { useState } from 'react'
import CodeSplitting from './components/CodeSplitting.jsx'
import Characters from './components/Characters.jsx'

function App() {

    const [user, setUser] = useState({
        username: 'Pesho',
        role: 'admin',
    });

    return (
        <>
            <h1>React Router</h1>

            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/cities/pleven'>City</Link>
                <Link to='/admin'>Admin</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/code-splitting'>Code Splitting</Link>
                <Link to='/star-wars'>Star Wars</Link>
            </nav>

            {/* <nav>
                <NavLink style={({isActive}) => isActive ? {textDecoration: 'underline'} : {}} to='/'>Home</NavLink>
                <NavLink style={({isActive}) => isActive ? {textDecoration: 'underline'} : {}} to='/about'>About</NavLink>
                <NavLink style={({isActive}) => isActive ? {textDecoration: 'underline'} : {}} to='/cities/pleven'>City</NavLink>
            </nav> */}

            {/* <nav>
                <NavLink className={({ isActive }) => isActive ? styles['selected-link'] : ''} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles['selected-link'] : ''} to='/about'>About</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles['selected-link'] : ''} to='/cities/pleven'>City</NavLink>
            </nav> */}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/cities/:city?' element={<City />} />
                <Route path='/redirect' element={<Redirect />} />
                <Route path='/code-splitting' element={<CodeSplitting />} />
                <Route path='/star-wars' element={<Characters />} />

                <Route path='*' element={<NotFound />} />

                <Route element={<Layout />}>
                    <Route path='/layout-demo' element={<h3>Inside Layout</h3>} />
                </Route>

                <Route element={<RouteGuard user={user} />}>
                    <Route path='/profile' element={<Profile user={user} />} />
                    <Route path='/admin' element={<Admin />}>
                        <Route index element={<Dashboard />} /> {/* USE INDEX TO BE MAIN PAGE OF ADMIN */}
                        <Route path='users' element={<AdminUsers />} />
                        <Route path='posts' element={<AdminPosts />} />
                    </Route>
                </Route>

            </Routes>
        </>
    )
}

export default App
