import React from 'react';
import axios from 'axios';

import { Card, Button } from 'antd';

import CustomForm from '../components/Form'

class ArticleDetail extends React.Component {

    state = {
        article: [] //not plural
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID; //get what's after the /
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => {
                this.setState({
                    article: res.data //not plural 
                });
            })
    }

    handleDelete = (event) => {
        const articleID = this.props.match.params.articleID;
        axios.delete(`http://127.0.0.1:8000/api/${articleID}`);
        this.props.history.push('/'); //return to ListView
        this.forceUpdate(); //reset the articles OR think of a way to do it client-side

    }

    render() {
        return (
            <div>
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content}</p>
                </Card>
                <h2> Update Article </h2>
                <CustomForm 
                    requestType="put"
                    articleID={this.props.match.params.articleID} 
                    btnText="Update"
                />
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>
            </div>
        )
    }
}

export default ArticleDetail;