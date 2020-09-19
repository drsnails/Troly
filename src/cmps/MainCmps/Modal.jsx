import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { LoginSignupPage } from '../../pages/LoginSignupPage';
import { closeModal, showModal } from '../../store/actions/modalActions'

class _Modal extends React.Component {
    state = {
        dynamicCmp: '',
        curCmp: ''
    }
    componentDidMount() {
    }
    componentDidUpdate(prevProps,prevState) {
        const curCmp = this.state.curCmp || this.props.modal.cmp
        if (prevState.curCmp === curCmp) return
        let dynamicCmp = '';
        switch (curCmp) {
            case 'login':
                dynamicCmp = <LoginSignupPage page={true} handleClick={this.handleClick} />
                break
            case 'signup':
                dynamicCmp = <LoginSignupPage page={false} handleClick={this.handleClick} />
                break
            default:
                dynamicCmp = <div>proplem loading modal</div>
        }
        this.setState({ dynamicCmp, curCmp })

    }
    handleClick = (cmp) => {
        this.setState({ curCmp: cmp })
    }


    checkKey = (ev) => {
        if (ev.key === "Escape") this.closeModal()
    }

    closeModal = () => {
        this.props.closeModal()
    }


    render() {
        const showLoginSignup = this.state.curCmp === 'login'||this.state.curCmp ==='signup'? true:false;
        return (
            <div className={`modal-screen flex align-center justify-center ${this.props.modal.isShown ? '' : 'hide'}`} onKeyDown={this.checkKey} onMouseDown={this.closeModal}>
                <div className={`modal-container`} onMouseDown={(ev) => ev.stopPropagation()} >
                    <div className="modal-header" ><p>Login / Sign Up</p><button onClick={this.closeModal}>X</button></div>
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
        modal: state.modalReducer
    }
}
const mapDispatchToProps = {
    closeModal,
    showModal
}
export const Modal = connect(mapStateToProps, mapDispatchToProps)(withRouter(_Modal))
