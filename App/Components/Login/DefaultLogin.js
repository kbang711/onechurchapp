import React, { Component } from 'react'
import { Text, TouchableOpacity, View, TextInput } from 'react-native'
import SlidingUpPanel from 'rn-sliding-up-panel';
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from '../Styles/Login'

export default class DefaultLogin extends Component {

  state = {
    email: null,
    password: null
  }

  handleLoginButton = () => {
    this.props.handleLogin(this.state.email, this.state.password)
  }

  render () {
    console.disableYellowBox = true;
    return (
      <SlidingUpPanel
        visible={this.props.visible}
        onRequestClose={this.props.handleClose}
        showBackdrop={false}
      >
        <View style={styles.signup}>
          <Text style={styles.label}>
            Login with an existing <Text style={{fontWeight: 'bold'}}>OneChurch</Text> account
          </Text>
          <Icon name="envelope" style={styles.textIcon} />
          <TextInput
            autoCapitalize='none'
            spellCheck={false}
            style={styles.textField}
            placeholder="Email"
            placeholderTextColor= '#ddd'
            onChangeText={(email) => this.setState({email})}
          />
          <Icon name="key" style={styles.textIcon} />
          <TextInput
            secureTextEntry
            style={styles.textField}
            placeholder="Password"
            placeholderTextColor= '#ddd'
            onChangeText={(password) => this.setState({password})}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleLoginButton}
          >
            <Text
              style={styles.buttonText}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.passwordButton}
              onPress={this.props.handleClose}
            >
              <Text
                style={styles.passwordButtonText}
              >
                Forgot your password?
              </Text>
            </TouchableOpacity>
        </View>
      </SlidingUpPanel>
    )
  }
}