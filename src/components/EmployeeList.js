import React, { Component } from "react";
import { Text } from 'react-native';

import {Card, CardSection, Input, CustomButton} from "./common";
 

class EmployeeList extends Component {
   
    
    render() {
        
        return (
            <Card>
                <CardSection>
                    <Text>EmployeeList 1</Text>
                </CardSection>
                <CardSection>
                    <Text>EmployeeList 1</Text>
                </CardSection> 
                <CardSection>
                    <Text>EmployeeList 1</Text>
                </CardSection>
            </Card>
        );
    }
}
 
export default EmployeeList;