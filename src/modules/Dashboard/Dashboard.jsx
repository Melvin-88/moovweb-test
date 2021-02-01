import React, { useCallback, useEffect, useState } from "react";
import { List } from "./List/List";
import { Pagination } from "../../components/Pagination/Pagination";
import { SearchPanel } from "../../components/SearchPanel/SearchPanel";
import { API, ITEMS_PER_PAGE } from "../../constants/general";
import { toast } from "react-toastify";
import { useDebounce } from "../../hooks/useDebounce";
import "./Dashboard.scss";

export const Dashboard = () => {
    const [ isLoading, setIsLoading ] = useState( false );
    const [ activePage, setActivePage ] = useState( 1 );
    const [ searchText, setSearchText ] = useState( "" );
    const [ responseData, setResponseData ] = useState( [] );
    const [ currentList, setCurrentList ] = useState( [] );
    const [ total, setTotal ] = useState( 0 );

    const debouncedValue = useDebounce( searchText, 500 );

    const handleGetList = useCallback( () => {
        setIsLoading( true );
        fetch( API )
            .then( res => res.json() )
            .then(
                ( result ) => {
                    setIsLoading( false );
                    setResponseData( result.pageItems );
                },
                ( error ) => {
                    setIsLoading( false );
                    toast.error( error );
                }
            );
    },[ setIsLoading, setResponseData ] );

    const handleSearchCard = useCallback( ( event ) => {
        setSearchText( String( event.target.value ).toLowerCase() );
    },[ setSearchText ] );

    useEffect( () => {
        let indexOfLastItem = activePage * ITEMS_PER_PAGE;
        let indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
        let listData = responseData;

        if( searchText && debouncedValue ){
            indexOfLastItem = ITEMS_PER_PAGE;
            indexOfFirstItem = 0;
            listData = responseData.filter( ( { productName } ) => productName.toLowerCase().indexOf( searchText ) !== -1 );

            setTotal( listData.length );
        }else {
            setTotal( responseData.length );
        }
        const slicedList = listData.slice( indexOfFirstItem, indexOfLastItem );

        setCurrentList( slicedList );
    },[
        activePage,
        responseData,
        searchText,
        setCurrentList,
        setTotal,
        debouncedValue
    ] );

    const handleChangePage = useCallback( ( event, newPage )=>{
        setActivePage( newPage );
    }, [ setActivePage ] );

    useEffect( () => {
        handleGetList();
    },[ handleGetList ] );

    return (
        <div className='dashboard'>
            <SearchPanel
                value={searchText}
                onChange={handleSearchCard}
                disabled={!currentList.length && !searchText}
            />
            <List isLoading={isLoading} items={currentList}/>
            <Pagination
                itemsPerPage={ITEMS_PER_PAGE}
                total={total}
                page={activePage}
                onChange={handleChangePage}
            />
        </div>
    );
};