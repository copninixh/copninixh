import Headset from '../components/Headset'
import NavigationBar from '../components/Navigationbar'
import Footer from '../components/Footer'

export default function portfolioPage(){
    return(
        <>
            <div>
            <Headset/>
                <main className="bg-gradient" >
                    <NavigationBar/>

                    <div className="relative mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col h-screen justify-center">
                        
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}