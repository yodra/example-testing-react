import { Rating } from "../Rating";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

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
      render(<Rating/>);
      const decrementButton = screen.getByText('-');
      const paragraph = screen.getByText('0');

      fireEvent.click(decrementButton);

      expect(paragraph.textContent).toBe('-1');
    });
  });

  describe('when the user clicks on the increment button', () => {
    test('should increment the value at one', () => {
      render(<Rating/>);
      const incrementButton = screen.getByText('+');
      const paragraph = screen.getByText('0');

      fireEvent.click(incrementButton);

      expect(paragraph.textContent).toBe('1');
    });
  });
});
