import React, {Component, PropTypes} from "react";

import {noop, debounce, defaults, values} from "lodash";

import {getValueFromEvent} from "common/utils/clientUtils";

class FormEditWrapper extends Component {
    static propType = {
        value : PropTypes.object.isRequired,
        isEditing : PropTypes.bool,
        onChange : PropTypes.func,
        valuePropName : PropTypes.string,
        onChangePropName : PropTypes.string,
        singleValue : PropTypes.bool,
        passIsEditing : PropTypes.bool,
        dispatchDelay : PropTypes.number,
    }

    static defaultProps = {
        isEditing : true,
        onChange : noop,
        valuePropName : "value",
        onChangePropName : "onChange",
        singleValue : false,
        passIsEditing : true,
        dispatchDelay : 250,
    }
}