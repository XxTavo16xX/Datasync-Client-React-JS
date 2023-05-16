
// * Styles required

import './index.css'

// * Component Exported

export const UserProfilePictureButtons = ({ imagesrc, imagetitle }) => {

    return (

        <div className="Circular-Image-Button-Container" title={imagetitle}>

            <img src={imagesrc} alt="Datasync by Web Design Nodes" className="Circular-Image-Button-Containe-Image" />

        </div>

    )

}