import React from "react";
import withRoot from "./withRoot";

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const Root = () => 
<Query query={GET_TRACKS_QUERY}>
    {( {data, loading, error} ) => {
        // data: data retrieved when no error ocurred
        // loading: true or false if the query is being executed
        // error: error value
        if (loading) return <div>loading</div>
        if (error) return <div>error</div>

        return <div>{JSON.stringify(data)}</div>
    }}
</Query>
;

const GET_TRACKS_QUERY = gql`
 {
    tracks {
        id
        title
        description
        url
    }
 }
`

export default withRoot(Root);