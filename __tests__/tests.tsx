import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Giris from '../src/navigation/pages/auth/LoginPage/Giris/Giris';

describe('giris component', () => {
  test('should update email state when input value changes', () => {
    const {getByPlaceholderText} = render(<Giris />);
    const emailInput = getByPlaceholderText('E-posta');

    fireEvent.changeText(emailInput, 'example@example.com');
    expect(emailInput.props.value).toBe('example@example.com');
  });

  test('should update password state when input value changes', () => {
    const {getByPlaceholderText} = render(<Giris />);
    const passwordInput = getByPlaceholderText('Parola');

    fireEvent.changeText(passwordInput, 'password123');
    expect(passwordInput.props.value).toBe('password123');
  });
});
