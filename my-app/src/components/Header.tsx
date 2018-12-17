import React from "react";

type Props = {
    headerText: string;
};

const Header: React.FunctionComponent<Props> = ({ headerText }) => (
    <h1>{ headerText }</h1>
);

export default Header;
