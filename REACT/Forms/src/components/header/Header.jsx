import { Link } from "react-router";

export default function Header() {
    return (
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-semibold">MyApp</div>

            <ul className="flex space-x-6 text-gray-700">
                <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
                <li><Link to="/uncontrolled-form" className="hover:text-blue-600">Uncontrolled Form</Link></li>
                <li><Link to="/controlled-form" className="hover:text-blue-600">Controlled Form</Link></li>
                <li><Link to="/unified-form" className="hover:text-blue-600">Unified Form</Link></li>
                <li><Link to="/ref" className="hover:text-blue-600">Ref</Link></li>
                <li><Link to="/validated-form" className="hover:text-blue-600">Validated Form</Link></li>

            </ul>
        </nav>
    );
}