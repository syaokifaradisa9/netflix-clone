import Jumbotron from "../../components/Jumbotron"
import DefaultLayout from "../../components/Layouts/DefaultLayout"
import SectionEnjoy from "../../components/Modules/SectionContent/SectionEnjoy"

function Landing() {
    return (
        <DefaultLayout>
            <Jumbotron />
            <SectionEnjoy />
        </DefaultLayout>
    )
}

export default Landing