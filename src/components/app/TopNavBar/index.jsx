
// * Dependencies Required

import { MdChevronRight } from 'react-icons/md'

// * Styles Required

import './index.css'

// * Assets Required

import logoURL from '/assets/icons/logo.svg'

// * Components Required

import { SelectBox } from '../../shared/SelectBox'
import { UserProfilePictureButtons } from '../../shared/Buttons/ImageButton'

// * Exported Component

const TopNavBar = ({ userWorkspaceNodeConnections, updateWorkspaceNodeState, AppViewLabel, userProfilePicURL, userDisplayName }) => {

    return (

        <div className="Top-Nav-Bar-Container">

            <div className="Top-Nav-Bar-Margin">

                <div className="Top-Nav-Bar-Company-Brand-Container">

                    <img className='Top-Nav-Bar-Logo' src={logoURL} />

                    <p className='TopNavBar-Brand-Name'>Datasync</p>

                </div>

                <div className="Top-Nav-Bar-Content-Container">

                    <div className="Top-Nav-Bar-Content-Margin">

                        <div className="Top-Nav-Bar-Connection-Info-Container">

                            <div className="Top-Nav-Bar-Select-Box-Container">

                                <SelectBox selectBoxStyle="Primary-SelectBox" selectBoxID="top_nav_bar_workspace_node_selector" defaultOption={0} selectListOptions={userWorkspaceNodeConnections} optionLabelReference="name" onOptionSelected={updateWorkspaceNodeState} />

                            </div>

                            <MdChevronRight size="35px" fill='#000d4143' />

                            <p className="Top-Nav-Bar-Content-Current-View-Label">{AppViewLabel}</p>

                        </div>

                        <div className="Top-Nav-Bar-User-Card">

                            <p className="Username-Label">{userDisplayName}</p>

                            <div className="User-Action-Profile-Pic-Container">

                                <UserProfilePictureButtons imagesrc={userProfilePicURL} imagetitle='User photo' />

                            </div>

                        </div>

                    </div>

                </div>

                <div className="Top-Nav-Bar-User-Action-Container">



                </div>

            </div>

        </div>

    )

}

export default TopNavBar