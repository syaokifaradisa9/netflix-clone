import { useNavigate } from 'react-router-dom'
import OptionLanguage from "../../components/Modules/OptionLanguage";
import DefaultButton from "../../components/Modules/DefaultButton";

function Navbar() {
    const navigate = useNavigate();

    return (
        <header className='relative z-20'>
            <nav className="flex flex-wrap items-center justify-between py-4 pr-10 pl-7">
                <div>
                    <img
                        width={105}
                        height={45}
                        src="/netflix-logo.png" alt="" />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <OptionLanguage />
                    <DefaultButton
                        text={"Sign In"}
                        onClick={() => navigate("/login")} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;