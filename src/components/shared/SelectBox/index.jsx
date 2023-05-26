
// * Dependencies Required

import { useState } from 'react'
import { MdExpandMore } from 'react-icons/md'

// * Styles Required

import './index.css'

export const SelectBox = ({ selectBoxStyle, selectBoxID, defaultOption, selectListOptions, optionLabelReference, onOptionSelected }) => {

    const [selectBoxList, setSelectBoxListState] = useState(false)

    const [selectList, setSelectList] = useState(selectListOptions.slice(0, defaultOption).concat(selectListOptions.slice(defaultOption + 1)))
    const [defaultOptionFromList, setDefaultOptionFromList] = useState(selectListOptions[defaultOption])

    const handleClickOutOfSelectBox = event => {

        if (event.target.id != selectBoxID + '_select_box_list_container') {

            document.getElementById(selectBoxID + '_select_box_list_container').style.height = '0px'
            document.getElementById(selectBoxID + '_select_box_list_container').style.boxShadow = 'none'
            document.removeEventListener("click", handleClickOutOfSelectBox);
            document.removeEventListener("contextmenu", handleClickOutOfSelectBox);
            return setSelectBoxListState(false)

        }

    }

    const expandSelectBoxList = () => {

        if (selectBoxList == false) {

            const listHeigth = selectList.length * 50

            const selectBoxWidth = document.getElementById(selectBoxID + '_parent_element').offsetWidth

            document.getElementById(selectBoxID + '_select_box_list_container').style.width = selectBoxWidth + 'px'
            document.getElementById(selectBoxID + '_select_box_list_container').style.position = 'absolute'
            document.getElementById(selectBoxID + '_select_box_list_container').style.transition = '.2s'

            document.getElementById(selectBoxID + '_select_box_list_container').style.height = listHeigth + 'px'
            document.getElementById(selectBoxID + '_select_box_list_container').style.boxShadow = '0px 0px 0px 1px #000d4147,0px 21px 22px 0px rgba(0,0,0,0.1)'

            setSelectBoxListState(true)

            return setTimeout(() => {

                document.addEventListener("click", handleClickOutOfSelectBox);
                document.addEventListener("contextmenu", handleClickOutOfSelectBox);

            }, 200)

        }

        if (selectBoxList == true) {
            document.getElementById(selectBoxID + '_select_box_list_container').style.height = '0px'
            document.getElementById(selectBoxID + '_select_box_list_container').style.boxShadow = 'none'
            return setSelectBoxListState(false)
        }

    }

    const handleOnOptionSelected = event => {

        const optionSelected = event.target
        const optionSelectedReference = optionSelected.getAttribute('option_reference')
        const optionToSwitch = selectList[optionSelectedReference]

        const selectListOptions = selectList.slice(0, parseInt(optionSelectedReference)).concat(selectList.slice(parseInt(optionSelectedReference) + 1))
        selectListOptions.splice(optionSelectedReference, 0, defaultOptionFromList)

        setSelectList(selectListOptions)
        setDefaultOptionFromList(optionToSwitch)

        expandSelectBoxList()
        if (onOptionSelected) onOptionSelected()
    }

    return (

        <div id={selectBoxID + '_parent_element'} className={"Select-Box " + selectBoxStyle}>

            <div className="Selected-Box-Container" onClick={expandSelectBoxList}>

                <p id={selectBoxID + '_selected_label'} className="Selected-Option-Label">{defaultOptionFromList[optionLabelReference]}</p>

                <MdExpandMore className='Selected-Option-Icon' fill='#ffffff' size='30px' style={{ cursor: 'pointer' }} />

            </div>

            <div id={selectBoxID + '_select_box_list_container'} className="Select-Box-List-Container">

                {

                    selectList.map((selectOption, selectOptionIndex) => {

                        const optionLabel = selectOption[optionLabelReference]

                        if (!optionLabel && selectOption.actionLabel) {

                            const customOptionLabel = selectOption.actionLabel
                            const customOptionOnSelected = selectOption.customAction

                            const handleOnCustomOptionSelected = () => {

                                expandSelectBoxList()
                                customOptionOnSelected()
                            }

                            return (

                                <div className="Select-Box-Option-Container" key={'asd_' + selectOptionIndex} onClick={handleOnCustomOptionSelected}>

                                    <p className="Select-Box-Option-Label">{customOptionLabel}</p>

                                </div>

                            )

                        }

                        return (

                            <div className="Select-Box-Option-Container" key={selectBoxID + selectOptionIndex} onClick={handleOnOptionSelected} option_reference={selectOptionIndex}>

                                <p className="Select-Box-Option-Label" option_reference={selectOptionIndex}>{optionLabel}</p>

                            </div>

                        )

                    })

                }

            </div>

        </div>

    )

}