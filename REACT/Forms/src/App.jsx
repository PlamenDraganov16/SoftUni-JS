import { Route, Routes } from "react-router"
import Header from "./components/header/Header.jsx"
import UncontrolledLogin from "./components/uncontroller-login/UncontrolledLogin.jsx"
import ControlledLogin from "./components/controlled-login/ControlledLogin.jsx"
import UnifiedLogin from "./components/unified-login/UnifiedLogin.jsx"
import Ref from "./components/ref/Ref.jsx"
import ValidatedForm from "./components/validated-form-demo/ValidatedForm.jsx"

function App() {

    return (
        <>
            <Header />

            <Routes>
                <Route path="/uncontrolled-form" element={<UncontrolledLogin />} />
                <Route path="/controlled-form" element={<ControlledLogin />} />
                <Route path="/unified-form" element={<UnifiedLogin />} />
                <Route path="/ref" element={<Ref />} />
                <Route path="/validated-form" element={<ValidatedForm />} />
            </Routes>


        </>
    )
}

export default App
