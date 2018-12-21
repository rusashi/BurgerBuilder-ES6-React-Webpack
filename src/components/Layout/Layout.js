import React from "react";
import Aux from "../../hoc/Auxilary";

const layout = (props) => (
    <Aux>
        <div>
            {props.children}
        </div>
    </Aux>
);

export default layout;