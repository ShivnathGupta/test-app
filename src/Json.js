import React, { Component } from 'react'
let database = {

    "data": [{
        "type": "articles1",
        "id": "1",
        "attributes": { "title": "JSON:API paints my bikeshed!" },
        "relationships": {
            "author":
            {
                "links":
                {
                    "self": "1http://example.com/articles/1/relationships/author",
                    "related": "2http://example.com/articles/1/author"
                },
                "data": { "type": "people", "id": "9" }
            },
            "comments": {
                "links":
                {
                    "self": "1http://example.com/articles/1/relationships/comments",
                    "related": "2http://example.com/articles/1/comments"
                },
                "data": [
                    { "type": "comments1", "id": "5" },
                    { "type": "comments2", "id": "12" }
                ]
            }
        },
        "links": { "self": "http://example.com/articles/1" }
    },
    {
        "type": "articles2",
        "id": "2",
        "attributes": { "title": "JSON:API paints my bikeshed!" },
        "relationships": {
            "author":
            {
                "links":
                {
                    "self": "3http://example.com/articles/1/relationships/author",
                    "related": "4http://example.com/articles/1/author"
                },
                "data": { "type": "people", "id": "9" }
            },
            "comments": {
                "links":
                {
                    "self": "3http://example.com/articles/1/relationships/comments",
                    "related": "4http://example.com/articles/1/comments"
                },
                "data": [
                    { "type": "comments3", "id": "5" },
                    { "type": "comments4", "id": "12" }
                ]
            }
        },
        "links": { "self": "http://example.com/articles/1" }
    },
    {
        "type": "articles3",
        "id": "3",
        "attributes": { "title": "JSON:API paints my bikeshed!" },
        "relationships": {
            "author":
            {
                "links":
                {
                    "self": "5http://example.com/articles/1/relationships/author",
                    "related": "6http://example.com/articles/1/author"
                },
                "data": { "type": "people", "id": "9" }
            },
            "comments": {
                "links":
                {
                    "self": "5http://example.com/articles/1/relationships/comments",
                    "related": "6http://example.com/articles/1/comments"
                },
                "data": [
                    { "type": "comments5", "id": "5" },
                    { "type": "comments6", "id": "12" }
                ]
            }
        },
        "links": { "self": "http://example.com/articles/1" }
    }],

    "included": [{
        "type": "people",
        "id": "9",
        "attributes": {
            "firstName": "Dan",
            "lastName": "Gebhardt",
            "twitter": "dgeb"
        },
        "links": { "self": "http://example.com/people/9" }
    },
    {
        "type": "comments",
        "id": "5",
        "attributes": { "body": "First!" },
        "relationships": {
            "author":
            {
                "data": { "type": "people", "id": "2" }
            }
        },
        "links": { "self": "http://example.com/comments/5" }
    },
    {
        "type": "comments",
        "id": "12",
        "attributes": { "body": "I like XML better" },
        "relationships": {
            "author":
            {
                "data":
                    { "type": "people", "id": "9" }
            }
        },
        "links": { "self": "http://example.com/comments/12" }
    }]
}


class Json extends Component {
    loadData = () => {
        let myRows = [];
        database.data.map(function (item, index) {
            

            let row = <tr key={item.id}>


                <td>{item.type}</td>
                <td>{item.id}</td>
                <td>{item.attributes.title}</td>
                <td><table border="1px" width="100%" style={{ background: "Green" }}>
                    <thead>
                        <tr>
                            <th>Link</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>
                                <table border="1px" width="100%" style={{ background: "blue" }}>
                                    <tr>
                                        <th>Self</th>
                                        <th>related</th>
                                    </tr>
                                    <tr>
                                        <td>{item.relationships.author.links.self}</td>
                                        <td>{item.relationships.author.links.related}</td>
                                    </tr>
                                </table>
                            </td>
                            <td>{item.relationships.author.data.type}</td>
                        </tr>
                    </tbody>
                </table>
                </td>
                <td>
                    <table border="1px" width="100%" style={{ background: "Green" }}>
                        <thead>
                            <tr>
                                <th>Link</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <table border="1px" width="100%" style={{ background: "blue" }}>
                                        <thead>
                                            <tr>
                                                <th>Self</th>
                                                <th>related</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{item.relationships.comments.links.self}</td>
                                                <td>{item.relationships.comments.links.related}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <td>
                                    <table border="1px" width="100%" style={{ background: "blue" }}>
                                        <thead>
                                            <tr>
                                                <th>Type</th>
                                                <th>id</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>
                                                {item.relationships.comments.data.map(function(it){
                                                    let Td2=[];
                                                    let Td=<tr><td>{it.type}</td></tr>
                                                    Td2.push(Td) 
                                                    return Td2 })}
                                            </td>
                                            <td>
                                                {item.relationships.comments.data.map(function(it){
                                                    let Td2=[];
                                                    let Td=<tr><td>{it.id}</td></tr>
                                                    Td2.push(Td) 
                                                    return Td2 })}
                                            </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>

            </tr>

            myRows.push(row);

        });
    
        return (myRows);
    };



    render() {
        
        return (
            <div>
                <table border="2px" cellPadding="20px" cellSpacing="2px" style={{ background: "yellow" }}>
                    <thead>
                        <th>Type</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Authour</th>
                        <th>Comments</th>
                    </thead>
                    <tbody>
                        {this.loadData()}
                    </tbody>
                </table>
               
            </div>
        );
    }
}
export default Json;