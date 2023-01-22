import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'

// create configuration for AWS
const creds = require('../Cred_Config').default

const configuration: ConfigurationOptions = {
    region: creds.region,
    secretAccessKey: creds.secret_key,
    accessKeyId: creds.access_key_id,
}

AWS.config.update(configuration)

const docClient = new AWS.DynamoDB.DocumentClient()

export const fetchData = (tableName) => {
    var params = {
        TableName: tableName
    }

    docClient.scan(params, function (err, data) {
        if (!err) {
            for (var i = 0; i < data.Items.length; i++) {
                console.log(data.Items[i].username)
            }
        } else {
            console.log(err)
        }
    })
}

export const putData = (tableName , data) => {
    var params = {
        TableName: tableName,
        Item: data
    }

    docClient.put(params, function (err, data) {
        if (err) {
            console.log('Error', err)
        } else {
            console.log('Success', data)
        }
    })
}

// function to query username and password from users table
export const queryData = async (tableName, data) => {
    
    try {
        var params = {
            TableName: tableName,
            ExpressionAttributeValues: {
                ':username': data.username,
            },
            KeyConditionExpression: 'username = :username',
        };
        // return contents of query to login function
        var result = await docClient.query(params).promise();
        return result.$response.data.Items[0].password;
    } catch (err) {
        console.log(err);
    }

}

/*

import './StartPage.css';
import {fetchData , putData} from './components/AWS_Functions';

const fetchDataFormDynamoDb = async () => {
    await fetchData('users')
  }

  const addDataToDynamoDB = async () => {
    const userData = {
      'username': 'akeen',
      'name': 'Aaron Keen',
      'password': 'akeen-pass',
      'bikes': '{}'
    }

    await putData('users' , userData)
  }

function StartPage() {
  return (
    <div className="App">
        <button onClick={() => fetchDataFormDynamoDb()}> Fetch </button>
        <button onClick={() => addDataToDynamoDB()}> Put </button>
        <img src="bike.jpeg" className='image-container' alt="logo" />
    </div>
  );
}

*/