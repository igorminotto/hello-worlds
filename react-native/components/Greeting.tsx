import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";

interface GreetingProps {
    name: string;
    color?: string;
}

export default class Greeting extends Component<GreetingProps> {
    private styles = StyleSheet.create({
        text: {
            color: this.props.color || 'white'
        }
    });

    render() {
        return (
            <Text style={this.styles.text}>Hello, {this.props.name}</Text>
        );
    }
}