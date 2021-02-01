import React, { useEffect, useRef } from "react";
import { Item } from "./Item/Item";
import { Spinner } from "../../../components/Spinner/Spinner";
import "./List.scss";

export const List = ( { isLoading, items } ) => {
    const listRef = useRef( null );

    useEffect( () => {
        if( listRef.current && items.length ){
            listRef.current.scrollIntoView( { block: "start" } );
        }
    },[ items ] );

    if( isLoading ) {
        return ( <Spinner className="list-spinner" /> );
    }
    if( items.length === 0 ){
        return ( <div className="list-empty-state">No Items...</div> );
    }

    return (
        <div className="list-wrapper">
            <div className="list" ref={listRef}>
                { items.map( ( { code, ...restItemProps } ) => ( <Item key={code} {...restItemProps}/> ) ) }
            </div>
        </div>
    );
};