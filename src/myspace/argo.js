import React from "react";
import PageTitle from "../components/pageTitle/pageTitle";
import style from "./argo.module.scss"
import toBeUsedAddress from "../components/globalIP";
import MySpaceMainLayout from "../components/mySpaceMainLayout/mySpaceMainLayout";


//EMPTY SHIP ###################################################################################
const shipIsEmptyBanner = () => {
    return (
        <div className={style.sailingShipContainer}>
            <div className={style.sailingShipText}>
                Le bateaux est vide, ajoutez y des membres !
            </div>
            <img className={style.sailingShipIcon} src={"/sailingShip.svg"} alt={"sailingShip"}/>
        </div>);
}


export default class Argo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            crewMemberApiResponse: [],
            crewMemberNameInput: "",
            checkedMemberIdState: [],
            shipIsEmpty: true,
            error: 0,
            submitButtonIsClicked: false,

            itemsDeletionConfirmation: false,
        }


        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
        this.handleCrewMemberInputChange = this.handleCrewMemberInputChange.bind(this);
        this.addingCrewMember = this.addingCrewMember.bind(this);
        this.manageMemberCrewCheckBox = this.manageMemberCrewCheckBox.bind(this);
        this.manageDeletion = this.manageDeletion.bind(this);

        this.addMemberForm = React.createRef();
        this.addButtonRef = React.createRef();
        this.addMemberInputRef = React.createRef();
        this.addIconRef = React.createRef();
        this.submitIconRef = React.createRef();
        this.addButtonTextRef = React.createRef();
        this.addButtonWrapperRef = React.createRef();
        this.notificationRef = React.createRef();
    }


    componentDidMount() {
        this.getCrewMember();
    }


    // CRUD OPERATIONS #####################################################################################################################

    getCrewMember() {
        fetch(toBeUsedAddress.address + "/crewMember/getCrewMember")
            .then(response => response.json())
            .then((response) => {
                ((response.length !== 0) ? this.setState({shipIsEmpty: false}) : this.setState({shipIsEmpty: true}));
                return response;
            })
            .then(response => this.setState({crewMemberApiResponse: response}))
            .catch(function (error) {
                console.log(error);
            });
    }

    // ask the api to insert a new member
    insertCrewMember() {
        fetch(toBeUsedAddress.address + "/crewMember/insertCrewMember", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                memberName: this.state.crewMemberNameInput,
            })
        })
            .catch(error => console.log(error))
    }

    // ask the api to delete a member
    deleteCrewMember() {
        fetch(toBeUsedAddress.address + "/crewMember/deleteCrewMember", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                memberId: this.state.checkedMemberIdState,
            })
        })
            .catch(error => console.log(error));
    }


    /*
       1 - call the insert function in order to submit a member
       2 - remove the animation on addButton when the member is submit
       3 - get members again when a member is submit
       4 - empty the input when a member is submit
        */
    addingCrewMember(event) {
        event.preventDefault();
        const addingCrewMember = async () => {
            await this.checkInputRequired(this.state.crewMemberNameInput);
            if (this.state.error === 0) {
                this.insertCrewMember();
                this.removeAddButtonOnClickAnimation();

                let that = this;
                setTimeout(function () {
                    that.getCrewMember();
                }, (100));
            }
            this.setState({error: 0});
        }
        addingCrewMember()
            .then(() => this.setState({crewMemberNameInput: ""}))
            .catch(function (error) {
                console.log(error);
            });
    }


    /*
    show delete notification
    deleting a crew members will be done only if the clicked notificationButton is confirmation
    otherwise it will not be deleted
    in all cases, deleteNotification will be hidded after the user response
    */
    manageDeletion(event) {
        console.log(this.state.checkedMemberIdState)
        this.showDeleteNotification();
        let notificationResponseType = event.target.getAttribute("data-button-type");
        if (notificationResponseType === "confirmDeletion") {
            const deletingCrewMember = async () => {
                await this.deleteCrewMember();
                let that = this;
                setTimeout(function () {
                    that.getCrewMember();
                }, (100));
            }
            deletingCrewMember()
                .catch(function (error) {
                    console.log(error);
                })

            this.setState({checkedMemberIdState: []});
            this.hideDeleteNotification();
        } else if (notificationResponseType === "denyDeletion") {
            //empty checked checkedMemberId state

            this.setState({checkedMemberIdState: []});
            this.hideDeleteNotification();
        }
    }


    //separate crew members into groups of 3 members, every 3 in one array.
    separatingCrewMemberRows() {
        const crewMember = this.state.crewMemberApiResponse;
        const rows = [];

        for (let i = 0; i < crewMember.length; i++) {
            let oneRow = [];
            while (oneRow.length < 3) {
                oneRow.push(crewMember[i]);
                i++;
                if (i === crewMember.length) {
                    break;
                }
            }
            i--;
            rows.push(oneRow);
        }
        return rows;
    }

    // #######################################################################################################################################


    // VALIDATION #####################################################################################################################

    //check if a given input is required
    checkInputRequired(inputValue) {
        let regex = /^\s+/;
        if (regex.test(String(inputValue)) || inputValue.length === 0) {
            this.setState({error: this.state.error + 1})
        } else if (typeof (inputValue) === "undefined") {
            this.setState({error: this.state.error + 1})
        } else {
            this.setState({error: this.state.error});
        }
    }

    // BUTTON ANIMATION #####################################################################################################################
    //start animation on addButton when its clicked, remove animation when clicked outside the container
    handleAddButtonClick() {
        this.startAddButtonOnClickAnimation();
        let addButton = this.addButtonRef;
        let that = this;
        document.addEventListener("click", function (event) {
            let isClickedInsideElement = addButton.current.contains(event.target);
            document.removeEventListener("click", function (e) {
            });
            if (!isClickedInsideElement) {
                that.removeAddButtonOnClickAnimation();
            }
        });
    }

    //calling this function will start animation on the addButton
    startAddButtonOnClickAnimation() {
        let addButton = this.addButtonRef;
        let addMemberInput = this.addMemberInputRef;
        let addIcon = this.addIconRef;
        let submitIcon = this.submitIconRef;
        let addButtonText = this.addButtonTextRef;

        addButton.current.classList.add(style.addButtonClicked);
        submitIcon.current.classList.add(style.addButtonClicked);
        addIcon.current.classList.add(style.addButtonClicked)
        addMemberInput.current.classList.add(style.addButtonClicked);
        addButtonText.current.classList.add(style.addButtonClicked);
    }

    //calling this function will remove animation on the addButton
    removeAddButtonOnClickAnimation() {

        let addButton = this.addButtonRef;
        let addMemberInput = this.addMemberInputRef;
        let addIcon = this.addIconRef;
        let submitIcon = this.submitIconRef;
        let addButtonText = this.addButtonTextRef;

        addButton.current.classList.remove(style.addButtonClicked);
        submitIcon.current.classList.remove(style.addButtonClicked);
        addIcon.current.classList.remove(style.addButtonClicked)
        addMemberInput.current.classList.remove(style.addButtonClicked);
        addButtonText.current.classList.remove(style.addButtonClicked);


    }

    // #######################################################################################################################################

    //handle crewMember input when it is changed and update the state of its value
    handleCrewMemberInputChange(event) {
        this.setState({crewMemberNameInput: event.target.value});
    }


    // get the memberId of the checked member, put all memberIds in the checkedMemberIdState
    manageMemberCrewCheckBox(event) {
        let crewMember = event.target;
        let checkedMemberId = crewMember.getAttribute('data-key');
        let crewMemberCheckedStatus = crewMember.getAttribute('data-checkedstatus');

        if (crewMemberCheckedStatus === "unchecked") {
            this.setState({checkedMemberIdState: this.state.checkedMemberIdState.concat(checkedMemberId)});
            crewMember.setAttribute("data-checkedstatus", "checked");
        }

        if (crewMemberCheckedStatus === "checked") {
            //delete crewMemberId from checkedMemberIdState when it is unchecked
            this.setState({checkedMemberIdState: this.state.checkedMemberIdState.splice(this.state.checkedMemberIdState, checkedMemberId)});
            crewMember.setAttribute("data-checkedstatus", "unchecked");
        }

        console.log(this.state.checkedMemberIdState);
    }





    //check the crewMemberApiResponse if it is empty in order to show/or not the shipIsEmptyBanner
    shipIsEmptyStateUpdater() {
        let crewMember = this.state.crewMemberApiResponse;
        if (crewMember.length === 0) {
            this.setState({shipIsEmpty: true});
        } else {
            this.setState({shipIsEmpty: false});
        }
    }


    showDeleteNotification() {
        let notification = this.notificationRef;
        notification.current.classList.add(style.notificationShown);
    }

    hideDeleteNotification() {
        let notification = this.notificationRef;
        notification.current.classList.remove(style.notificationShown);
    }


    render() {
        const crewMembers = this.separatingCrewMemberRows();
        let shipIsEmpty = this.state.shipIsEmpty;
        return (
            <MySpaceMainLayout>

                <div ref={this.notificationRef} className={style.notificationContainer}>
                    <div className={style.notification}>
                        <span>
                            Voulez-vous vraiment supprimer ces elements ?
                        </span>
                        <div>
                            <span data-button-type={"confirmDeletion"} onClick={this.manageDeletion}
                                  className={style.notificationButtons + " " + style.notificationYesButton}>Oui</span>
                            <span data-button-type={"denyDeletion"} onClick={this.manageDeletion}
                                  className={style.notificationButtons + " " + style.notificationNoButton}>Non</span>
                        </div>
                    </div>
                </div>


                <header className={style.headerContainer}>
                    <PageTitle title={"Argonaute Challenge"}/>
                    <img
                        src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
                        className={style.schoolLogo} alt="Wild Code School logo"/>
                </header>

                <div className={style.crudButtonContainer}>
                    <div className={style.crudButtonWrapper}>
                        <div ref={this.addButtonRef}
                             onClick={this.handleAddButtonClick}
                             className={style.crudButton + " " + style.addButton}>
                            <form className={style.addMemberForm} ref={this.addMemberForm}
                                  onSubmit={this.addingCrewMember}>
                                <input ref={this.addMemberInputRef} type={"text"}
                                       onChange={this.handleCrewMemberInputChange}
                                       value={this.state.crewMemberNameInput}
                                       placeholder={"Nom"}
                                       className={style.addMemberInput}/>
                                <img ref={this.addIconRef}
                                     src={"/addIcon.svg"}
                                     alt={"addIcon"}
                                     className={style.crudIcon + " " + style.addIcon}/>
                                <input ref={this.submitIconRef}
                                       type={"image"}
                                       name={"submit"}
                                       alt={"submit"}
                                       src={"/addIcon.svg"}
                                       className={style.submitIcon}/>
                            </form>

                            <div ref={this.addButtonTextRef} className={style.addButtonText}>Ajouter</div>
                        </div>
                    </div>
                    <div>
                        {/*<div onClick={this.deletingCrewMember} className={style.crudButtonWrapper}>*/}
                        <div onClick={this.manageDeletion} className={style.crudButtonWrapper}>

                            <div className={style.crudButton + " " + style.deleteButton}>
                                <img src={"/deleteIcon.svg"} alt={"deleteIcon"} className={style.crudIcon}/>
                                <div>Supprimer</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>

                    {shipIsEmpty
                        ? shipIsEmptyBanner()
                        : <table className={style.crewMembersTable}>
                            <tbody>
                            {crewMembers.map((rows, index) =>
                                <tr className={style.tableRow} key={index}>
                                    {rows.map((row) =>
                                        <td className={style.tableCell} key={row.memberId}>
                                            <div className={style.crewMemberWrapper}>
                                                <label className={style.crewMemberContainer}>
                                                    <input type={"checkbox"}
                                                           key={row.memberId}
                                                           data-key={row.memberId}
                                                           data-checkedstatus={"unchecked"}
                                                           onChange={this.manageMemberCrewCheckBox}/>
                                                    <span className={style.checkMark}/>
                                                    <div className={style.memberName}>
                                                        {row.memberName}
                                                    </div>
                                                </label>
                                            </div>
                                        </td>
                                    )}
                                </tr>
                            )}
                            </tbody>
                        </table>
                    }
                </div>
            </MySpaceMainLayout>
        );
    }
}

