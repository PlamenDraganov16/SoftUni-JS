import { Outlet } from "react-router";

export default function Layout() {
    return (
        <section style={{backgroundColor: 'blue'}}>
            <h2>Layout</h2>

            <Outlet />
        </section>
    )
}