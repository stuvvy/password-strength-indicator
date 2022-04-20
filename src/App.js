import PasswordStrengthMeter from "./components/PasswordStrengthMeter";
import { useState } from "react";

function App() {

    const [ password, setPassword ] = useState('');

    return (
        <div className="container">
            <div className="col-md-6 mx-auto my-4 text-end">
                <h3 className="text-center mb-3">Password Strength Indicator</h3>
                <div className="form-group mb-1">
                    <input 
                        type="password" 
                        className="form-control shadow-none" 
                        placeholder="Enter Password" 
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <PasswordStrengthMeter password={password}/>
            </div>
        </div>
    );
}

export default App;