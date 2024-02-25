import React from "react";
import cn from 'classnames';

class ButtonCN extends React.Component {
    render(){
        const { isPressed, isHovered, label } = this.props

        const btnClass = cn('btn btn-primary', {
            'btn-pressed': isPressed,
            'btn-over': !isPressed && isHovered,
        })

        return <button className={btnClass}>{label}</button>
    }
}

export default ButtonCN