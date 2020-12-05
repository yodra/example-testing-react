import { Rating } from "../Rating";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

const renderRating = () => {
  render(<Rating/>);
  const paragraph = screen.getByText('0');
  const decrementButton = screen.getByText('-');
  const incrementButton = screen.getByText('+');

  const getRatingValue = () => paragraph.textContent;
  const decrement = () => fireEvent.click(decrementButton);
  const increment = () => fireEvent.click(incrementButton);

  return {
    decrement,
    increment,
    getRatingValue
  }
}

describe('Rating', () => {
  describe('render', () => {
    test('should render component', () => {
      render(<Rating/>);
    });

    test('should render two buttons', () => {
      render(<Rating/>);

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(2);
    });

    test('should render a paragraph with default value', () => {
      render(<Rating/>);

      const paragraph = screen.getByText('0');
      expect(paragraph).toBeInTheDocument();
    });
  });

  describe('when the user clicks on the decrement button', () => {
    test('should decrement the value at one', () => {
      const { decrement, getRatingValue } = renderRating();

      decrement();

      expect(getRatingValue()).toBe('-1');
    });

    test('should not reach the lower limit', () => {
      const { decrement, getRatingValue } = renderRating();

      decrement();
      decrement();
      decrement();
      decrement();
      decrement();
      decrement();

      expect(getRatingValue()).toBe('-5');
    });
  });

  describe('when the user clicks on the increment button', () => {
    test('should increment the value at one', () => {
      const { increment, getRatingValue } = renderRating();

      increment();

      expect(getRatingValue()).toBe('1');
    });

    test('should not reach the upper limit', () => {
      const { increment, getRatingValue } = renderRating();

      increment();
      increment();
      increment();
      increment();
      increment();
      increment();

      expect(getRatingValue()).toBe('5');
    });
  });
});
