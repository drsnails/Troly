import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { LoginSignupPage } from '../../pages/LoginSignupPage';
import { closeModal, showModal } from '../../store/actions/modalActions'
import { closeMsg, showMsg } from '../../store/actions/msgActions';
import { EditActivity } from '../TripAssembly/EditActivity';
import { AddReview } from '../tripReviews/AddReview';


class _Modal extends React.Component {
    state = {
        dynamicCmp: '',
        nameToDisplay: ''
    }
    componentDidMount() {
    }
    componentDidUpdate(prevProps, prevState) {
        const curCmp = this.props.modal.cmp
        console.log(prevProps.modal.cmp, curCmp);
        if (prevProps.modal.cmp === curCmp) return
        let dynamicCmp = '';
        let nameToDisplay = '';
        switch (curCmp) {
            case 'login':
                dynamicCmp = <LoginSignupPage page={true} handleClick={this.handleClick} />
                nameToDisplay = 'Please Login'
                break
            case 'signup':
                dynamicCmp = <LoginSignupPage page={false} handleClick={this.handleClick} />
                nameToDisplay = 'Please Sign Up'
                break
            case 'editActivity':
                dynamicCmp = <EditActivity props={this.props.modal.props} />
                nameToDisplay = 'Edit activity'
                break
            case 'add-review':
                console.log(this.props);
                dynamicCmp = <AddReview props={this.props.modal.props.addReview} showMsg={this.props.showMsg}
                closeMsg={this.props.closeMsg} closeModal={this.closeModal} />
                nameToDisplay = 'Add Review'
                break
            default:
                dynamicCmp = <div>proplem loading modal</div>
        }
        this.setState({ dynamicCmp, nameToDisplay })

    }
    handleClick = (cmp) => {
        this.props.showModal(cmp)
    }


    checkKey = (ev) => {
        if (ev.key === "Escape") this.closeModal()
    }

    closeModal = () => {
        this.props.closeModal()
    }


    render() {
        const showLoginSignup = this.state.curCmp === 'login' || this.state.curCmp === 'signup' ? true : false;
        console.log(this.state.dynamicCmp);
        return (
            <div className={`modal-screen flex align-center justify-center ${this.props.modal.isShown ? '' : 'hide'}`} onKeyDown={this.checkKey} onMouseDown={this.closeModal}>
                <div className={`modal-container `} onMouseDown={(ev) => ev.stopPropagation()} >
                    <div className="modal-header flex align-center justify-center styled-header" ><p>{this.state.nameToDisplay}</p><button onClick={this.closeModal}>X</button></div>
                    <div className="modal-content"  >

                        {this.state.dynamicCmp}
                    </div>
                </div >
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        modal: state.modalReducer,
        msg: state.msgReducer.msg
    }
}
const mapDispatchToProps = {
    closeModal,
    showModal,
    showMsg,
    closeMsg
}
export const Modal = connect(mapStateToProps, mapDispatchToProps)(withRouter(_Modal))
