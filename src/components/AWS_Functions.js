import * as AWS from 'aws-sdk'

const docClient = new AWS.DynamoDB.DocumentClient()

export const fetchData = (tableName) => {
    var params = {
        TableName: tableName
    }

    docClient.scan(params, function (err, data) {
        if (!err) {
            console.log(data)
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

// Fetching and putting data in DynamoDB
/*

import {fetchData , putData} from './AwsFunctions';

export default const App = () => {
  
  const fetchDataFormDynamoDb = async () => {
    await fetchData('users')
  }
  
  const addDataToDynamoDB = async () => {
    const userData = {
      name:"Faisal",
      age:"170"
    }
    
    await putData('users' , userData)
  }
  
  return <>
    <button onClick={() => fetchDataFormDynamoDb()}> Fetch </button>
    <button onClick={() => addDataToDynamoDB()}> Put </button>
  </>
}

*/