
// * Dependencies Required

import { Player } from '@lottiefiles/react-lottie-player'

// * Styles Requred

import './index.css'

// * Exported View

const InDevelopmentView = () => {

    return (

        <div className="In-Development-View-Container">

            <div className="In-Development-Content-Container">

                <p className="In-Development-Title-Label">En desarrollo</p>
                <p className="In-Development-Subtitle-Label">Esta aplicacion sigue en desarrollo</p>

                <Player
                    autoplay={true}
                    loop={true}
                    controls={false}
                    src="/assets/animations/in_development.json"
                    style={{ height: '250px', width: '250px' }}
                ></Player>

            </div>

        </div>

    )

}

export default InDevelopmentView